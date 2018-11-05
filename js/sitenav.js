$(function(){
    var mmbuy=new Mmbuy()
    mmbuy.querySitenav();
})
var Mmbuy=function(){

}
Mmbuy.prototype={
    //查询商城导航
    querySitenav:function(){
        $.ajax({
            url:"http://localhost:9090/api/getsitenav",
            success:function(data){
                // console.log(data);
                var html=template('SitenavTpl',data)
                // console.log(html);
                $('.content').html(html)
            }
        })
        $('.content').show(1500)
    }
}

mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});