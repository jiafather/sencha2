Ext.define('MyApp.view.Search',{
	extend : 'Ext.anel',
	config : {
		id : 'searchView',
		flex : 1,
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		title : [{
			xtype : 'fieldset',
			title : 'ù��° ������',
			items : [{
				xtype : 'button', text : '�ι�° ������ȣ��', id : 'sButton'
			}]
		}]
	}
});