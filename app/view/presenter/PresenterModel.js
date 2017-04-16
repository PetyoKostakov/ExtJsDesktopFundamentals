Ext.define('MyApp.view.presenter.PresenterModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.presenter',

    requires: [
        'MyApp.store.Presenter'
    ],

    stores: {
        'presenter': Ext.create('MyApp.store.Presenter')
    }
});
