/*var reg=/^.+\.(zip|rar)$/;*/

/*function box(sum,num) {
return sum(num);
}
function sum(num){
	return num+10;
}
var str=box(sum,10);
document.write(str);*/

/*function box(num){

if(num<=1){

	return 1;
}else{
	return num*arguments. callee(num-1);
}
}
document.write(box(10));*/


/*window.color="蓝色的";
document.write(this.color);
var box={
 color:"红色的",
 show:function(){
 	document.write(this);
 }
}*/

/*function getmax(){
 var max=this[0];
 for (var i =0; i<this.length; i++) {
   if (max<this[i]) {
   	max=this[i];
   }
 }
return max;
}

Array.prototype.getmax=getmax;
var arr=[1,2,3,4,5,6,7,8,9];
document.write(arr.getmax());
var arr1=[8,6,9,47,5];
document.write(arr1.getmax())
*/

/*function box(sum,num){
	return sum+num;
}
function show(sum,num){
	return box.call(this,sum,num)
}
document.write(show(10,20));*/
/*
window.color="蓝色的";
var box={
	color:"红色的"
};

function sayColor(){

document.write(this.color+"<br/>");

}
sayColor.apply(this);
sayColor.apply(box);
var arr=[52,6,87,5,97,3];
document.write(Math.min.apply(this,arr))*/

/*var obj =new Object();

obj.name="小狗";

document.write(obj.name);
obj.name=null;*/

/*
var num=10000;

num.name="小狗";

document.write(num.name);*/

/*var obj=new Object();

obj.name ="小狗";

var obj1=obj;

obj1.name="大黄";

document.write("obj="+obj.name+"obj1="+obj1.name)*/
//ECMAScript 中所有的函数的参数都是按值传递（主要不要把传递引用地址，当做接引用传递
/*function box(obj){

  obj=new Object();
  ojb.name="大黄";
  document.write();

}
var obj=new Object();

obj.name="小狗";

box(obj);

document.write(obj);*/


/*var box ="Mr.Lee";
var box1=new String("Mr.Lee");

document.write(box1);*/

/*var num=1000000000;

document.write(num.toExponential(3));*/

/*var num=10.00000000;

document.write(num.toPrecision(3))*/

 

// var str ="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789";

//      var res = "";
//      for(var i = 0; i <4 ; i ++) {
//          var  index= Math.floor(Math.random()*str.length);
//          res +=str.charAt(index);
//      }
// document.write(res);
// 
// 
