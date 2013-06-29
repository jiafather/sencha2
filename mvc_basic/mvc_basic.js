Ext.application({
	name : 'MyApp',
	views : ['MyApp.view.Welcome'],
	appFolder : 'app',//<== 안써도됨! 기본이 app임
	launch : function(){
		Ext.create('MyApp.view.Welcome',{fullscreen : true});
	}
});