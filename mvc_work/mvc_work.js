Ext.application({
	models:['Contact1', 'Contact2'],
	stores:['Account', 'Product'],
	views:['Main', 'AccountView', 'ProductView'],
	controllers:['Control'],
	name:'MyApp',
	
	launch:function(){
		Ext.Viewport.add({
			xclass:'MyApp.view.Main'
		});
		Ext.Viewport.add({
			xclass:'MyApp.view.AccountView'
		});
		Ext.Viewport.add({
			xclass:'MyApp.view.ProductView'
		});
	}
});