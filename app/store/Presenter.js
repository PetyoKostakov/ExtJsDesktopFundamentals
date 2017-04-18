Ext.define('MyApp.store.Presenter', {
    extend: 'Ext.data.Store',

    alias: 'store.presenter',
    storeId: 'presenter',

    fields:[ 'id', 'title', 'length', 'attend'],

    data: [
        { id: 1, name: 'Presentor Name 1' },
        { id: 2, name: 'Presentor Name 2' },
        { id: 3, name: 'Presentor Name 3' },
        { id: 4, name: 'Presentor Name 4' },
        { id: 5, name: 'Presentor Name 5' },
        { id: 6, name: 'Presentor Name 6' }
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: '/api/presentor/'
        }
    }
});
