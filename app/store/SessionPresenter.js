Ext.define('MyApp.store.SessionPresenter', {
    extend: 'Ext.data.Store',

    alias: 'store.sessionpresenter',
    storeId: 'sessionPresenter',

    fields:[ 'id', 'sessionId', 'presenterId'],

    data: [
        { id: 1, sessionId: 5, presenterId: 3 },
        { id: 2, sessionId: 2, presenterId: 4 },
        { id: 3, sessionId: 1, presenterId: 1 },
        { id: 4, sessionId: 6, presenterId: 2 },
        { id: 5, sessionId: 4, presenterId: 5 },
        { id: 6, sessionId: 3, presenterId: 6 }
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: '/api/sessionPresenter/'
        }
    }
});
