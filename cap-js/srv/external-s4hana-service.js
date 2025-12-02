const cds = require('@sap/cds');
const axios = require('axios');
const https = require('https');

// Agent를 미리 생성
const agent = new https.Agent({
    rejectUnauthorized: false
});


// ERROR LOG
// tls: failed to verify certificate: x509: certificate signed by unknown authority
module.exports = cds.service.impl(async function() {
    this.on('READ', async (req) => {
        const s4hanaUrl = 'https://bnbsap.com/sap/opu/odata/sap';

        const auth = {
            username: 'DBCCLRL',
            password: '123!'
        };
        
        try {
            const response = await axios.get(`${s4hanaUrl}/ZJSV001_CDS/ZJSV001`, {
                auth: auth,
                headers: {
                'Accept': 'application/json'
                },
                httpsAgent: agent
            });
            
            console.log('S/4HANA response: ', response);
            
            return response.data;
        } catch (error) {
             req.error(500, `External S/4HANA API 호출 실패: ${error.response.data}`);
        }
    });

    
    this.on('callS4HANA', async (req) => {
        const s4hanaUrl = 'https://bnbsap.com/sap/opu/odata/sap';

        const auth = {
            username: 'DBCCLRL',
            password: '123!'
        };
        
        try {
            const response = await axios.get(`${s4hanaUrl}/ZJSV001_CDS/ZJSV001`, {
                auth: auth,
                headers: {
                'Accept': 'application/json'
                },
                httpsAgent: agent
            });
            
            console.log('ACTION S/4HANA response: ', response);
            
            return response.data;
        } catch (error) {
             req.error(500, `External S/4HANA API 호출 실패: ${error.response.data}`);
        }
    });

});