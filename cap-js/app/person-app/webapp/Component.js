// UI5 애플리케이션의 루트 컴포넌트
// Fiori Elements는 sap.fe.core.AppComponent를 확장하여 사용
sap.ui.define(["sap/fe/core/AppComponent"],function (Component) {
    "use strict";

    return Component.extend("personnamespace.personapp.Component", {
        metadata: {
            manifest: "json"        // manifest.json 파일을 메타데이터로 사용
        }
    });
});