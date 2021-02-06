(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{262:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-原型","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript | 原型")]),t._v(" "),a("p",[t._v("原型可谓是 JavaScript 区别于其他语言的非常重要的特性了，作为 JSer 不懂原型可能不一定会在做业务的时候遇到问题，但它仍然是每个学习 JS 的人的必修课，甚至可以用来判断一个人是否有真正系统地学习过 JavaScript。")]),t._v(" "),a("p",[t._v("这篇文章不深入讲解原型的细枝末节的语法特性，但求能理清原型的概念，与我们常见的基于类的面向对象语言进行一个对比与区分。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("原型，即 "),a("code",[t._v("prototype")]),t._v("，在 JavaScript 中任何的对象都有原型。")]),t._v(" "),a("p",[t._v("我们知道，对象可以由构造函数通过 new 进行创建，比如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("Person")]),t._v(" 作为一个比较抽象的“模板”，实例化了一个具体的“人”。在这里，我们称 "),a("code",[t._v("lee")]),t._v(" 具有原型，该原型就是 "),a("code",[t._v("[[prototype]]")]),t._v("，它来自 "),a("code",[t._v("Person.prototype")]),t._v("，"),a("code",[t._v("lee")]),t._v(" 就是通过该原型而诞生的。")]),t._v(" "),a("p",[t._v("不过，当我们想要获取一个对象的原型时，"),a("code",[t._v("[[prototype]]")]),t._v(" 是一个隐藏属性，而通过该对象的构造函数来访问 "),a("code",[t._v("prototype")]),t._v(" 属性也并不方便，故浏览器为生成的对象们提供了 "),a("code",[t._v("__proto__")]),t._v(" 的非正式属性，可以通过 "),a("code",[t._v("lee.__proto__")]),t._v(" 去访问对象的 "),a("code",[t._v("[[prototype]]")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("虽然 "),a("code",[t._v("__proto__")]),t._v(" 不是标准内的属性，但所有的浏览器都提供了它，所以我们一般仍使用它进行原型的概念讲解")]),t._v(" "),a("p",[t._v("ES6 中已经出现 "),a("code",[t._v("Object.getPrototypeOf()")]),t._v(" 与 "),a("code",[t._v("Reflect.getPrototypeOf()")]),t._v("，但本文并不讨论 "),a("code",[t._v("__proto__")]),t._v(" 的相关问题")])]),t._v(" "),a("p",[t._v("我们理清关系：")]),t._v(" "),a("ul",[a("li",[t._v("对象由构造器通过 "),a("code",[t._v("new")]),t._v(" 得到，其原型来自于构造器的 "),a("code",[t._v("prototype")])]),t._v(" "),a("li",[a("strong",[t._v("构造器")]),t._v("的 "),a("code",[t._v("prototype")]),t._v(" 属性是其生成的对象的"),a("code",[t._v("原型")])]),t._v(" "),a("li",[a("strong",[t._v("对象")]),t._v("通过 "),a("code",[t._v("__proto__")]),t._v(" 属性访问自己的"),a("code",[t._v("原型")]),t._v("（"),a("code",[t._v("lee.__proto__ === Person.prototype")]),t._v("）")])]),t._v(" "),a("p",[t._v("随着内容的增加，我们比较容易弄混 "),a("code",[t._v("__proto__")]),t._v(" 与 "),a("code",[t._v("prototype")]),t._v("，所以一开始我们就要区分好：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("prototype")]),t._v(" 属于函数（构造器）的属性，它为每个实例化的对象指明了对应的原型。")]),t._v(" "),a("li",[a("code",[t._v("__proto__")]),t._v(" 属于对象的属性，通过它我们能够访问对象的原型。")])]),t._v(" "),a("h2",{attrs:{id:"为什么要有原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要有原型")]),t._v(" "),a("p",[t._v("我们先不讲原型链继承，也不讲类与原型的区别，首先我们要明白的，为什么要有“原型”这个概念。")]),t._v(" "),a("p",[t._v("我们知道，在写构造函数时，我们可以给 new 的对象直接添加方法属性：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hi")]),t._v("\n")])])]),a("p",[t._v("这时候")]),t._v(" "),a("p",[a("em",[t._v("TODO 以下未完成")])])])},[],!1,null,null,null);s.default=e.exports}}]);