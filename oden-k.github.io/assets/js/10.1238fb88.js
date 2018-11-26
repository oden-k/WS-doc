(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"list-of-helper-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-helper-functions","aria-hidden":"true"}},[t._v("#")]),t._v(" List of helper functions")]),a("h3",{attrs:{id:"convert-date-to-human-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convert-date-to-human-format","aria-hidden":"true"}},[t._v("#")]),t._v(" Convert date to human format")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("formatDate")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dts "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" date "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dts"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tyear "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'numeric'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tmonth "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'short'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tday "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'numeric'")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" date"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLocaleDateString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'fr-FR'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"convert-seconds-to-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convert-seconds-to-template","aria-hidden":"true"}},[t._v("#")]),t._v(" Convert seconds to template")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("secondsToTime")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("format"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sc_num "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hours "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc_num "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("3600")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" minutes "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc_num "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" hours"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token number"}},[t._v("3600")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" seconds "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" sc_num "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" hours"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token number"}},[t._v("3600")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minutes"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\thours "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  hours "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0'")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("hours "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hours\n\tminutes "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  minutes "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0'")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" minutes "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" minutes\n\tseconds "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  seconds "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'0'")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" seconds "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" seconds\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("format"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'HH:MM'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hours"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("H ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("minutes"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("M`")])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'MMSS'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("minutes"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(":")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("seconds"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"find-and-delete-in-an-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-and-delete-in-an-array","aria-hidden":"true"}},[t._v("#")]),t._v(" Find and delete in an array")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("findAndDelete")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tarr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" item\n\t\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("splice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-informations-of-a-podcast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-informations-of-a-podcast","aria-hidden":"true"}},[t._v("#")]),t._v(" Get informations of a podcast")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*\n * @return totalDuration fromated\n * @return totalLikes \n * @return createdAt fromated\n * @return firstEpisode mp3 href\n*/")]),t._v("\n")])])]),a("h3",{attrs:{id:"get-informations-of-an-episode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-informations-of-an-episode","aria-hidden":"true"}},[t._v("#")]),t._v(" Get informations of an episode")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*\n * @return duration fromated\n * @return likes \n * @return createdAt fromated\n * @return mp3 href\n*/")]),t._v("\n")])])])])}],!1,null,null,null);s.default=o.exports}}]);