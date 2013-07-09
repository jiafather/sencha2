Ext.define("MyApp.view.Main", {
	extend : "Ext.Panel",
	config : {
		id : "mainView",
		layout : {
			type : "card", // 페이지이동은 layout : card
			animation : "slide"
		},
		items : [ {
			xtype : "toolbar",
			docked : "top",
			items : [ {
				xtype : "button",
				text : "첫번째",
				id : "firstBtn"
			}, {
				xtype : "button",
				text : "두번째",
				id : "secondBtn"
			} ]
		} ]
	}
});