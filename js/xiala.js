function fun(a,b){
    var myli = document.getElementById(a);
    var myul = document.getElementById(b);
    myli .onmouseover = function(){
        myul.style.display = 'block';
    }
    myli .onmouseout = function(){
        myul.style.display='none';
    }
}
fun('li1','ul1');
fun('li2','ul2');
fun('li3','ul3');
fun('li4','ul4');
fun('li5','ul5');

