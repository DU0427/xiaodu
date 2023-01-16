window.addEventListener('load', function() {
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var banner = document.querySelector('.banner');
    var ul = document.querySelector('#unit');
    var ol = document.querySelector('ol');
    var bannerwidth = banner.offsetWidth;
    var num = 0;
    var ck = 0;
    // 1.鼠标经过轮播图模块,左右按钮显示,离开隐藏左右按钮
    banner.addEventListener('mouseenter', function() {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    banner.addEventListener('mouseleave', function() {
            left.style.display = 'none';
            right.style.display = 'none';
            timer = setInterval(function() {
                //手动调用
                right.click();
            }, 2000)
        })
        //动态生成小圆点
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //记录当前小圆圈的索引号  通过自定义属性
        li.setAttribute('index', i);
 
        ol.appendChild(li);
        // 点击小圆圈变换颜色  排他思想
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 4.点击小圆圈,可以播放相应图片 移动的是ul
            //ul的移动的距离算法  小圆圈的索引号乘以图片的宽度
            var index = this.getAttribute('index');
            num = index;
            ck = index;
            console.log(bannerwidth);
            animate(ul, (-index * bannerwidth));
        })
    }
    //克隆第一张图片
    var clone = ul.children[0].cloneNode(true);
    ul.appendChild(clone);
    ol.children[0].className = 'current';
    // 2.点击右侧按钮一次,图片往左播放一张.左侧按钮同理
    //flag 节流阀
    var flag = true;
 
    right.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            //如果走到了最后与一张图片  快速复原  left=0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * bannerwidth, function() {
                flag = true; //打开节流阀
            });
            // 3.图片播放时,下面小圆圈模块跟随一起变化
            ck++;
            if (ck == ol.children.length) {
                ck = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
 
            }
            ol.children[ck].className = 'current';
        }
    })
    left.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (num == 0) {
                    num = ul.children.length - 1;
                    ul.style.left = -num * bannerwidth + 'px';
 
                }
                num--;
                animate(ul, -num * bannerwidth, function() {
                    flag = true;
                });
                ck--;
                if (ck < 0) {
                    ck = ol.children.length - 1;
                }
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
 
                }
                ol.children[ck].className = 'current';
            }
 
        })
        // 5.鼠标不经过轮播图,轮播图也会自动播放图片
        // 6.鼠标经过,轮播图模块自动停止播放
    var timer = this.setInterval(function() {
        //手动调用
        right.click();
    }, 2000)
})