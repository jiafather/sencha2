Ext.application({
	requires:['Ext.Toolbar', 'Ext.Ajax'],	
	launch : function(){
		var eventHandler = function(button, event){
			Ext.Ajax.request({
				url : 'ajax_json.json',
				success : function(response, opts){
					var resArr = JSON.parse(response.responseText);
					display(resArr);
				},
				failure : function(response, error){
					Ext.Msg.alert('Title', '에러발생');
				}
			});
		}
		
		function display(resArr){
			for(var i in resArr){
				var jno = resArr[i].jno;
				var jname = resArr[i].jname;
				var jimage = resArr[i].jimage;
				var item = {
						xtype : 'panel',
						html : '<table><tr><td>'+jno+'</td></tr>'+
						'<tr><td>'+jname+'</td></tr>'+
						'<tr><td><img src='+jimage+' /></td></tr></table>'
				}
				listPanel.add(item);
			}
		}
		
		var listPanel = Ext.create('Ext.Panel');
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked : 'top',
			items : {
				xtype : 'button',
				text : 'JSON자료 가져오기',
				ui : 'confirm',
				handler : eventHandler
			}
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [toolbar, listPanel],
			scrollable : true
		});

		Ext.Viewport.add(rootPanel);
	}
});