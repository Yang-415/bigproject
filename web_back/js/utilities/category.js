var baseurl = "http://localhost:8000/admin/"
var category = {
    show: function (callback) {
        $.get(baseurl + "category_search",
            function (res) {
                callback(res)
            })
    },
    dele: function (id, callback) {
        $.post(baseurl + "category_delete",
            { id: id },
            function (res) {
                callback(res)
            }
        )
    }

}