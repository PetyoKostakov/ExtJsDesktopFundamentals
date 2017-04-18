Ext.define('MyApp.view.session.SessionDetails', {
    extend: 'Ext.panel.Panel',
    xtype: 'sessiondetails',

    tpl: [
        '{id} - {title} - {length}',
        '<tpl for="presenters">',
            '<p>{name}</p>',
        '</tpl>'
    ],

    bodyPadding: 20
});