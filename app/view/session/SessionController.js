Ext.define('MyApp.view.session.SessionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.session',

    requires: [
        'MyApp.view.session.SessionWindowForm'
    ],

    onSessionItemDblClick ( gridPanel , record , item , index , e , eOpts ) {
        var formWindow = Ext.create('MyApp.view.session.SessionWindowForm');

        formWindow.down('#sessionForm').loadRecord(record);
        formWindow.show();
    }
});
