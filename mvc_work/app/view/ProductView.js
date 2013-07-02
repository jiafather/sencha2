Ext.define('MyApp.view.ProductView',{
	extend:'Ext.dataview.List',
	//xtype:'productview',
	config:{
		id : 'productview',
		store:'product',
		itemTpl:[
		         '<div>품명:{sang}, 수량:{su}, 단가:{dan}</div>'
		]
	}
});