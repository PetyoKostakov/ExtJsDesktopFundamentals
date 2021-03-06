Ext.define('MyApp.view.session.SessionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.session',

    requires: [
        'MyApp.view.session.SessionWindowForm'
    ],

    onSessionItemDblClick: function (gridPanel, record, item, index, e , eOpts) {
        var formWindow = Ext.create('MyApp.view.session.SessionWindowForm');

        formWindow.down('#sessionForm').loadRecord(record);
        formWindow.show();
    },
    onSessionItemSelect: function (rowModel , record , index , eOpts) {
        var sessionId = record.get('id'); //record.getData().id;
        Ext.suspendLayouts();

        // get presenter ids associated with this session
        var presenterIds = [];
        var sessionPresenterStore = Ext.getStore('sessionPresenter');
        var sessionPresenterRec = sessionPresenterStore.query('sessionId', sessionId);
        sessionPresenterRec.each(function (rec) {
            presenterIds.push(rec.get("presenterId"));
        })

        var sessionData = record.getData();
        sessionData.presenters = [];

        // filter presenterStore i.e. presenter grid with presenter IDs
        var presenterStore = Ext.getStore('presenter');
        presenterStore.clearFilter();
        presenterStore.filterBy(function (rec) {
            var contains = Ext.Array.contains(presenterIds, rec.get("id"));

            if (contains) {
                sessionData.presenters.push(rec.getData());
                return true;
            }
        });

        // Add details page
        var detailsView = this.getView().up('sessionlayout').down('sessiondetails');
        detailsView.update(sessionData);

        Ext.resumeLayouts();
    }
});
