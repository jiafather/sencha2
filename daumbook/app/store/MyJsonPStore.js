/*
 * File: app/store/MyJsonPStore.js
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

Ext.define('MyApp.store.MyJsonPStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.daumModel'
    ],

    config: {
        model: 'MyApp.model.daumModel',
        pageSize: 20,
        storeId: 'daumStore',
        proxy: {
            type: 'jsonp',
            extraParams: {
                q: 'java',
                apikey: 'DAUM_SEARCH_DEMO_APIKEY',
                output: 'json',
                result: 20
            },
            pageParam: 'pageno',
            url: 'http://apis.daum.net/search/book',
            reader: {
                type: 'json',
                rootProperty: 'channel.item'
            }
        }
    }
});