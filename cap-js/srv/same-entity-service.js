const cds = require('@sap/cds');

module.exports = (srv) => {
    const EXTERNAL_EXCHANGERATE_API = 'https://oapi.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=0lHQwfPmdrLJdwsTswVeREPECsfsyLNm&data=AP01&searchdate';

    srv.on('fetchData', async(req) => {
        try {
            const response = await fetch(EXTERNAL_EXCHANGERATE_API);
            
            if (!response.ok) {
                throw new Error(`External API failed: ${response.status}`);
            }
            const data = await response.json();

            if (!data || data.length === 0) {
                throw new Error('No data received from external API');
            }

            const db = await cds.connect.to('db');
            const { ExchangeRate } = srv.entities;

            await db.tx(async (tx) => {
                await tx.run(DELETE.from(ExchangeRate));
                console.log('Deleted all existing data');

                const insertData = data.map(item => ({
                    ID: cds.utils.uuid(),
                    RESULT: item.result,
                    CUR_UNIT: item.cur_unit,
                    CUR_NM: item.cur_nm,
                    TTB: item.ttb,
                    TTS: item.tts,
                    DEAL_BAS_R: item.deal_bas_r,
                    BKPR: item.bkpr,
                    YY_EFEE_R: item.yy_efee_r,
                    TEN_DD_EFEE_R: item.ten_dd_efee_r,
                    KFTC_DEAL_BAS_R: item.kftc_deal_bas_r,
                    KFRC_BKPR: item.kftc_bkpr,
                    UPDATE_AT: new Date()
                }));

                await tx.run(INSERT.into(ExchangeRate).entries(insertData));
                console.log(`Inserted ${insertData.length} records`);
            });

            // 성공 메시지 반환
            return { message: 'Success', count: data.length };

        } catch (error) {
            console.error('Error in fetchData:', error);
            req.error(500, `Failed to fetch and update data: ${error.message}`);
        }
    });

};