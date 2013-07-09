Ext.define("MyApp.view.Product", {
	extend : "Ext.Panel",
	config : {
		id : "searchListView",
		flex : 1,
		layout : {
			type : "vbox",
			pack : "center"
		},
		items : [ {
			xtype : "fieldset",
			title : "두번째 페이지",
			items : [ {
				xtype : "button",
				text : "첫번째 페이지 이동",
				id : "fBtn"
			} ]
		} ]
	}
})