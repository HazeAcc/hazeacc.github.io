(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{265:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-html-dom-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-html-dom-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript | HTML DOM 事件")]),t._v(" "),s("p",[t._v("交互性是互联网应用非常重要的一部分，而事件是交互的关键。")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录 ")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#html-%E4%BA%8B%E4%BB%B6"}},[t._v("HTML 事件")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E7%A7%8D%E7%B1%BB"}},[t._v("事件种类")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E7%9B%91%E5%90%AC"}},[t._v("创建监听")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E6%8F%92%E5%85%A5%E4%BB%A3%E7%A0%81%E8%B0%83%E7%94%A8"}},[t._v("代码插入/代码调用")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%88%86%E9%85%8D%E4%BA%8B%E4%BB%B6"}},[t._v("分配事件")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC%E5%99%A8"}},[t._v("事件监听器")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%BE%93%E5%85%A5%E6%A1%86%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC"}},[t._v("输入框事件监听")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%B6%E4%BB%96%E6%A6%82%E5%BF%B5"}},[t._v("其他概念")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1"}},[t._v("事件对象")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1--%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7"}},[t._v("事件冒泡 / 事件捕获")])])])])]),t._v(" "),s("br"),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"html-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML 事件")]),t._v(" "),s("p",[t._v("HTML 的事件有许多例子：")]),t._v(" "),s("ul",[s("li",[t._v("点击鼠标时")]),t._v(" "),s("li",[t._v("用户敲击按键时")]),t._v(" "),s("li",[t._v("鼠标移至元素上时")]),t._v(" "),s("li",[t._v("输入字段被改变时")]),t._v(" "),s("li",[t._v("HTML 表单被提交时")]),t._v(" "),s("li",[t._v("网页加载后")]),t._v(" "),s("li",[t._v("图像加载后")])]),t._v(" "),s("p",[t._v("通过 HTML DOM，我们可以编写 JavaScript 代码对 HTML 事件作出反应。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"事件种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件种类","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件种类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("onload / onunload")]),t._v(" "),s("td",[t._v("进入/离开 页面时")])]),t._v(" "),s("tr",[s("td",[t._v("onchange")]),t._v(" "),s("td",[t._v("内容 被改变 时")])]),t._v(" "),s("tr",[s("td",[t._v("onmouseover / onmouseout")]),t._v(" "),s("td",[t._v("移入/移出 某个元素的上方时")])]),t._v(" "),s("tr",[s("td",[t._v("onmousedown / onmouseup")]),t._v(" "),s("td",[t._v("鼠标按钮 按下/抬起时")])]),t._v(" "),s("tr",[s("td",[t._v("onclick")]),t._v(" "),s("td",[t._v("鼠标按钮点击后（按下与抬起动作都在元素上方完成）")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("更多事件种类："),s("a",{attrs:{href:"https://www.runoob.com/jsref/dom-obj-event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/jsref/dom-obj-event.html"),s("OutboundLink")],1)])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"创建监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建监听","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建监听")]),t._v(" "),s("h3",{attrs:{id:"代码插入-代码调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码插入-代码调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码插入/代码调用")]),t._v(" "),s("p",[t._v("我们可以直接插入 JS 代码，或者通过调用 JS 函数的方式执行代码：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 方法 1 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("this.innerHTML = 'Hello~'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点我"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 方法 2 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("changeText(this)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点我我"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello :)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("但这是一种不好的方式，非常不利于后期维护，且不利于收索引擎理解页面。不建议使用该方法添加 DOM 事件。")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"分配事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分配事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 分配事件")]),t._v(" "),s("p",[t._v("除了直接在标签中添加事件属性，也可以使用 JavaScript 代码向 HTML 元素分配事件：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my_btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按我"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_btn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" displayDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("使用 js 代码直接为 DOM 元素的事件属性虽然方便，但是也存在一些缺点，例如后面添加的值会覆盖前面的值，从而无法更好的管理多个事件触发器。")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"事件监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件监听器","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件监听器")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("addEventListener()")]),t._v(" 方法可以为 HTML 元素（或 DOM 对象）指定事件处理程序。这也是最推荐的添加事件监听的方式。")]),t._v(" "),s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数类型 | 被调用的函数 | 布尔值（指定事件冒泡/事件捕获，后讲）")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useCapture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("由于该方法不会覆盖已有的事件处理程序，我们可以给一个元素添加多个相同或不相同类型的事件处理程序。")]),t._v(" "),s("p",[t._v("使用该方法添加事件监听，达到了代码分离的效果，只用在 JavaScript 文件中修改代码而无需跳转至 HTML 文档。")]),t._v(" "),s("p",[t._v("在旧浏览器版本下可以使用 "),s("code",[t._v("attachEvent()")]),t._v("方法。")]),t._v(" "),s("p",[t._v("添加监听器所对应的移除方法是 "),s("code",[t._v("removeEventListener()")]),t._v("。")]),t._v(" "),s("p",[t._v("监听器例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//并不会和第一个冲突或覆盖")]),t._v("\n")])])]),s("p",[t._v("DOM 对象（如 "),s("code",[t._v("window")]),t._v("）也支持添加事件监听器：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加当用户调整窗口大小时触发的事件监听器")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"demo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sometext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果需要给函数传递参数，请写成调用指定函数的匿名函数的形式：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"输入框事件监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入框事件监听","aria-hidden":"true"}},[t._v("#")]),t._v(" 输入框事件监听")]),t._v(" "),s("p",[t._v("输入框作为一个常用的表单控件，其拥有好几种事件如"),s("code",[t._v("focus")]),t._v("、"),s("code",[t._v("keydown")]),t._v("、"),s("code",[t._v("keyup")]),t._v("、"),s("code",[t._v("input")]),t._v("、"),s("code",[t._v("change")]),t._v("、"),s("code",[t._v("blur")]),t._v("，但这些事件的应用时机与场景有着不小的差异。")]),t._v(" "),s("p",[t._v("最先被激活的往往是"),s("code",[t._v("focus")]),t._v("事件。这是一个不少元素都具有的事件属性，当“焦点”聚集在输入框元素时，该事件便会激活。")]),t._v(" "),s("p",[t._v("“焦点”聚集的方法可以是使用Tab键控制焦点切换到输入框上，或者直接用鼠标点击一下输入框（注意和"),s("code",[t._v("click")]),t._v("并不等价），被激活后输入框一般都会有光标闪烁提醒你正在输入字符。")]),t._v(" "),s("p",[t._v("其次，进行一次按键的点击，会按时间顺序产生"),s("code",[t._v("keydown")]),t._v("、"),s("code",[t._v("input")]),t._v("、"),s("code",[t._v("keyup")]),t._v("三种事件，只有它们三个能够察觉到用户每次键盘输入的变化。")]),t._v(" "),s("p",[s("code",[t._v("keydown")]),t._v("和"),s("code",[t._v("keyup")]),t._v("很好理解，即为按键按下和抬起的动作瞬间触发。而"),s("code",[t._v("input")]),t._v("事件虽然很像"),s("code",[t._v("keydown")]),t._v("，但是他从语义上讲更加偏重于“有输入的事件发生”而不同于“有按键被按下”，导致了"),s("code",[t._v("input")]),t._v("无法获取到当前输入的"),s("code",[t._v("keyCode")]),t._v("值而"),s("code",[t._v("key")]),t._v("、"),s("code",[t._v("keydown")]),t._v("可以。")]),t._v(" "),s("p",[t._v("最后当输入框失去焦点时，会触发"),s("code",[t._v("change")]),t._v("和"),s("code",[t._v("blur")]),t._v("事件。这两个事件的区别点在于："),s("code",[t._v("change")]),t._v("在输入框内容的最终值与原值相同时不会触发，即便进行过删除与输入操作；而"),s("code",[t._v("blur")]),t._v("则仅监控失去焦点这个事件，不管怎样都会触发。")]),t._v(" "),s("p",[t._v("故按照时间顺序可以这样排序："),s("code",[t._v("focus")]),t._v("->"),s("code",[t._v("keydown")]),t._v("->"),s("code",[t._v("input")]),t._v("->"),s("code",[t._v("keyup")]),t._v("->"),s("code",[t._v("change")]),t._v("->"),s("code",[t._v("blur")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"其他概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他概念")]),t._v(" "),s("p",[t._v("一下内容为关于 DOM 事件的高级概念，阅读它们可以有助于理解一些其他的代码模式。")]),t._v(" "),s("h3",{attrs:{id:"事件对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),s("p",[t._v("addEventListener所回调的函数可以附带一个参数（常常被命名为 e/evt/event），它被称为事件对象。事件对象具有一个"),s("code",[t._v("target")]),t._v("属性，永远表示触发事件发生的元素的引用。通过使用事件对象，我们可以不用使用复杂的选择去获得被点击的元素（如果你对许多元素添加了相同的监听）。")]),t._v(" "),s("p",[t._v("一个例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bgChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获得随机颜色")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rndCol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgb('")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将触发事件的元素的背景颜色设置为一个随机的颜色")]),t._v("\n  e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rndCol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"事件冒泡-事件捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡-事件捕获","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件冒泡 / 事件捕获")]),t._v(" "),s("p",[t._v("在 HTML DOM 中有两种事件传播的方法：冒泡和捕获。")]),t._v(" "),s("p",[t._v("事件传播是一种定义当发生事件时元素次序的方法，确定次序的方式区别：在冒泡中，最先处理内侧元素的事件，然后是外层元素；捕获则反之。")]),t._v(" "),s("blockquote",[s("p",[t._v("假如 "),s("code",[t._v("<div>")]),t._v(" 元素内有一个 "),s("code",[t._v("<p>")]),t._v("，然后用户点击了这个 "),s("code",[t._v("<p>")]),t._v(" 元素：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("冒泡：首先处理 "),s("code",[t._v("<p>")]),t._v(" 元素的点击事件，然后是 "),s("code",[t._v("<div>")]),t._v(" 元素的点击事件。")])]),t._v(" "),s("li",[s("p",[t._v("捕获：首先处理 "),s("code",[t._v("<div>")]),t._v(" 元素的点击事件，然后是 "),s("code",[t._v("<p>")]),t._v(" 元素的点击事件。")])])])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("addEventListener(event, function[, useCapture])")]),t._v(" 方法中可以通过使用 "),s("code",[t._v("useCapture")]),t._v(" 参数来规定传播类型：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("布尔值")]),t._v(" "),s("th",[t._v("传播方式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("false")]),t._v("（默认值）")]),t._v(" "),s("td",[t._v("冒泡")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("捕获")])])])]),t._v(" "),s("p",[t._v("由于 IE 的 attachEvent 仅支持冒泡，为了统一性，一般使用默认值。")]),t._v(" "),s("br")])},[],!1,null,null,null);a.default=e.exports}}]);