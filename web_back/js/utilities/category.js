
var category = {
    // 类别显示功能
    show: function (callback) {
        $.get(
            APIURLS.cateShow,
            function (res) {
                callback(res)
            })
    },
    // 类别删除功能
    dele: function (id, callback) {
        $.post(APIURLS.cateDele,
            { id: id },
            function (res) {
                callback(res)
            }
        )
    },
    // 类别编辑功能
    edit: function ({id,name,slug}, callback) {
        $.post(APIURLS.cateEdit,
            {
                id: id,
                name: name,
                slug: slug
            },
            function(res){
                callback(res)
            }
        )
    },
    // 类别添加功能
   add:function({name,slug},callback){
     $.post(APIURLS.cateAdd,
        {
        name:name,
        slug:slug
        },
        function(res){
            callback(res)
        }
        )
   }

}