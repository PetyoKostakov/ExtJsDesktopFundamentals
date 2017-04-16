Ext.define('MyApp.view.session.SessionWindowForm', {
    extend: 'Ext.window.Window',

    requires: [
        'Ext.form.Panel'
    ],

    title: 'Edit session',

    items: [{
        xtype: 'form',
        itemId: 'sessionForm',
        defaults: {
            margin: 15
        },
        items: [{
            xtype: 'textfield',
            reference: 'sessionForm',
            fieldLabel: 'Session Length',
            name: 'length',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Session name',
            name: 'title',
            allowBlank: false
        }, {
            xtype: 'checkboxfield',
            fieldLabel: 'Attend',
            name: 'attend'
        }],

        buttons: [{
            text: 'Save',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: function() {
                this.up('form').updateRecord();

                this.up('window').close();
            }
        }, {
            text: 'Cancel',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});