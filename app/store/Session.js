Ext.define('MyApp.store.Session', {
    extend: 'Ext.data.Store',

    alias: 'store.session',

    fields:[ 'id', 'title', 'length', 'attend'],

    data: [
        { id: 1, title: 'Session title 1', length: '1 h', attend: true },
        { id: 2, title: 'Session title 2', length: '45 min', attend: false },
        { id: 3, title: 'Session title 3', length: '40 min', attend: true },
        { id: 4, title: 'Session title 4', length: '2 h', attend: true },
        { id: 5, title: 'Session title 5', length: '30 min', attend: true },
        { id: 6, title: 'Session title 6', length: '30 min', attend: false },
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: '/api/session/'
        }
    }
});
