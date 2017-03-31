prototype //它指向原形，本身上一个对象
           //第一个属性constructor 指向原形函数
          //第二个属性proto 原形链上链接的原形
in //运算符 检查当前对象有木有某属性
obj.hasOwnProperty(attr)//判断当前对象有木有这个属性 
object.getOwnPropertyDescriptor(Object,"prototype")
//获取对象指定属性的标签对象
//
configurable fase   // 是否可操作
enumerable false     //是否枚举
valve:object     //属性值
writable false    
function foo(){

}
foo.prototype.z=1;//foo.prototype 指向原形

var obj=new foo();
  obj.x=10;
  obj.y=20;
console.log("x" in obj)//首先通过对象去找
//然后在向原先链去找,如果没有找到返回false

console.log(foo.prototype.hasOwnProperty("z"));
//检测当前对象有木有该属性
//
var box={name:"xiaobai",age:20};
var obj=Object.create(box);//创建对象，参数都是对象类型，通过object.create创建的对象的原形链指向通过参数传递进来的对象
console.log(obj.name);

console.log(obj.x);//undefined
console.log(obj.x.y);//报错


var box={name:"xiaobai",age:20}
 delete box.name;
 delete box.age;
 console.log(box.name);
 console.log(box.age);
 delete Object.box;

var cat =new Object();

Object.defineProperty
//第一个参数当前对象
//第二个要创建的属性名称
//第三个字面量Object对象
//ps 只要是通过Object.defineProperty创建的属性，
//那么该属性的属性标签默认都为false
Object.defineProperty(cat,"name",{enumerable:false,value:"猫"});
// 默认为enumerable:false
console.log(cat.name);
console.log(Object.getOwnPropertyDescriptor(cat,"name"));

var cat =new Object();

var box{
	 "name":{enumerable:ture,value:"猫"},
	 "age":{ enumerable:ture,  value:18},
	 "sex":{enumerable:ture,  value:"男"}
	};
Object.defineProperties(cat.name);

var man={
    name:"buff",
    sex:"男",

get myName(){

return this.name;
}
set myName(val){
 this.name=val;
}
}
console.log(man.myName);
man.myName="男buff";
console.log(man.myName);

function foo(){

}
Object.defineProperty(foo.prototype,"z",
{get:function(){return 1;}});
var obj=new foo();
console.log(obj.z);

Object.defineProperty(obj,"z",{value:10,writable:true});
obj.z=100;
console.log(obj.z);

var obj =new Object();
obj.name="小白";
var result =Object.getOwnPropertyDescriptor(obj,"name");//返回一个对象
Object.defineProperty(obj,"name",{configurable:false,writable:false})
obj.name="小黑";
console.log(obj.name);


console.log(Object.key())
//获取当前对象下可枚举的属性或行为，不会去原形链上找
//返回的是一个结果数组


var toString=Object.prototype.toString;

function getClass(obj){//通过call或apply实现对象冒充
	return toString./*call*/ apply(obj).slice(8,-1);
//返回处理过的构造 函数的名称
}
console.log(getClass(null));
console.log(getClass(undefined));
console.log(getClass(1));
console.log(getClass(new Number()));
console.log(getClass(undefined));
console.log(getClass(true));
console.log(getClass(new Boolean()));
console.log(getClass("122"));
console.log(getClass(new String("111")));


//判断该对象是否能够修改现有属性特性，是否能添加新属性，不能返回ture,否则false
Object.isSealed(object);

Object.isFrozen(object);//判断该对象是否能够修改现有属性特性，是否能添加新属性，不能返回ture,否则false

Object.isExtensible(object)//判断该对象是否可向对象添加新属性

Object.getOwnPropertyNames(object);//返回属于自己的属性与行为

//阻止方法

Object.freeze(object);//冻结对象  阻止修改现有属性的特性，并阻止添加新属性

Object.seal(object)//密封  阻止修改现有属性的特性和值，并阻止添加新属性

Object.preventExtensions(object)//阻止扩展  阻止向对象添加新属性
var obj=new Object();

obj.name="大白";
obj.color="白色";

Object.seal(obj);

obj.age=15;

console.log(obj.age)

var obj=new Object();

obj.name="大白";

Object.preventExtensions(obj);

//判断该对象是否能够修改现有属性特性，是否能添加新属性，不能返回ture,否则false
console.log("sealed:"+Object.isSealed(obj));
//判断该对象是否能够修改现有属性特性和值，是否能添加新属性，不能返回ture,否则false
console.log("Frozen:"+Object.isFrozen(obj));
//是否能添加新属性，ps能添加新属性true，不能为false
console.log("Extensible:"+Object.isExtensible(obj));

//阻止冻结 isSealed：true; isFrozen: true; isExtensible: false;

//阻止密封 isSealed：true; isFrozen:false; isExtensible: false;

//阻止扩展 isSealed：false; isFrozen:false; isExtensible:false;