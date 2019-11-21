var baseUser="http://localhost:8000/"
var user = {
    logout: function (callback) {
        $.post(
           baseUser+'admin/logout',
            function (res) { 
                callback(res)
            })
    },
    login: function (userName,passWord,callback) {
        $.post(
            baseUser+'admin/login',
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
            baseUser+"admin/getuser",
            function(res){
                callback(res)
            })
    },
}
