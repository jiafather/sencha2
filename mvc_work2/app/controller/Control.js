Ext.define("MyApp.controller.Control", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainView : "#mainView",
			searchView : "#searchView",
			searchListView : "#searchListView",

			firstBtn : "#firstBtn",
			secondBtn : "#secondBtn",

			fBtn : "#fBtn",
			sBtn : "#sBtn"
		},
		control : {
			firstBtn : {
				tap : "moveFirst"
			}, // firstBtn�� tap�̺�Ʈ �߻��� moveFirst �Լ�ȣ��
			fBtn : {
				tap : "moveFirst"
			},
			secondBtn : {
				tap : "moveSecond"
			},
			sBtn : {
				tap : "moveSecond"
			}
		}
	},
	moveFirst : function() {
		var mainView = this.getMainView();
		var searchView = this.getSearchView();

		mainView.setActiveItem(searchView);
	},

	moveSecond : function() {
		var mainView = this.getMainView();
		var searchListView = this.getSearchListView();

		mainView.setActiveItem(searchListView);

	}
});