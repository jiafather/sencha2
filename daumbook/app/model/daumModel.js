/*
 * File: app/model/daumModel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.daumModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                convert: function(v, rec) {
                    var before = v;
                    var url = null;

                    if(!before){

                        url = 'resource/images/no_book.jpg';

                    }else{

                        url = before;

                    }
                    return url;
                },
                name: 'cover_l_url'
            },
            {
                convert: function(v, rec) {
                    var before = v;
                    var title = before.replace(/(&lt;)/g, '<').replace(/(&gt;)/g,'>');
                    return title;
                },
                name: 'title'
            },
            {
                convert: function(v, rec) {
                    var before = v;
                    var title = before.replace(/(&lt;)/g, '<').replace(/(&gt;)/g,'>');
                    return title;
                },
                name: 'description'
            },
            {
                convert: function(v, rec) {
                    var before = v;
                    var url = null;

                    if(!before){

                        url = 'resource/images/no_book.jpg';

                    }else{

                        url = before;

                    }
                    return url;
                },
                name: 'cover_s_url'
            }
        ]
    }
});