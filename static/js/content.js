var arrImg2Change = [];
var oImgIndex = {};
var iPreviewIndex = 0;
$("img[data-src]").each(function(iIndex){
    var strDataSrc = $(this).attr("data-src");
    if(strDataSrc!=$(this).attr("src")){
        arrImg2Change.push(strDataSrc);
        oImgIndex[strDataSrc] = iIndex;
    }
    $(this).on("click",function(){
        iPreviewIndex = iIndex;
        var elPreview = $(".preview");
        var elImg = $(".preview_img");
        var iWidth = $(this).width();
        var iHeight = $(this).height();
        if(elPreview.is(":hidden")&&iHeight){
            elPreview.show();
            $(window).bind("scroll",null);
            elImg.attr("src",$(this).attr("src"));
            var iRate = $(window).width()*0.9/iWidth;
            elImg.css("margin-left",-$(window).width()*0.9/2+"px");
            elImg.css("margin-top",-iHeight*iRate/2+"px");
        }
    });
});

_PreLoadImg(arrImg2Change,function(){
    
},changeImgSrc);
function changeImgSrc(strSrc){
    var el = $("img[data-src]:eq("+[oImgIndex[strSrc]]+")");
    el.attr("src",el.attr("data-src"));
}
// 预览图片相关
var strRightSrc = "/static/img/right2x.png";
var strLeftSrc = "/static/img/left2x.png";
var strMidSrc = "/static/img/preview_icon.png";
$(".preview").on("click",function(){
    var strImgSrc = $(".preview_img").attr("src");
    var elIcon = $(".preview_icon");
    var strIconSrc = elIcon.attr("src");
    var elImgs = $("img[data-src]");
    switch(strIconSrc){
        case strRightSrc:
            var elImg = elImgs.eq(++iPreviewIndex%elImgs.length);
            $(".preview_img").attr("src",elImg.attr("src"));
            break;
        case strLeftSrc:
            var elImg = elImgs.eq(--iPreviewIndex%elImgs.length);
            $(".preview_img").attr("src",elImg.attr("src"));
            break;
        case strMidSrc:
            $(".preview").hide();
            break;
        default:
            $(this).hide();
            break;
    }
});
$(".preview_img").on("mouseenter",function(){
    var _$this = $(this);
    $(".preview").bind("mousemove",function(e){
        var iMouseOnImgX = e.clientX - _$this.offset().left;
        var iMouseOnImgY = e.clientY - _$this.offset().top;
        var iWidth = _$this.width();
        var strSrc = "";
        var elIcon = $(".preview_icon");
        elIcon.css("transform","rotate(0deg)");
        if(iMouseOnImgX > iWidth*0.8){
            strSrc = strRightSrc;
        }else if(iMouseOnImgX < iWidth*0.2){
            strSrc = strLeftSrc;
        }else{
            strSrc = strMidSrc;
            elIcon.css("transform","rotate(45deg)");
        }
        elIcon.attr("src",strSrc);
        elIcon.css("left" , (e.clientX+25) + "px");
        elIcon.css("top" , (e.clientY+25) + "px");
        elIcon.show();
    });
    
});
$(".preview_img").on("mouseleave",function(e){
    console.log("mouseleave");
    $(".preview").unbind("mousemove");
    var elIcon = $(".preview_icon");
    elIcon.hide();
    elIcon.attr("src","");
});

function page(iDir){
    window.location.href.replace(/(.*\/content)(\d)(\.html.*)/,function(){
        var iCountNow = parseInt(arguments[2]);
        var iCountTarget = (iCountNow - 1 + iDir + 7)%7 + 1;
        if(iCountTarget!=iCountNow){
            window.location.href = arguments[1] + iCountTarget + arguments[3];
        }
    })
}