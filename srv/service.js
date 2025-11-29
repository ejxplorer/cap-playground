const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { PersonDetail } = this.entities;

    // PersonDetail 엔티티에 대한 CREATE (C) 핸들러
    this.on('CREATE', 'PersonDetail', async (req) => {
        try {
            const data = req.data;
            
            // UUID가 없으면 자동 생성
            if (!data.ID) {
                data.ID = cds.utils.uuid();
            }

            const result = await INSERT.into(PersonDetail).entries(data);
            
            // 생성된 데이터 조회해서 반환
            const created = await SELECT.one.from(PersonDetail).where({ ID: data.ID });
            return created;
        } catch (error) {
            req.error(500, `Error creating PersonDetail: ${error.message}`);
        }
    });

    // Person 엔티티에 대한 UPDATE (U) 핸들러
    this.on('UPDATE', 'Person', async (req) => {
        try {
            const { ID } = req.data;
            
            if (!ID) {
                return req.error(400, 'ID is required for update');
            }

            // 존재 여부 확인
            const existing = await SELECT.one.from(PersonDetail).where({ ID });
            if (!existing) {
                return req.error(404, `Person with ID ${ID} not found`);
            }

            // Person projection에 포함된 필드만 업데이트
            const updateData = {};
            if (req.data.name !== undefined) updateData.name = req.data.name;
            if (req.data.age !== undefined) updateData.age = req.data.age;
            if (req.data.address !== undefined) updateData.address = req.data.address;

            await UPDATE(PersonDetail).set(updateData).where({ ID });
            
            // 업데이트된 데이터 조회 (Person projection 기준)
            const updated = await SELECT.one.from(PersonDetail)
                .columns('ID', 'name', 'age', 'address')
                .where({ ID });
            
            return updated;
        } catch (error) {
            req.error(500, `Error updating Person: ${error.message}`);
        }
    });

    // Person 엔티티에 대한 READ (R) 핸들러 - 커스텀 로직 추가 예시
    this.on('READ', 'Person', async (req, next) => {
        try {
            // 기본 READ 실행
            const result = await next();
            
            // 추가 로직이 필요하면 여기서 처리
            console.log(`Retrieved ${result.length || 1} person(s)`);
            
            return result;
        } catch (error) {
            req.error(500, `Error reading Person: ${error.message}`);
        }
    });

    // Person 엔티티에 대한 DELETE (D) 핸들러
    this.on('DELETE', 'Person', async (req) => {
        try {
            const { ID } = req.data;
            
            if (!ID) {
                return req.error(400, 'ID is required for delete');
            }

            // 존재 여부 확인
            const existing = await SELECT.one.from(PersonDetail).where({ ID });
            if (!existing) {
                return req.error(404, `Person with ID ${ID} not found`);
            }

            await DELETE.from(PersonDetail).where({ ID });
            
            return { message: 'Person deleted successfully' };
        } catch (error) {
            req.error(500, `Error deleting Person: ${error.message}`);
        }
    });
});