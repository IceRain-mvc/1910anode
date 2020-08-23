(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{302:function(_,v,t){"use strict";t.r(v);var a=t(28),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h3",{attrs:{id:"_1、封装-面向对象三大特征之一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、封装-面向对象三大特征之一"}},[_._v("#")]),_._v(" *1、封装  面向对象三大特征之一")]),_._v(" "),t("ul",[t("li",[_._v("什么是"),t("strong",[_._v("封装")]),_._v("：将类的某些信息（属性或方法）隐藏在类内部，不许外部程序直接访问，")]),_._v(" "),t("li",[_._v("而是通过该类提供的方法（"),t("code",[_._v("getter")]),_._v("/"),t("code",[_._v("setter")]),_._v("）来实现对隐藏信的操作和访问")])]),_._v(" "),t("h3",{attrs:{id:"_2、封装的好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、封装的好处"}},[_._v("#")]),_._v(" *2、封装的好处")]),_._v(" "),t("ul",[t("li",[_._v("便于使用者正确使用系统，防止错误修改属性")]),_._v(" "),t("li",[_._v("有助于系统之间的松耦合，提高系统独立性")]),_._v(" "),t("li",[_._v("提高软件的可重用性")]),_._v(" "),t("li",[_._v("降低了构建大型系统的风险")])]),_._v(" "),t("h3",{attrs:{id:"_3、封装的步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、封装的步骤"}},[_._v("#")]),_._v(" 3、封装的步骤")]),_._v(" "),t("ul",[t("li",[_._v("修改属性的可见性")]),_._v(" "),t("li",[_._v("创建公有的getter/setter方法")]),_._v(" "),t("li",[_._v("在getter/setter方法中加入属控制语句")]),_._v(" "),t("li")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("注意")]),_._v("：允许只出现一个getter或setter方法，只有一个getter代表当前属性只读，只有一个setter代表当前属性只写")])]),_._v(" "),t("h3",{attrs:{id:"_4、包的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、包的作用"}},[_._v("#")]),_._v(" 4、包的作用")]),_._v(" "),t("ul",[t("li",[_._v("a、允许类组成较小的单元（类似文件夹），易于找到和使用相应的文件")]),_._v(" "),t("li",[_._v("b、有助于实施"),t("strong",[_._v("访问权限控制")])]),_._v(" "),t("li",[_._v("c、防止命名冲突，"),t("strong",[_._v("区分")]),_._v("名字相同的类")])]),_._v(" "),t("h3",{attrs:{id:"_5、包命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、包命名规范"}},[_._v("#")]),_._v(" 5、包命名规范")]),_._v(" "),t("ul",[t("li",[_._v("a、包名由"),t("strong",[_._v("小写")]),_._v("字母组成，不能以圆点开头或结尾")]),_._v(" "),t("li",[_._v("b、包名之前最好加上唯一的前缀，通常使用组织"),t("strong",[_._v("倒置的网络域名")])]),_._v(" "),t("li",[_._v("c、包名后续部分依不同机构内部的规范不同而不同")])]),_._v(" "),t("h3",{attrs:{id:"_6、使用包的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、使用包的注意事项"}},[_._v("#")]),_._v(" 6、使用包的注意事项")]),_._v(" "),t("ul",[t("li",[_._v("a、一个类同时引用了两个来自不同包的同名类---必须通过"),t("strong",[_._v("完整类名来区分")])]),_._v(" "),t("li",[_._v("b、每个包都是独立的，顶层包不会包含子包的类")]),_._v(" "),t("li",[_._v("c、package和import的顺序是固定的\n"),t("ul",[t("li",[_._v("package必须位于第一行（忽略注释行）")]),_._v(" "),t("li",[_._v("只允许有一个package语句")]),_._v(" "),t("li",[_._v("其次是import")]),_._v(" "),t("li",[_._v("接着是类的声明")])])])]),_._v(" "),t("h3",{attrs:{id:"_7、类成员的访问修饰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、类成员的访问修饰"}},[_._v("#")]),_._v(" *7、类成员的访问修饰")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("访问修饰符")]),_._v(" "),t("th",[_._v("本类")]),_._v(" "),t("th",[_._v("同包")]),_._v(" "),t("th",[_._v("子类")]),_._v(" "),t("th",[_._v("任何地方")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("private")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("默认(friendly)")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td"),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("protected\t（受保护的）")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("public")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("√")])])])]),_._v(" "),t("h3",{attrs:{id:"_8、static修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、static修饰符"}},[_._v("#")]),_._v(" *8、\tstatic修饰符")]),_._v(" "),t("h4",{attrs:{id:"_8-1-static可以用来修饰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-static可以用来修饰"}},[_._v("#")]),_._v(" 8.1 static可以用来修饰:")]),_._v(" "),t("ul",[t("li",[_._v("成员变量\n"),t("ul",[t("li",[_._v("静态变量，可以直接通过类名访问  "),t("code",[_._v("static int age;")])])])]),_._v(" "),t("li",[_._v("成员方法\n"),t("ul",[t("li",[_._v("静态方法，可以直接通过类名访问  "),t("code",[_._v("public static void show(){}")])])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("注意")]),_._v("：static修饰的方法中不能使用this和super关键字调用属性和方法（需要通过new对象来调用）")])])]),_._v(" "),t("li",[_._v("代码块\n"),t("ul",[t("li",[t("p",[_._v("*静态代码块，当Java虚拟机加载类时，就会执行该代码块   "),t("code",[_._v("static{}")])])]),_._v(" "),t("li",[t("p",[_._v("实例成员和静态成员的区别：\n"),t("code",[_._v("static")]),_._v("修饰的成员特点，程序启动时立即分配空间，并且始终保持同一个空间，程序停止在释放空间，全局只创建一次。\n实例成员（new对象才能用的）创建对象并调用的时候才会分配空间，方法执行完成就释放空间，可以被创建多次。")])]),_._v(" "),t("li",[t("p",[_._v("什么时候使用"),t("code",[_._v("static")]),_._v("修饰符\n1、"),t("code",[_._v("static")]),_._v("修饰的方法：制作工具类（处理字符串的，处理发送消息的，导入导出excel，加密的）中的方法\n2、"),t("code",[_._v("staitc")]),_._v("修饰的属性：在多个类中共享同一个数据\n3、"),t("code",[_._v("static")]),_._v("静态代码块：完成单例模式和程序的初始化工作")])])])])]),_._v(" "),t("h4",{attrs:{id:"_8-2-static修饰与非static修饰的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-static修饰与非static修饰的区别"}},[_._v("#")]),_._v(" 8.2 static修饰与非static修饰的区别")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th"),_._v(" "),t("th",[_._v("static修饰")]),_._v(" "),t("th",[_._v("非static修饰")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("属性")]),_._v(" "),t("td",[_._v("类属性、类变量")]),_._v(" "),t("td",[_._v("实例属性、实例变量")])]),_._v(" "),t("tr",[t("td",[_._v("方法")]),_._v(" "),t("td",[_._v("类方法")]),_._v(" "),t("td",[_._v("实例方法")])]),_._v(" "),t("tr",[t("td",[_._v("调用方式")]),_._v(" "),t("td",[_._v("类名.属性  类名.方法()    对象.属性   对象.方法()")]),_._v(" "),t("td",[_._v("对象.属性,对象.方法()")])]),_._v(" "),t("tr",[t("td",[_._v("归属")]),_._v(" "),t("td",[_._v("类")]),_._v(" "),t("td",[_._v("单个对象")])])])]),_._v(" "),t("h3",{attrs:{id:"_9、安装阿里代码检查插件："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、安装阿里代码检查插件："}},[_._v("#")]),_._v(" 9、安装阿里代码检查插件：")]),_._v(" "),t("p",[_._v("https://blog.csdn.net/skieske/article/details/78250137")]),_._v(" "),t("h3",{attrs:{id:"_10、继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、继承"}},[_._v("#")]),_._v(" *10、继承")]),_._v(" "),t("h5",{attrs:{id:"a、什么是继承：面向对象三大特征之一，指一个对象直接使用另一对象的属性和方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a、什么是继承：面向对象三大特征之一，指一个对象直接使用另一对象的属性和方法"}},[_._v("#")]),_._v(" * a、什么是继承：面向对象三大特征之一，指一个对象直接使用另一对象的属性和方法")]),_._v(" "),t("h5",{attrs:{id:"b、为什么需要继承：减少代码冗余，方便维护"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b、为什么需要继承：减少代码冗余，方便维护"}},[_._v("#")]),_._v(" * b、为什么需要继承："),t("strong",[_._v("减少代码冗余，方便维护")])]),_._v(" "),t("h5",{attrs:{id:"c、继承的特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c、继承的特性"}},[_._v("#")]),_._v(" * c、继承的特性")]),_._v(" "),t("ul",[t("li",[_._v("子类可以调用父类非"),t("code",[_._v("private")]),_._v("的属性和方法。\n"),t("ul",[t("li",[_._v("子类可以对父类的属性和方法进行"),t("strong",[_._v("扩展")]),_._v("。")])])]),_._v(" "),t("li",[_._v("子类可以用自己的方式实现父类的方法。")]),_._v(" "),t("li",[_._v("Java的继承是单继承，但是可以多重继承，\n"),t("ul",[t("li",[_._v("单继承就是一个子类只能继承一个父类，")]),_._v(" "),t("li",[_._v("多重继承就是，例如A类继承B类，B类继承C类，所以按照关系就是C类是B类的父类，B类是A类的父类")])])]),_._v(" "),t("li",[t("code",[_._v("提高")]),_._v("了类之间的"),t("strong",[_._v("耦合性")]),_._v("（继承的缺点，耦合度高就会造成代码之间的联系更紧密）。")])]),_._v(" "),t("h5",{attrs:{id:"d、继承关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d、继承关键字"}},[_._v("#")]),_._v(" * d、继承关键字")]),_._v(" "),t("ul",[t("li",[_._v("继承可以使用 "),t("code",[_._v("extends")]),_._v(" 和 "),t("code",[_._v("implements")]),_._v(" 这两个关键字来实现继承，而且所有的类都是继承于 "),t("code",[_._v("java.lang.Object")]),_._v("，")]),_._v(" "),t("li",[_._v("当一个类没有继承的两个关键字，则默认继承"),t("code",[_._v("Object")])])]),_._v(" "),t("h5",{attrs:{id:"e、super关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#e、super关键字"}},[_._v("#")]),_._v(" * e、"),t("code",[_._v("super")]),_._v("关键字")]),_._v(" "),t("ul",[t("li",[_._v("调用父类的属性、方法、构造方法")]),_._v(" "),t("li",[t("code",[_._v("super")]),_._v("只能出现在子类的方法和构造方法中")]),_._v(" "),t("li",[t("code",[_._v("super")]),_._v("调用构造方法时，只能是第一句")]),_._v(" "),t("li",[t("code",[_._v("super")]),_._v("不能访问父类的"),t("code",[_._v("private")]),_._v("成员")])]),_._v(" "),t("h5",{attrs:{id:"f、final修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#f、final修饰符"}},[_._v("#")]),_._v(" * f、final修饰符")]),_._v(" "),t("ul",[t("li",[_._v("修饰常量，声明时必须赋值")]),_._v(" "),t("li",[_._v("修饰类，此类不能被继承--最终类")]),_._v(" "),t("li",[_._v("修饰方法，方法不能被重写--最终方法")]),_._v(" "),t("li",[_._v("修饰属性，属性不能被赋值。")])]),_._v(" "),t("h5",{attrs:{id:"g、访问修饰符protected"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g、访问修饰符protected"}},[_._v("#")]),_._v(" * g、访问修饰符"),t("code",[_._v("protected")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("protected")]),_._v(" 意为受保护的，")]),_._v(" "),t("li",[_._v("可以修饰属性和方法")]),_._v(" "),t("li",[_._v("本类、同包、子类可以访问")])]),_._v(" "),t("h5",{attrs:{id:"h、继承条件下构造方法的调用规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h、继承条件下构造方法的调用规则"}},[_._v("#")]),_._v(" * h、继承条件下构造方法的调用规则")]),_._v(" "),t("ul",[t("li",[_._v("子类构造方法默认调用父类的无参构造方法   "),t("code",[_._v("super();")])]),_._v(" "),t("li",[_._v("子类构造方法通过"),t("code",[_._v("super")]),_._v('调用父类的有参构造方法，父类执行相应构造方法，而不执行父类无参构造方法  super("张三",20);')])]),_._v(" "),t("h5",{attrs:{id:"i、不能被继承的情况："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i、不能被继承的情况："}},[_._v("#")]),_._v(" * i、不能被继承的情况：")]),_._v(" "),t("ul",[t("li",[_._v("1、"),t("code",[_._v("private")]),_._v(" 成员")]),_._v(" "),t("li",[_._v("2、子类与父类不在同包，使用默认访问权限的成员。")]),_._v(" "),t("li",[_._v("3、构造方法")])])])}),[],!1,null,null,null);v.default=e.exports}}]);