/****
 * 静态成员：在类中通过static修饰的属性或者方法，那就是静态的属性及静态的方法，也称为：静态成员
 * 静态成员在使用的时候是通过类名.的这种语法来调用的
 */
(() => {
  // 定义一个类
  class Person {
    // 静态属性
    static name1: string = '小甜甜'
    // 构造函数是不能通过static来进行修饰的
    constructor() {
      // 此时this是实例对象，name1是静态属性，不能通过实例对象自己调用静态属性来使用
      // this.name1 = name
    }
    // 静态方法
    static sayHi() {
      console.log('萨瓦迪卡')
    }
  }
  // 实例化对象
  // const person: Person = new Person()

  // 通过类名.静态属性的方式来访问该成员数据
  console.log(Person.name1)
  // 通过类名.静态属性的方式来设置该成员数据
  Person.name1 = '佐助'
  console.log(Person.name1)
  // 通过类名.静态属性的方式来调用内部的静态的方法
  Person.sayHi()


})()