sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'personnamespace.personapp',
            componentId: 'PersonObjectPage',
            contextPath: '/Person'
        },
        CustomPageDefinitions
    );
});