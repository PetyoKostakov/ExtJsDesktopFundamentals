Ext.define('MyApp.view.session.SessionList', {
    extend: 'Ext.grid.Panel',
    xtype: 'sessionlist',
    itemId: 'sessionList',

    requires: [
        'MyApp.view.session.SessionModel',
        'MyApp.view.session.SessionController',
        'Ext.grid.column.Check'
    ],

    controller: 'session',
    viewModel: 'session',

    title: 'Sessions',

    bind: {
        store: '{session}'
    },

    columns: [
        { text: 'Length', dataIndex: 'length' },
        { text: 'Name', dataIndex: 'title', flex: 1 },
        { xtype: 'checkcolumn', text: 'Attend', dataIndex: 'attend', disabled: true}
    ],

    listeners: {
        itemdblclick: 'onSessionItemDblClick',
        select: 'onSessionItemSelect'
    }
});
