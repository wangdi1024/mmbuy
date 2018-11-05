$(function(){
    var mmbuy=new Mmbuy()
    mmbuy.querybrand();
    mmbuy.querybrandbrandtitle()
})
var Mmbuy=function(){

}
Mmbuy.prototype={
    //查询品牌页面
    querybrand:function(){
        $.ajax({
            url:"http://localhost:9090/api/getbrandtitle",
            success:function(data){
                console.log(data);
                var html=template('querybrandTpl',data)
                $('.content-list').html(html)
            }
        })
    },
    //品牌标题对应的十大品牌
    querybrandbrandtitle:function(){
        $('.content-list').on('tap','.brandTitle',function(){
            
           var id= $(this).data('brandtitleid')
           $.ajax({
               url:'http://localhost:9090/api/getbrand',
               data:{
                brandtitleid:id
               },
               success:function(data){
                   console.log(data);
                   var html=template('brandTitleTpl',data)
                   $('.mui-collapse-content').html('');
                   $('.mui-collapse-content').html(html)
               }
           })
        })
    }
}
//初始化区域滚动
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});