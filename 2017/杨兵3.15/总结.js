1.面对对象  java  javascript c++;
2.面向过程 C语言；
3.面向对象编程；


//通过new 关键字创建一个对象
var box =new Object()
   box.name= "xiaohei";
   box.age=18;
   box.run=function(){
  document.write("名字"+this.name+"年龄"+this.age);
   }
   box.run();


//工厂模式创建对象
优点  把重复声明解决了
function creatOject(name,age,sex){ 
var obj =new Object();
  obj.name =name;
  obj.age=age;
  obj.sex=sex;
  obj.run=function(){
  	alert(this.name)
  };
  return obj;
}


  //构造函数
function User(name,age,sex){
   this.name=name;
   this.age=age;
   this.sex=sex;

}
function Goods(price,age,sex){
   this.price=price;
   this.age=age;
   this.sex=sex;

}
var xioahei =new User("小黑",18,"女");
var apple =new Goods("苹果",18,"女");


document.write(User instanceof Goods);


数组对象
1.Array类型：数组每一个元素

var arr=new Array(5);
//再用new Array()创建数组构造里只有一个参数的时候，代表声明它的长度
//length属性获取长度，不止可读，还能设置值
arr length=100;
document.write(arr.length);

var arr2=[1,2,3,4,5,];
//在IE9浏览器会把逗号识别为一个元素
document.write(arr2.length);

 var arr=new Array(5);
 var arr2=[5];
 document.write(arr.length);
 //代表一个长度为5
 document.write(arr2.length);
 //代表一个值*/
 
 var arr =[1,"sds",true,new Object(),10];
//数组没有类型限制，同一个数组可以放任意类型
//我们自己使用通常会分类
//数组会自动扩容
document.write(arr.length);

//数组取最小的值
var arr =[4,3,6,3,2];
var mix=arr [0];
for (var i = 1; i < arr.length; i++) {
 if (mix>arr[i]) {
 	mix=arr[i];
 }
}
document.write("最大值"+mix);

冒泡排序 从小到大
//最大值
//最小值
var arr =[4,3,6,5,2];
for (var i = 1; i < arr.length; i++) {
 for (var j = 0; j<arr.length-i; j++) {
 if (arr[j]>arr[j+1]) {
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;

     }
   }
 }
document.write(arr)
var max=arr[0];
for (var i = 0; i < arr.length; i++) {
     if (max<arr[i]) {
      max=arr[i];
     }
}
document.write(max);
var mix=arr[0];
for (var i = 0; i < arr.length; i++) {
     if (mix>arr[i]) {
      mix=arr[i];
     }
}
document.write(mix);

join()函数  不会对原数组修改的
var  box =[1,8,5,4,7,1,5,8];
document.write(box.join('**'));


栈方法
让数组行为类似于其他数据结构 的方法，
最新添加 元素最早移出
*push()
      向原数组末尾添加任意个数元素
      返回值为添加之后的数组长度 
var  box =[1,8,5,4,7,1,5,8];//Array 数组
var len= box.push(1,2,3);//修改后lengt长度
document.write(box);
*pop()
  移除末尾最后的一个元素，并修改length长度
   返回被移除的元素值
var box =Array(1,5,6,9,2,7);
var val =box.pop()//移除末尾元素
document.write("移除的是"+val+"此时的数组"+box)
列队方法
* shift()
       移除数组开头元素
         并返回移除的元素  
 * unshift()
         向原数组前端添加多个元素
          返回添加元素后,数组的长度
 * reverse() 
          将数组元素反序(逆序)
           返回修改后的,数组形式的字符串
 * sort() 
         没参数时按照 ASCII 字符顺序进行升序排列
        参数为一个函数(具体细节参考手册)
          返回修改后的,数组形式的字符串


操作方法
   *concat() 
             //将一个或多个数组合并
              并且返回合并后的新数组,不改变原数组。

 * slice  
         //一个参数时,从当前下标开始截取直到末尾.返回截取的一段
        //两个参数时,从当前下标开始截取到第二个参数为止
         (不包括第二个参数的元素)前包后不包

 * splice //1.删除功能
          //两个参数 第一个是删除的位置,第二个是删除的数量
          //返回被删除的元素。
          //2.插入功能 
          //第一个参数控制插入的位置,
          //第二个参数必须设置为零(保证不移出元素)
          //之后可由一个或多个参数组成的插入项目
          //3.替换功能
          //第一个参数控制替换的位置
          //第二个参数控制替换的个数
          //之和的替换的参数个数与第二个参数的值保持一致
    
   * Math.floor()向下取整
   * Math.random()产生0 - 1之间的随机数
   

function test(arr,str){
document.write("返回值"+arr+"<br/>当前数组"+str );
}

function dome(a,b){
   if(a<b){
    return -1;
   }else if(a==b){
    return 0;
   }else{
    return 1;
   }

}
var box =new Array(8,9,54,89,41,3);
var str =box.sort(dome);

test(box,str);



function test(arr,str){
document.write("返回值"+arr+"<br/>当前数组"+str );
}

function dome(a,b){
  return b-a;
}
var box =new Array(8,9,54,89,41,3);
var str =box.sort(dome);

test(box,str)

function test(arr,str){
document.write("返回值"+str+"<br/>当前数组"+arr );
}
var box =new Array(8,9,54,89,41,3,9);
  var str =box.splice(2,0,18,19);//*插入的位置第二个必须为零*/
  //之后可由一个或多个参数组成的插入
  test(box,str);