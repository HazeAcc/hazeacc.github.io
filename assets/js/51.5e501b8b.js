(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{256:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-异常处理语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-异常处理语句","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript | 异常处理语句")]),t._v(" "),a("p",[t._v("如果你系统地学习过 C++ 或 Java，那么"),a("code",[t._v("throw")]),t._v("与"),a("code",[t._v("try...catch")]),t._v("语句你肯定不会陌生。")]),t._v(" "),a("p",[t._v("在 JavaScript 中，我们也能使用"),a("code",[t._v("throw")]),t._v("语句去抛出一个异常，并用"),a("code",[t._v("try...catch")]),t._v("语句去捕获并处理它。")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录  ")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#trycatch-%E8%AF%AD%E5%8F%A5"}},[t._v("try...catch 语句")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%BC%82%E5%B8%B8%E5%AF%B9%E8%B1%A1"}},[t._v("异常对象")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#throw-%E8%AF%AD%E5%8F%A5"}},[t._v("throw 语句")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#finally-%E8%AF%AD%E5%8F%A5"}},[t._v("...finally 语句")])])]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"try-catch-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-语句","aria-hidden":"true"}},[t._v("#")]),t._v(" try...catch 语句")]),t._v(" "),a("p",[t._v("编写代码的过程中，我们经常会遇到代码跑到一半遇到错误导致接下来的代码全部被无视掉，然后控制台无情地弹出红色的错误警告......这经常令人不快，因为很多时候某个地方发生错误并不会影响其他代码地运行，最多可能只是页面掉了某个元素。")]),t._v(" "),a("p",[t._v("如果你知道哪些地方可能会产生错误，那么我们可以使用一种更为合理地语法结构"),a("code",[t._v("try...catch")]),t._v("来捕捉这些异常并进行相应的处理，使得代码不会停止运行，甚至能对这个错误做一些补偿使其看起来并没有发生过错误。")]),t._v(" "),a("p",[a("code",[t._v("try...catch")]),t._v("语句通常长这样子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能产生错误的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发生异常后的处理，err为被捕捉的错误名，可以取其他名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("在"),a("code",[t._v("try")]),t._v("语句块中发生错误，控制流会由发生错误的语句直接跳转到"),a("code",[t._v("catch")]),t._v("语块中，而"),a("code",[t._v("try")]),t._v("语句块中后面的代码会被跳过。所以"),a("code",[t._v("try")]),t._v("语句不是把所有的代码一包就好的，它应该根据代码的功能进行合理的包裹。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"异常对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常对象")]),t._v(" "),a("p",[t._v("当异常发生时，JavaScript 会生成一个包含异常的细节的对象，作为参数传递给"),a("code",[t._v("catch")]),t._v("语句。")]),t._v(" "),a("p",[t._v("每一个标准的异常对象都有这两个属性：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("name")]),a("br"),t._v("\n异常的名称")]),t._v(" "),a("li",[a("code",[t._v("message")]),a("br"),t._v("\n异常的详细文字描述")])]),t._v(" "),a("p",[t._v("还有许多非标准的属性，在很多情况下都能够使用，其中使用最广泛的是：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("stack")]),a("br"),t._v("\n当前调用栈")])]),t._v(" "),a("p",[t._v("JavaScript 内置一些常用的异常的构造器，我们可以直接使用它们来创建异常对象。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyntaxError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReferenceError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),a("p",[t._v("你也可以新建一个自定义的“异常对象”，然后抛出它。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建一个用户异常")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UserException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UserException"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义toString方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("': \"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果某个地方不符合我们的预期")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建对象类型的实例并抛出它")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value too high"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"throw-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throw-语句","aria-hidden":"true"}},[t._v("#")]),t._v(" throw 语句")]),t._v(" "),a("p",[t._v("直接用"),a("code",[t._v("try...catch")]),t._v("语句就可以捕获由系统产生的异常错误了，但如果我们想自己设置一个错误抛出，可以使用"),a("code",[t._v("throw")]),t._v("语句可以抛出一个异常。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在 JavaScript 中，异常可以抛出任意对象或基本类型。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// String 类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Number 类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Boolean 类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m an object!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象类型")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"finally-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finally-语句","aria-hidden":"true"}},[t._v("#")]),t._v(" ...finally 语句")]),t._v(" "),a("p",[a("code",[t._v("try...catch")]),t._v("语句一般时候已经够用了，但它还有另外的语法："),a("code",[t._v("try...catch...finally")]),t._v("和"),a("code",[t._v("try...finally")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("finally")]),t._v("语句包裹了一个绝对会被执行的代码块，不论"),a("code",[t._v("try")]),t._v("和"),a("code",[t._v("catch")]),t._v("代码块内发生了什么，是捕捉到了错误还是正常运行，甚至已经"),a("code",[t._v("return")]),t._v("或"),a("code",[t._v("break")]),t._v("准备跳出函数体/循环体了，"),a("code",[t._v("finally")]),t._v("代码块内的语句仍然会被执行。")]),t._v(" "),a("p",[t._v("这很可靠，因为它保证了某些语句一定会被执行，提供了可读性更好的代码写法。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始做需要被完成的操作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能会发生异常的操作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理捕捉到的异常")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 完成必须要做的事情，即使 try 里面执行失败，或者已经 return，或者在 catch 中抛出了新的异常")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果省略了上面的 catch 语句部分，且发生了异常，则不会处理它，让他被丢出函数外")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br")])},[],!1,null,null,null);s.default=r.exports}}]);