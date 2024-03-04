$(function(){
    /*슬라이더*/
$('.flexslider').flexslider({
    animation: "slide"
    });

/*스타벅스*/
$(window).scroll(function(){
    var sct = $ (window).scrollTop();
    if(sct>1700){
        $(".adBox").addClass("on");
    }else{
        $(".adBox").removeClass("on");
    }
});
})