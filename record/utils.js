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
 * 检测浏览器中是否含有参数插件，适用于IE以外浏览器即IE10以上浏览器
 * @param {String} name 插件名字
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

