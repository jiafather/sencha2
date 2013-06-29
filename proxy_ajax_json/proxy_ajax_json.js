Ext.application({
	launch : function(){
		var ajaxProxy = Ext.create('Ext.data.proxy.Ajax',{
			url : 'proxy_ajax_json.jsp',
			reader : {
				type : 'json',
				rootProperty : 'datas'
			}
		});
		
		Ext.define('MyApp.model',{
			extend : 'Ext.data.Model',
			config : {
				fields : ['jno', 'jname'],
				proxy : ajaxProxy
			}
		});
		
		 
		var template = Ext.create('Ext.XTemplate',
				'<div>번호 : {jno} 이름 :  {jname}</div>');
		var panel = Ext.create('Ext.Panel',{
			tpl : template
		});
		var btn1 = Ext.create('Ext.Button',{
			text : '첫번째 레코드 읽기',
			handler : function(button, event){
				readData('j1');
			}
		});
		var btn2 = Ext.create('Ext.Button',{
			text : '두번째 레코드 읽기',
			handler : function(button, event){
				readData('j2');
				
			}			
		});
		
		function readData(jno){
			//model 안에 proxy가 있어서 load 함수 사용이 가능하다.
			MyApp.model.load(null,{
				params : {"jno":jno},
				success : function(response){
					panel.setData(response.data);
				}
			});
		}
		
		var toolbar = new Ext.create('Ext.Toolbar',{
			docked : 'top',
			items : [btn1, btn2]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [toolbar, panel]
		});
		Ext.Viewport.add(rootPanel);
	}
});