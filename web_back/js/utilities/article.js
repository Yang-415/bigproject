var article={
    show:function(callback){
        $.get(
            APIURLS.articleShow,
        //    {
        //     type:type,
        //     state:state,
        //     page:page,
        //     perpage:perpage,
        //   },
            function(res){
                callback(res)
            }
        )
    }
}