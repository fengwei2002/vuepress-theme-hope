(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{546:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),s("p",[t._v("除了查看本指南，您也可以直接查看源代码中的 "),s("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/packages/theme/types/hopeConfig.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("types 文件"),s("OutboundLink")],1),t._v(" 或本文档的 "),s("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/docs/theme/src/.vuepress/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("通过注入，vuepress-theme-hope 改变了默认主题一些配置的默认值。")]),t._v(" "),s("p",[t._v("虽然一般情况下，它们影响不大，但是还是需要着重提示这可能造成与默认文档预期不符的结果。")]),t._v(" "),s("p",[t._v("文档下方仔细的列出了所有配置项的改变。")])]),t._v(" "),s("p",[s("code",[t._v(".vuepress/config.js")]),t._v(" 中的 themeConfig 字段(主题字段)新增以下配置：")]),t._v(" "),s("h2",{attrs:{id:"基本选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本选项"}},[t._v("#")]),t._v(" 基本选项")]),t._v(" "),s("p",[t._v("这些选项需要您正确配置。")]),t._v(" "),s("h3",{attrs:{id:"baselang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baselang"}},[t._v("#")]),t._v(" baseLang")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'zh-CN'")])])]),t._v(" "),s("p",[t._v("主目录所对应的语言。")]),t._v(" "),s("p",[t._v("这个选项会保证主目录页面中主题文字使用正确的语言显示。你可以根据自己的需要将其改为其他语言。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("目前多语言仅适配了 "),s("strong",[t._v("简体中文")]),t._v(" (zh-CN) 与 "),s("strong",[t._v("英文(美国)")]),t._v(" (en-US)。")]),t._v(" "),s("p",[t._v("如果您需要其它语言的多语言支持，你可以 "),s("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/packages/shared-utils/src/i18n/config.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("向此文件提交一个 PR"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[t._v("#")]),t._v(" author")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("文章显示的默认作者")]),t._v(" "),s("h3",{attrs:{id:"nav"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nav"}},[t._v("#")]),t._v(" nav "),s("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),t._v(" "),s("p",[t._v("NavBarItem 新增")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("icon")]),t._v(" 字段来支持图标显示。")]),t._v(" "),s("li",[s("code",[t._v("prefix")]),t._v(" 字段来自动添加分组前缀")])]),t._v(" "),s("h3",{attrs:{id:"sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" sidebar "),s("MyBadge",{attrs:{text:"改进",type:"warn"}})],1),t._v(" "),s("p",[t._v("SideBarItem 新增")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("icon")]),t._v(" 字段来支持图标显示。")]),t._v(" "),s("li",[s("code",[t._v("prefix")]),t._v(" 字段来自动添加分组前缀")])]),t._v(" "),s("h2",{attrs:{id:"页脚设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页脚设置"}},[t._v("#")]),t._v(" 页脚设置")]),t._v(" "),s("p",[t._v("页脚设置选项")]),t._v(" "),s("h3",{attrs:{id:"footer-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer-content"}},[t._v("#")]),t._v(" footer.content")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("页脚的默认内容，可输入 HTMLString。")]),t._v(" "),s("h3",{attrs:{id:"footer-copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer-copyright"}},[t._v("#")]),t._v(" footer.copyright")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'Copyright © <作者>'")])])]),t._v(" "),s("p",[t._v("默认的版权信息")]),t._v(" "),s("h3",{attrs:{id:"footer-display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#footer-display"}},[t._v("#")]),t._v(" footer.display")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否默认显示页脚")]),t._v(" "),s("h2",{attrs:{id:"主题色与深色模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题色与深色模式"}},[t._v("#")]),t._v(" 主题色与深色模式")]),t._v(" "),s("p",[t._v("主题色和深色模式设置选项配置。")]),t._v(" "),s("h3",{attrs:{id:"darkmode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#darkmode"}},[t._v("#")]),t._v(" darkmode")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("'auto-switch' | 'switch' | 'auto' | 'disable'")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'auto-switch'")])])]),t._v(" "),s("p",[t._v("深色模式支持选项:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("'auto-switch'")]),t._v(': "关闭 | 自动 | 打开" 的三段式开关')]),t._v(" "),s("li",[s("code",[t._v("'switch'")]),t._v(': "关闭 | 打开" 的切换式开关')]),t._v(" "),s("li",[s("code",[t._v("'auto'")]),t._v(": 自动根据用户设备主题或当前时间决定是否应用深色模式")]),t._v(" "),s("li",[s("code",[t._v("'disable'")]),t._v(": 禁用深色模式")])]),t._v(" "),s("h3",{attrs:{id:"themecolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#themecolor"}},[t._v("#")]),t._v(" themeColor")]),t._v(" "),s("p",[t._v("主题色选项配置。")]),t._v(" "),s("p",[t._v("如果您不需要这项功能，请设置 "),s("code",[t._v("themeColor: false")]),t._v(" 将其禁用。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("类型: "),s("code",[t._v("Record<string, string>")])])]),t._v(" "),s("li",[s("p",[t._v("默认值:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  blue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#2196f3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  red"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f26d6d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  green"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#3eaf7c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  orange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fb9b5f'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"markdown-增强"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-增强"}},[t._v("#")]),t._v(" Markdown 增强")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("themeConfig.markdown")]),t._v(" 进行 Markdown 增强配置。")]),t._v(" "),s("p",[t._v("如果您不需要任何 Markdown 增强，请设置为 "),s("code",[t._v("false")]),t._v(" 将其禁用。")]),t._v(" "),s("h3",{attrs:{id:"markdown-enableall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-enableall"}},[t._v("#")]),t._v(" markdown.enableAll")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("启用全部功能。")]),t._v(" "),s("h3",{attrs:{id:"markdown-linenumbers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-linenumbers"}},[t._v("#")]),t._v(" markdown.lineNumbers "),s("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否在每个代码块的左侧显示行号")]),t._v(" "),s("h3",{attrs:{id:"markdown-sup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sup"}},[t._v("#")]),t._v(" markdown.sup")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否启用上角标格式支持")]),t._v(" "),s("h3",{attrs:{id:"markdown-sub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sub"}},[t._v("#")]),t._v(" markdown.sub")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否启用下角标格式支持")]),t._v(" "),s("h3",{attrs:{id:"markdown-footnote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-footnote"}},[t._v("#")]),t._v(" markdown.footnote")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否启用脚注格式支持")]),t._v(" "),s("h3",{attrs:{id:"markdown-tex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-tex"}},[t._v("#")]),t._v(" markdown.tex")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否启用 TeX 语法支持")]),t._v(" "),s("h3",{attrs:{id:"markdown-flowchart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-flowchart"}},[t._v("#")]),t._v(" markdown.flowchart")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否启用 流程图 语法支持")]),t._v(" "),s("h2",{attrs:{id:"评论设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评论设置"}},[t._v("#")]),t._v(" 评论设置")]),t._v(" "),s("p",[t._v("具体配配置请见　"),s("a",{attrs:{href:"http://comment.mrhope.site/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@mr-hope/vuepress-plugin-comment 文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("可以直接设置为 "),s("code",[t._v("false")]),t._v(" 来禁用评论功能")]),t._v(" "),s("h2",{attrs:{id:"pwa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwa"}},[t._v("#")]),t._v(" PWA")]),t._v(" "),s("p",[t._v("PWA 设置选项")]),t._v(" "),s("h2",{attrs:{id:"加密设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密设置"}},[t._v("#")]),t._v(" 加密设置")]),t._v(" "),s("p",[t._v("加密设置选项")]),t._v(" "),s("h3",{attrs:{id:"encrypt-global"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-global"}},[t._v("#")]),t._v(" encrypt.global")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string | string[]")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("最高权限密码，可以以数组的形式设置多个")]),t._v(" "),s("h3",{attrs:{id:"encrypt-globalencrypt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-globalencrypt"}},[t._v("#")]),t._v(" encrypt.globalEncrypt")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("是否全局加密")]),t._v(" "),s("h3",{attrs:{id:"encrypt-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-config"}},[t._v("#")]),t._v(" encrypt.config")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("Record<string, string | string[]>")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("例子")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这会加密整个 guide 目录，并且两个密码都是可用的")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guide/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这只会加密 api/page.html")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/page.html"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"博客配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#博客配置"}},[t._v("#")]),t._v(" 博客配置")]),t._v(" "),s("p",[t._v("博客配置。可以直接设置 "),s("code",[t._v("blog: false")]),t._v(" 来禁用相关功能。")]),t._v(" "),s("h3",{attrs:{id:"blog-blogger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-blogger"}},[t._v("#")]),t._v(" blog.blogger")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("博主姓名，默认为 "),s("code",[t._v("themeConfig.author")])]),t._v(" "),s("h3",{attrs:{id:"blog-avatar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-avatar"}},[t._v("#")]),t._v(" blog.avatar")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("博主头像，默认为 "),s("code",[t._v("themeConfig.logo")])]),t._v(" "),s("h3",{attrs:{id:"blog-sidebardisplay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-sidebardisplay"}},[t._v("#")]),t._v(" blog.sidebarDisplay")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("'mobile' | 'none' | 'always'")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'none'")])])]),t._v(" "),s("p",[t._v("是否在侧边栏展示博主信息")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("mobile")]),t._v(": 在移动视图中显示在侧边栏中")]),t._v(" "),s("li",[s("code",[t._v("'always'")]),t._v(": 总是展示在侧边栏中")]),t._v(" "),s("li",[s("code",[t._v("'none'")]),t._v(": 永远不在侧边栏展示")])]),t._v(" "),s("h3",{attrs:{id:"blog-intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-intro"}},[t._v("#")]),t._v(" blog.intro")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("必填: 否")])]),t._v(" "),s("p",[t._v("博主的个人介绍地址。")]),t._v(" "),s("p",[t._v("填写后将允许点击“博主信息”中的头像或姓名进入个人介绍页。")]),t._v(" "),s("h3",{attrs:{id:"blog-timeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blog-timeline"}},[t._v("#")]),t._v(" blog.timeline")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'昨日不在'")])])]),t._v(" "),s("p",[t._v("时间轴的顶部文字。")]),t._v(" "),s("h2",{attrs:{id:"其他配置选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置选项"}},[t._v("#")]),t._v(" 其他配置选项")]),t._v(" "),s("p",[t._v("以下是主题提供的其他配置选项，一般情况下您无需改动他们，但是主题也向你提供了更多有关主题的配置项。")]),t._v(" "),s("h3",{attrs:{id:"iconprefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iconprefix"}},[t._v("#")]),t._v(" iconPrefix")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("'icon-'")])])]),t._v(" "),s("p",[t._v("设置 iconfont 的图标前缀")]),t._v(" "),s("h3",{attrs:{id:"sidebaricon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebaricon"}},[t._v("#")]),t._v(" sidebarIcon")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否在侧边栏显示图标")]),t._v(" "),s("h3",{attrs:{id:"breadcrumb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb"}},[t._v("#")]),t._v(" breadcrumb")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否全局启用路径导航")]),t._v(" "),s("h3",{attrs:{id:"breadcrumbicon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbicon"}},[t._v("#")]),t._v(" breadcrumbIcon")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否在路径导航显示图标")]),t._v(" "),s("h3",{attrs:{id:"smoothscroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smoothscroll"}},[t._v("#")]),t._v(" smoothScroll "),s("MyBadge",{attrs:{text:"改变默认值",type:"error"}})],1),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否启用平滑滚动功能")]),t._v(" "),s("h3",{attrs:{id:"backtotop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backtotop"}},[t._v("#")]),t._v(" backToTop")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean | Number")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("返回顶部按钮的配置。默认的触发距离为 300px，填入数字时可改变这一触发距离。填入 "),s("code",[t._v("false")]),t._v(" 会禁用返回顶部按钮。")]),t._v(" "),s("h3",{attrs:{id:"repodisplay"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repodisplay"}},[t._v("#")]),t._v(" repoDisplay")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否在导航栏显示仓库链接")]),t._v(" "),s("h3",{attrs:{id:"fullscreen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fullscreen"}},[t._v("#")]),t._v(" fullscreen")]),t._v(" "),s("ul",[s("li",[t._v("类型: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否显示 ”全屏“ 按钮")])])}),[],!1,null,null,null);a.default=r.exports},563:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用主题"}},[t._v("#")]),t._v(" 使用主题")]),t._v(" "),s("p",[t._v("使用一个主题和使用一个插件的方式几乎一致。")]),t._v(" "),s("h3",{attrs:{id:"使用来自依赖的主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用来自依赖的主题"}},[t._v("#")]),t._v(" 使用来自依赖的主题")]),t._v(" "),s("p",[t._v("一个主题可以在以 "),s("code",[t._v("vuepress-theme-xxx")]),t._v(" 的形式发布到 npm，你可以这样使用它：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-xx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"主题的缩写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题的缩写"}},[t._v("#")]),t._v(" 主题的缩写")]),t._v(" "),s("p",[t._v("如果你的主题名以 "),s("code",[t._v("vuepress-theme-")]),t._v(" 开头，你可以使用缩写来省略这个前缀：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("和下面等价：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-xxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("这也适用于 "),s("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scoped Packages"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@org/vuepress-theme-xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者一个官方主题: '@vuepress/theme-xxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("缩写:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@org/xxx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者一个官方主题: '@vuepress/xxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("以 "),s("code",[t._v("@vuepress/theme-")]),t._v(" 开头的主题是官方维护的主题。")])]),t._v(" "),s("h2",{attrs:{id:"开发主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发主题"}},[t._v("#")]),t._v(" 开发主题")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("此部分只面向熟练掌握 Vue 相关库的人，如果您对 Vue 不熟悉，则无需阅读此章节。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/basic/vuepress/theme/dev.html"}},[t._v("点击前往")])],1)]),t._v(" "),s("h2",{attrs:{id:"优秀第三方主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优秀第三方主题"}},[t._v("#")]),t._v(" 优秀第三方主题")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);