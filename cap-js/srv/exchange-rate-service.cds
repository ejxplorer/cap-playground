using db from '../db/schema';

service ExchangeRateService {
    entity ExchangeRate as projection on db.ExchangeRate;
    
    action fetchData();
}