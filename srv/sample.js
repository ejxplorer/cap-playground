module.exports = (srv) => {

    // 외부 API 호출 후 DB에 저장
    srv.on('fetchAndStoreExternalData', async (req) => {
        // 1️⃣ 외부 API 호출
        const response = await fetch('https://oapi.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=0lHQwfPmdrLJdwsTswVeREPECsfsyLNm&data=AP01&searchdate');
        const data = await response.json();
        console.log("API data:", data);

        // 2️⃣ DB 엔터티 가져오기
        const db = await cds.connect.to('db');  // HDI 연결
        const { Responses } = srv.entities;      // Responses 엔터티 가져오기

        // 3️⃣ DB에 저장 (예시: ExternalResponse 구조를 Responses 테이블에 맞춰서)
        const insertData = data.map(item => ({
            ID: cds.utils.uuid(),        // key 값 생성
            RESULT: item.result,                   // 임의 값
            CUR_UNIT: item.cur_unit,     // API 데이터 맞춤
            CUR_NM: item.cur_nm,
            TTB: item.ttb,               // 원하면 추가
            TTS: item.tts,               // 원하면 추가
            DEAL_BAS_R: item.deal_bas_r,
            BKPR: Number(item.bkpr),
            YY_EFEE_R: item.yy_efee_r,
            TEN_DD_EFEE_R: item.ten_dd_efee_r,
            KFTC_DEAL_BAS_R: item.kftc_deal_bas_r,
            KFRC_BKPR: item.kftc_bkpr,
            UPDATE_AT: new Date()        // Date 객체 그대로 넣기
        }));

        // 4️⃣ DB에 삽입
        await db.tx(async (tx) => {
            await tx.insert(insertData).into(Responses);
        });

        // 5️⃣ 삽입 후 바로 DB 내용 반환
        return await db.read(Responses);
    });

};