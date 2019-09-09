
$(document).ready(function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        //new WOW().init();
        homeItemAlts = {
            meet: "/static/img/meet-alt.png",
            uniroom: "/static/img/uniroom-alt.png",
            hubot: "/static/img/hubot-alt.png",
            cuttobliss: "/static/img/cut-to-bliss-alt.png",
            pacha: "/static/img/pacha-alt.png",
            ran: "/static/img/ran-alt.png",
            unicef: "/static/img/unicef-alt.png",
            wechat: "/static/img/unicef-alt.png",
        };
    
        var homeTag = document.getElementById("homeTag");
        //绑定鼠标移动事件
        document.onmousemove = function (event) {
            //解决兼容问题
            event = event || window.event;
    
            //获取滚动条滚动的距离
            /*
             * chrome认为浏览器的滚动条是body的，可以通过body.scrollTop来获取
             * 火狐等浏览器认为浏览器的滚动条是html的，
             */
            var st = document.body.scrollTop || document.documentElement.scrollTop;
            var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
            //var st = document.documentElement.scrollTop;
    
    
            //获取到鼠标的坐标
            /*
             * clientX和clientY
             *  用于获取鼠标在当前的可见窗口的坐标
             * div的偏移量，是相对于整个页面的
             * 
             * pageX和pageY可以获取鼠标相对于当前页面的坐标
             *  但是这个两个属性在IE8中不支持，所以如果需要兼容IE8，则不要使用
             */
            var left = event.clientX;
            var top = event.clientY;
    
            //设置div的偏移量
            
            homeTag.style.left = 16 + left + sl + "px";
            homeTag.style.top = 16 + top + st + "px";
    
        };
    
        $('.homeItem').on('mouseenter', function (event) {//绑定鼠标进入事件
            var strAttr = $(this).attr("name");
            $('#homeTag').attr("src",homeItemAlts[strAttr]);
            $("#homeTag").show();
        });
        $('.homeItem').on('mouseleave', function () {//绑定鼠标划出事件
            $("#homeTag").hide();
        });
    
    };
});