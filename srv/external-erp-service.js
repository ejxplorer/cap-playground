const cds = require('@sap/cds');

module.exports = (srv) => {
    const EXTERNAL_ERP_API = 'https://bnbsap.com/sap/opu/odata/sap/ZJSV001_CDS/ZJSV001';

    srv.on('fetchData', async(req) => {
        const username = 'DBCCLRL';
        const password = 'Dlwotmd12!';
        
        // Basic Auth 인코딩
        const credentials = btoa(`${username}:${password}`);

        try {
            const response = await fetch(EXTERNAL_ERP_API, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Basic ${credentials}`,
                    'User-Agent': 'Mozilla/5.0'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Response:', data);
            return data;
            
        } catch (error) {
            console.error('Error:', error);
        }

    });

};