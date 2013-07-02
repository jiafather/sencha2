Ext.define('MyApp.view.AccountView',{
	extend:'Ext.dataview.List',
	//xtype:'accountview',
	config:{
		id : 'accountview',
		store:'account',
		itemTpl:[
		         '<div>{irum} 의 주소: {juso} 전화 : {junhwa}</div>'
		]
	}
});