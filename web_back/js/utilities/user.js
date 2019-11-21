var user = {
    logout: function (callback) {
        $.post(
            "http://localhost:8000/admin/logout",
            function (res) { 
                callback(res)
            })
    },
    login: function (userName,passWord,callback) {
        $.post(
            "http://localhost:8000/admin/login",
            {
                user_name: userName,
                password: passWord,
            },
            function (res) {
                callback(res)
            })
    }
}
