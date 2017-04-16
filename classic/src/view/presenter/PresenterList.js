Ext.define('MyApp.view.presenter.PresenterList', {
    extend: 'Ext.grid.GridPanel',

    xtype: 'presenterlist',

    requires: [
        'MyApp.view.presenter.PresenterModel'
    ],

    viewModel: 'presenter',

    title: 'Presenter',

    bind: {
        store: '{presenter}'
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
    ]
});