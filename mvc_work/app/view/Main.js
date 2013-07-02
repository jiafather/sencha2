Ext.define('MyApp.view.Main',{
	extend:'Ext.Panel',
	fullscreen:true,
	//xtype:'mainview',
	config:{
		id : 'mainview',
		layout:{type:'card', animation:'slide'},
		items:[
		   {
			   docked:'top',
			   xtype:'toolbar',
			   items:[
		          {xtype:'button', id:'firstButton', text:'첫번째'},
		          {xtype:'button', id:'secondButton', text:'두번째'},
			   ]
		   }      
		       
		]
	}
});