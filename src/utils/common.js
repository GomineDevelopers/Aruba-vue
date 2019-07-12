const commonTools = {}


commonTools.setCookie = function (name, value, myDay) {
    var oDate = new Date()
    oDate.setTime(oDate.getTime() + (myDay * 60 * 1000))// 单位是毫秒
    document.cookie = name + '=' + value + '; expires=' + oDate.toUTCString()
}

commonTools.getCookie = function (name) {
    // document.cookie获取当前网站的所有cookie
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split('=')
        if (arr1[0] === name) {
            return arr1[1]
        }
    }
    return '' //getCookie：如果没有当前name的cookie则返回''
}
commonTools.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = commonTools.getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}


export {
    commonTools
}
