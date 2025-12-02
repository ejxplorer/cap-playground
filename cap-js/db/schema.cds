namespace db;

entity PersonDetail {
    key ID : UUID;
    name : String;
    age : String;
    address : String;
    weight: Integer;
}


entity ExchangeRate {
    key ID : UUID;
    RESULT : Integer;
    CUR_UNIT : String;
    CUR_NM   : String;
    TTB      : String;
    TTS      : String;
    DEAL_BAS_R      : String;
    BKPR      : String;
    YY_EFEE_R      : String;
    TEN_DD_EFEE_R      : String;
    KFTC_DEAL_BAS_R      : String;
    KFRC_BKPR      : String;
    UPDATE_AT : DateTime;
}