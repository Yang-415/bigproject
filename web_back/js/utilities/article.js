var article={
    show:function(obj,callback){
        $.get(
            APIURLS.articleShow,
           {
            type:obj.type,
            state:obj.states,
            page:obj.curpage,
        //     perpage:perpage,
          },
            function(res){
                callback(res)
            }
        )
    },
    dele:function(obj,callback){
        $.get(APIURLS.articleDele,
            {id:obj.id},
            function(res){
            callback(res)}
            )},
    publish:function(callback){
        $.post(APIURLS)

    }
}