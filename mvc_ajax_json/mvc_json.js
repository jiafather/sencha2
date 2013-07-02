Ext.application({
	model : ['Contact'],
	stores : ['Contacts'],
	views : ['MyList'],
	name : 'MyApp',
	launch : function(){
		Ext.create('MyApp.view.MyList',{
			fullscreen : true
		});
	}
});