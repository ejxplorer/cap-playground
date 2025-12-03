sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"personnamespace/personapp/test/integration/pages/PersonList",
	"personnamespace/personapp/test/integration/pages/PersonObjectPage"
], function (JourneyRunner, PersonList, PersonObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('personnamespace/personapp') + '/test/flp.html#app-preview',
        pages: {
			onThePersonList: PersonList,
			onThePersonObjectPage: PersonObjectPage
        },
        async: true
    });

    return runner;
});

