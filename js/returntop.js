

window.onload= function () {
    //确定哪个版块经过窗口上方时显示返回上部按钮 然后获取这个版块页面离窗口的高度
    var main = document.getElementById('lunbo')
    var clientHeight = (main).getBoundingClientRect().top;
    var obtn = document.getElementById('btn');
    //注意！！！通过getElementsByClassName()获取到的元素是一个元素的集合，通过getElementById()获取到的元素就是一个元素
    var timer = null;
    var isTop = true;
   


    //滚动条滚动时触发
    window.onscroll = function(){
        //获取滚动条位置 浏览器不同 所以认可的获取滚动条的方法也不同 但是当其中一个可以获取的时候 另一个就为零 所以这里用了逻辑与来适应不同浏览器
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(osTop >= clientHeight){
            obtn.style.display="block";//显示返回顶部版块
            document.getElementById("xiugai").className = "suoding";//更改搜索框classname 使搜索框锁定在顶部

        }else{
            obtn.style.display="none";//不显示返回顶部模块版块
            document.getElementById("xiugai").className = "container";

        }
        if(!isTop){
            clearInterval(timer)
        }
        isTop = false;

    }
    obtn.onclick = function(){
        //设置定时器
        timer = setInterval(function() {
			// 获取滚动条，距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var iSpeed = Math.floor(-osTop / 6); // 返回一个小于或者等于指定数字的的最大整数
			isTop = true;
			document.documentElement.scrollTop = document.body.scrollTop = (osTop + iSpeed);
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 10);
    }
    
};




    











