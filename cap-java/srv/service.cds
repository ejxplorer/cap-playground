using db from '../db/schema';

service PersonService {
    entity Person as projection on db.PersonDetail {
        ID,
        name,
        age,
        address
    };
    entity PersonDetail as projection on db.PersonDetail;
}