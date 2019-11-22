var baseurl = "http://localhost:8000/admin/"
var category = {
    show: function (callback) {
        $.get(
            APIURLS.cateShow,
            function (res) {
                callback(res)
            })
    },
    dele: function (id, callback) {
        $.post(APIURLS.cateDele,
            { id: id },
            function (res) {
                callback(res)
            }
        )
    }

}