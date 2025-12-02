using db from '../db/schema';

service SameEntityService {
    entity ExchangeRate as projection on db.ExchangeRate;

    action fetchData();
}