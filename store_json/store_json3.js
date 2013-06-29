Ext.application({
	launch : function(){
		Ext.define('MyApp.model', {
			extend : 'Ext.data.Model',
			config : {
				fields : ['no','name','age','tel']
			},
			proxy : {
				type : 'ajax',
				url : 'store_json.jsp',
				reader : {
					type : 'json',
					rootProperty : 'data'//json 데이타 생긴거 따라 다르겠징? 그럼..그럼..ex)daum openapi=> channel.item
				}
			}			
		});
//		var ajaxProxy = Ext.create('Ext.data.proxy.Ajax', {
//			url : 'store_json.jsp',
//			reader : {
//				type : 'json',
//				rootProperty : 'data'//json 데이타 생긴거 따라 다르겠징? 그럼..그럼..ex)daum openapi=> channel.item
//			}
//		});
		var userStore = Ext.create('Ext.data.Store', {
			//autoLoad : true,
			model : 'MyApp.model',
			//proxy : ajaxProxy
//			proxy : {
//				type : 'ajax',
//				url : 'store_json.jsp',
//				reader : {
//					type : 'json',
//					rootProperty : 'data'//json 데이타 생긴거 따라 다르겠징? 그럼..그럼..ex)daum openapi=> channel.item
//				}
//			}
		});
		var dataList = Ext.create('Ext.dataview.List', {
			flex : 1,
			store : userStore,
			itemTpl : '<div>{no} {name} {age} {tel}</div>'
		});
		var toolBar = Ext.create('Ext.TitleBar',{
			docked : 'top',
			title : '직원정보목록(무두)',
			items : [{
				xtype : 'button',
				text : '전체보기',
				align : 'right',
				handler : function(){
					userStore.load();
					//console.log("ASDFASDFASDFASDFASDFASDFASDF");
				}
			}]
		});		
		var rootPanel = Ext.create('Ext.Panel', {
			fullscreen : true,
			layout : {
				type : 'vbox'
			},
			items : [toolBar, dataList]
		});
		Ext.Viewport.add(rootPanel);
		
		
	}
});