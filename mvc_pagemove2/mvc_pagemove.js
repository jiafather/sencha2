Ext.application({
	name : 'MyApp',
	views : ['Main', 'Search','SearchList'],
	controllers : ['Control'],//자동으로 controller 폴더 안에 Control.js를 알아서 찾는다.
	launch : function(){
		Ext.Viewport.add({xclass:'MyApp.view.Main'});
		Ext.Viewport.add({xclass:'MyApp.view.Search'});
		Ext.Viewport.add({xclass:'MyApp.view.SearchList'});
	}
});