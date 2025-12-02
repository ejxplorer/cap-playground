service ExternalS4hanaService {
        entity ZJSV001 {
        key id : Integer;
        userId : Integer;
        title : String;
        completed : Boolean;
    }

    action callS4HANA();
}