(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(t){t.exports=JSON.parse('[{"id":"alejandro-oviedo","image":"alejandro-oviedo","name":"Alejandro Oviedo","job":"Software Engineer @ nodeconf","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia nulla augue, et porttitor lectus accumsan nec. Mauris vel varius massa, id iaculis felis. Donec vitae tincidunt massa. Nullam nisi lectus,","title":"Talk title a bit long to see","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia nulla augue, et porttitor lectus accumsan nec. Mauris vel varius massa, id iaculis felis. Donec vitae tincidunt massa. Nullam nisi lectus, ornare a gravida quis, vulputate et sapien. Donec odio sapien, eleifend in cursus blandit, placerat in libero. Ut a tempor turpis, hendrerit volutpat leo. Quisque eget est a lacus malesuada ornare quis et justo. Morbi suscipit nunc et imperdiet efficitur. Ut nulla nisl, ornare eu est in, ultrices gravida orci. In laoreet dui vitae diam sodales","ogImage":"anjana-meta"},{"id":"cintia-gonzalez","image":"pecas","name":"Cintia Gonzalez","job":"UI Developer @ nodeconf","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia nulla augue, et porttitor lectus accumsan nec. Mauris vel varius massa, id iaculis felis. Donec vitae tincidunt massa. Nullam nisi lectus,","title":"","description":"","ogImage":"anjana-meta"}]')},164:function(t,e,n){"use strict";var o=n(6),r=n(165)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),o(o.P+o.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(72)("find")},165:function(t,e,n){var o=n(27),r=n(71),c=n(28),l=n(19),d=n(166);t.exports=function(t,e){var n=1==t,m=2==t,v=3==t,f=4==t,h=6==t,_=5==t||h,w=e||d;return function(e,d,C){for(var j,y,M=c(e),x=r(M),I=o(d,C,3),A=l(x.length),D=0,k=n?w(e,A):m?w(e,0):void 0;A>D;D++)if((_||D in x)&&(y=I(j=x[D],D,M),t))if(n)k[D]=y;else if(y)switch(t){case 3:return!0;case 5:return j;case 6:return D;case 2:k.push(j)}else if(f)return!1;return h?-1:v||f?f:k}}},166:function(t,e,n){var o=n(167);t.exports=function(t,e){return new(o(t))(e)}},167:function(t,e,n){var o=n(9),r=n(99),c=n(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},173:function(t,e,n){"use strict";n.r(e);n(56),n(164);var o=n(156),r={data:function(){return{id:this.$route.params.id,posts:o}},computed:{post:function(){var t=this;return this.posts.find((function(e){return e.id===t.id}))}},head:function(){var t=this.post;return{title:t.name,meta:[{hid:"description",name:"description",content:t.bio},{property:"og:image",content:"https://2020.nodeconfar.com/profiles/".concat(t.ogImage,".png")},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t.name},{name:"twitter:description",content:t.bio},{name:"twitter:image",content:"https://2020.nodeconfar.com/profiles/".concat(t.ogImage,".png")}]}}},c=n(12),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container center pt6 vh-100"},[n("div",{staticClass:"flex ph5-l ph3"},[n("div",{staticClass:"w-40-l w-100"},[n("p",{staticClass:"mv0"},[n("img",{staticClass:"v-mid",attrs:{src:"/profiles/"+t.post.image+".jpg",alt:t.post.name}})])]),t._v(" "),n("div",{staticClass:"w-60-l w-100 pt3 pb0-l pb6"},[n("p",{staticClass:"ttu f5-l f6 ma0"},[t._v(t._s(t.post.job))]),t._v(" "),n("h2",{staticClass:"green-node f1-l f3 mt0 mb2"},[t._v(t._s(t.post.name))]),t._v(" "),n("p",{staticClass:"lh-copy"},[t._v("\n        "+t._s(t.post.bio)+"\n      ")]),t._v(" "),t.post.title?n("div",{staticClass:"mt4"},[n("p",{staticClass:"f6 ttu mv0"},[t._v("details about the talk")]),t._v(" "),n("h4",{staticClass:"f3-l green-node f4 mv2"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",{staticClass:"f6 lh-copy mv0"},[t._v(t._s(t.post.description))])]):t._e()])])])])}),[],!1,null,"6e8cdf28",null);e.default=component.exports}}]);