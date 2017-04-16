Ext.define('MyApp.view.session.SessionLayout', {
    extend: 'Ext.Container',
    xtype: 'sessionlayout',
    itemId: 'sessionLayout',
    id: 'sessionLayout',

    requires: [
        'Ext.Panel',
        'MyApp.view.session.SessionList',
        'MyApp.view.presenter.PresenterList'
    ],

    title: 'Panel',

    layout: 'fit',


    items: [{
        xtype: 'panel',

        layout: 'border',

        defaults: {
            xtype: 'panel',

            split: true,
            collapsible: true
        },

        items: [
            {
                itemId: 'sessionList',

                region: 'west',
                flex: 2,

                layout: {
                    type: 'vbox',
                    align : 'stretch',
                    pack  : 'start'
                },

                title: 'Sessions/Presenters',
                header: false,

                defaults: {
                    collapsible: true
                },

                items: [{
                    xtype: 'sessionlist',
                    region: 'west',
                    flex: 4,

                    title: 'Sessions'
                }, {
                    xtype: 'presenterlist',
                    region: 'west',
                    flex: 2,
                    split: true,

                    title: 'Presenters'
                }]
            }, {
                region: 'center',
                flex: 3,

                split: true,
                collapsible: true,

                title: 'Session Details',
                html: 'details'
            }
        ]
    }]
});
