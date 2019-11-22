
var user = {
    logout: function (callback) {
        $.post(
            APIURLS.userLogout,
            function (res) { 
                callback(res)
            })
    },
    login: function (userName,passWord,callback) {
        $.post(
            APIURLS.userLogin,
            {
                user_name: userName,
                password: passWord,
            },
            function (res) {
                callback(res)
            })
    },
    getinfo:function(callback){
        $.get(
            APIURLS.userGetsur,
            function(res){
                callback(res)
            })
    }
    
}
