// 把当前URL的search处理成{{key:value}}的形式
export function getQueryStringArgs(){
    let qs = (location.search.length>0?location.search.substring(1):""), // 删除开头的问号
        args = {};
    
    for(let item of qs.split("&").map(kv=>kv.split("="))){
        let name = decodeURIComponent(item[0]),
            value = decodeURIComponent(item[1]);
        if(name.length){
            args[name] = value
        }
    }
    return args;
}

/**
 * 检测浏览器中是否含有参数插件，适用于IE以外浏览器及IE10以上浏览器
 * @param {String} name 插件名字
 * @return {Boolean} 浏览器是否安装参数插件
 */
export function hasPlugin(name){
    name = name.toLowerCase()
    for(let plugin of navigator.plugins){
        if(plugin.name.toLowerCase().indexOf(name)>-1){
            return true
        }
    }
    return false
}

// 判断浏览器型号的类
export class BrowserDetector {
    constructor() {
        // 测试条件编译
        // IE6~10支持
        this.isIE_Gte6Lte10 = /*@cc_on!@*/false;

        // 测试documentMode
        // IE7~11支持
        this.isIE_Gte7Lte11 = !!document.documentMode;

        // 测试StyleMedia构造函数
        // Edge 20及以上版本支持
        this.isEdge_Gte20 = !!window.styleMedia;

        // 测试Firefox专有扩展安装API
        // 所有版本的Firefox都支持
        this.isFirefox_Gte1 = typeof InstallTrigger !== 'undefined';

        // 测试chrome对象及其webstore属性
        // Opera的某些版本有window.chrome，但没有window.chrome.webstore
        // 所有版本的Chrome都支持(80以上不支持了)
        this.isChrome_Gte1 = !!window.chrome && !!window.chrome.webstore;

        // Safari早期版本会给构造函数的标签符追加"Constructor"字样，如：
        // window.Element.toString(); // [object ElementConstructor]
        // Safari 3~9.1支持
        this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);

        // 推送通知API暴露在window对象上
        // 使用默认参数值以避免对undefined调用toString()
        // Safari 7.1及以上版本支持
        this.isSafari_Gte7_1 =
            (({pushNotification = {}} = {}) =>
             pushNotification.toString() == '[object SafariRemoteNotification]'
            )(window.safari);

        // 测试addons属性
        // Opera 20及以上版本支持
        this.isOpera_Gte20 = !!window.opr && !!window.opr.addons;
    }

    isIE() { return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11; }
    isEdge() { return this.isEdge_Gte20 && !this.isIE(); }
    isFirefox() { return this.isFirefox_Gte1; }
    isChrome() { return this.isChrome_Gte1; }
    isSafari() { return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1; }
    isOpera() { return this.isOpera_Gte20; }
}