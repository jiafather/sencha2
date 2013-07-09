Ext.define('MyApp.store.Accounts',{
	extend : 'Ext.data.Store',
	requires : ['MyApp.model.Account'],
	config : {
		autoLoad : true,
		model : 'MyApp.model.Account',
		storeId : 'accounts',
		proxy : {
			type : 'ajax',
			url : 'account.json',
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