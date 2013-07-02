Ext.define('MyApp.controller.Control',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			mainView:'#mainview',
			accountView:'#accountview',
			productView:'#productview',
			
			firstButton:'#firstButton',
			secondButton:'#secondButton',
			fButton:'#fButton',
			sButton:'#sButton',
		},
		control:{
			firstButton:{tap: 'aaa'},
			secondButton:{tap: 'bbb'},
			fButton:{tap: 'aaa'},
			sButton:{tap: 'bbb'},
		}
	},
	
	aaa:function(){
		var mainView = this.getMainView();
		var accountView = this.getAccountView();
		mainView.setActiveItem(accountView);
	},
	bbb:function(){
		var mainView = this.getMainView();
		var productView = this.getProductView();
		mainView.setActiveItem(productView);
	}
});








