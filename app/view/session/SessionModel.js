Ext.define('MyApp.view.session.SessionModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.session',

    requires: [
        'MyApp.store.Session'
    ],

    stores: {
        'session': Ext.create('MyApp.store.Session')
    }
});
