Ext.define("MyApp.view.Account", {
	extend:'Ext.dataview.List',
	config:{
		id : "searchView",
		flex : 1,		
		store:'accounts',
		itemTpl:[
		    '<div>{irum}님 주소: {juso}, 전화 : {junhwa}</div>'
		],
		items : [ {
			xtype : "fieldset",
			title : "첫번째 페이지",
			items : [ {
				xtype : "button",
				text : "두번째 페이지 이동",
				id : "sBtn"
			} ]
		} ]
	}
});