Ext.define('MyApp.view.MyList',{
	extend:'Ext.dataview.List',
	config:{
		store:'contacts',
		itemTpl:[
		    '<div>{irum}님 주소: {juso}, 전화 : {junhwa}</div>'
		]
	}
});