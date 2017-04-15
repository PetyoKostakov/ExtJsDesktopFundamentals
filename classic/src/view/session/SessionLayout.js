Ext.define('MyApp.view.session.SessionLayout', {
    extend: 'Ext.Container',
    xtype: 'sessionlayout',
    itemId: 'sessionLayout',
    id: 'sessionLayout',

    requires: [
        'Ext.Panel'
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
                    xtype: 'panel',
                    collapsible: true
                },

                items: [{
                    region: 'west',
                    flex: 4,

                    title: 'Sessions',
                    html: 'sessions'
                }, {
                    region: 'west',
                    flex: 2,
                    split: true,

                    title: 'Presenters',
                    html: 'presenters'
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
