Ext.define('MyApp.store.Contacts',{
	extend : 'Ext.data.Store',
	requires : ['MyApp.model.Contact'],
	config : {
		autoLoad : true,
		model : 'MyApp.model.Contact',
		storeId : 'contacts',
		proxy : {
			type : 'ajax',
			url : 'contacts.json',
			reader : {
				type : 'json',
				rootProperty : 'datas'
			}
		},
		sorters : {
			property : 'irum'
		}
	}
});