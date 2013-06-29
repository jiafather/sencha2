Ext.application({
	requires:['Ext.Toolbar', 'Ext.Ajax'],	
	launch : function(){
		var eventHandler = function(button, event){
			Ext.Ajax.request({
				url : 'ajax_xml.xml',
				success : function(response, opts){
					var resArr = response.responseXML;
					display(resArr);
				},
				failure : function(response, error){
					Ext.Msg.alert('Title', '에러발생');
				}
			});
		}
		
		function display(resArr){
			
			listPanel.removeAll(true);
			
			var query = Ext.create('Ext.dom.Query');
			var jikwonArray = query.select('jikwon', resArr);
			
			for(var i=0; i < jikwonArray.length; i++){
				var jikwon = jikwonArray[i];
				var jno = jikwon.getAttribute('jno');
				var jname = query.selectNode('jname', jikwon).childNodes[0].nodeValue;
				var jimage = query.selectNode('jimage', jikwon).childNodes[0].nodeValue;
				
				var item = {
						xtype : 'panel',
						html : ['<table><tr><td>'+jno+'</td></tr>'+
								'<tr><td>'+jname+'</td></tr>'+
								'<tr><td><img src='+jimage+' /></td></tr></table>'].join('')
				}
				listPanel.add(item);
			}
			
		}
		
		var listPanel = Ext.create('Ext.Panel');
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked : 'top',
			items : {
				xtype : 'button',
				text : 'XML자료 가져오기',
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