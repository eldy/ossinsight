/*! For license information please see 9470.7ce31ca6.js.LICENSE.txt */
(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9470],{39058:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(67294),o=r(86010),a=r(5018),i=r(87524),l=r(39960),c=r(95999);const s="sidebar_re4s",u="sidebarItemTitle_pO2u",m="sidebarItemList_Yudw",d="sidebarItem__DBe",p="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function f(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,o.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,o.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,o.Z)(m,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:h},e.title)))))))}var w=r(13102);function g(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(w.Zo,{component:g,props:e})}function v(e){let{sidebar:t}=e;const r=(0,i.i)();return null!=t&&t.items.length?"mobile"===r?n.createElement(b,{sidebar:t}):n.createElement(f,{sidebar:t}):null}function y(e){const{sidebar:t,toc:r,children:i,...l}=e,c=t&&t.items.length>0;return n.createElement(a.Z,l,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,o.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),r&&n.createElement("div",{className:"col col--2"},r))))}},15289:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(67294),o=r(44996),a=r(9460);function i(e){let{children:t,className:r}=e;const{frontMatter:i,assets:l}=(0,a.C)(),{withBaseUrl:c}=(0,o.C)(),s=l.image??i.image;return n.createElement("article",{className:r,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&n.createElement("meta",{itemProp:"image",content:c(s,{absolute:!0})}),t)}},99714:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294),o=r(86010),a=r(18780),i=r(9460),l=r(53470);function c(e){let{children:t,className:r}=e;const{isBlogPostPage:c}=(0,i.C)();return n.createElement("div",{id:c?a.blogPostContainerID:void 0,className:(0,o.Z)("markdown",r),itemProp:"articleBody"},n.createElement(l.Z,null,t))}},12046:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),a=r(9460),i=r(84881),l=r(71526),c=r(87462),s=r(95999),u=r(39960);function m(){return n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...r}=e;return n.createElement(u.Z,(0,c.Z)({"aria-label":(0,s.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(m,null))}const p="blogPostFooterDetailsFull_mRVl";function h(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:r,title:c,editUrl:s,hasTruncateMarker:u}=e,m=!t&&u,h=r.length>0;return h||m||s?n.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",t&&p)},h&&n.createElement("div",{className:(0,o.Z)("col",{"col--9":m})},n.createElement(l.Z,{tags:r})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(i.Z,{editUrl:s})),m&&n.createElement("div",{className:(0,o.Z)("col text--right",{"col--3":h})},n.createElement(d,{blogPostTitle:c,to:e.permalink}))):null}},79224:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var n=r(67294),o=r(86010),a=r(39960),i=r(9460);const l="title_f1Hy";function c(e){let{className:t}=e;const{metadata:r,isBlogPostPage:c}=(0,i.C)(),{permalink:s,title:u}=r,m=c?"h1":"h2";return n.createElement(m,{className:(0,o.Z)(l,t),itemProp:"headline"},c?u:n.createElement(a.Z,{itemProp:"url",to:s},u))}var s=r(95999),u=r(88824);const m="container_mt6G";function d(e){let{readingTime:t}=e;const r=function(){const{selectMessage:e}=(0,u.c)();return t=>{const r=Math.ceil(t);return e(r,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return n.createElement(n.Fragment,null,r(t))}function p(e){let{date:t,formattedDate:r}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},r)}function h(){return n.createElement(n.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:r}=(0,i.C)(),{date:a,formattedDate:l,readingTime:c}=r;return n.createElement("div",{className:(0,o.Z)(m,"margin-vert--md",t)},n.createElement(p,{date:a,formattedDate:l}),void 0!==c&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement(d,{readingTime:c})))}function w(e){return e.href?n.createElement(a.Z,e):n.createElement(n.Fragment,null,e.children)}function g(e){let{author:t,className:r}=e;const{name:a,title:i,url:l,imageURL:c,email:s}=t,u=l||s&&`mailto:${s}`||void 0;return n.createElement("div",{className:(0,o.Z)("avatar margin-bottom--sm",r)},c&&n.createElement(w,{href:u,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:c,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(w,{href:u,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const b="authorCol_Hf19",v="imageOnlyAuthorRow_pa_O",y="imageOnlyAuthorCol_G86a";function E(e){let{className:t}=e;const{metadata:{authors:r},assets:a}=(0,i.C)();if(0===r.length)return null;const l=r.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",l?v:"row",t)},r.map(((e,t)=>n.createElement("div",{className:(0,o.Z)(!l&&"col col--6",l?y:b),key:t},n.createElement(g,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function k(){return n.createElement("header",null,n.createElement(c,null),n.createElement(f,null),n.createElement(E,null))}},94184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},37332:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67267).Z)({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"})},53597:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(25456),o=r(86459);const a=(0,r(79075).Z)("linkedin",(function(e,t){var r=t.title,a=t.summary,i=t.source;return(0,n.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:e,mini:"true",title:r,summary:a,source:i})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600})},70431:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67267).Z)({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"})},75341:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(25456),o=r(86459);const a=(0,r(79075).Z)("reddit",(function(e,t){var r=t.title;return(0,n.Z)(e,"reddit.url"),"https://www.reddit.com/submit"+(0,o.Z)({url:e,title:r})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"})},44276:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67267).Z)({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"})},38168:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(25456),o=r(86459);const a=(0,r(79075).Z)("telegram",(function(e,t){var r=t.title;return(0,n.Z)(e,"telegram.url"),"https://telegram.me/share/url"+(0,o.Z)({url:e,text:r})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400})},87385:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(67267).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"})},46616:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(25456),o=r(86459);const a=(0,r(79075).Z)("twitter",(function(e,t){var r=t.title,a=t.via,i=t.hashtags,l=void 0===i?[]:i,c=t.related,s=void 0===c?[]:c;return(0,n.Z)(e,"twitter.url"),(0,n.Z)(Array.isArray(l),"twitter.hashtags is not an array"),(0,n.Z)(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:e,text:r,via:a,hashtags:l.length>0?l.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400})},67267:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(67294),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function i(e){var t=function(t){var r=t.bgStyle,i=t.borderRadius,l=t.iconFillColor,c=t.round,s=t.size,u=a(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return n.createElement("svg",o({viewBox:"0 0 64 64",width:s,height:s},u),c?n.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):n.createElement("rect",{width:"64",height:"64",rx:i,ry:i,fill:e.color,style:r}),n.createElement("path",{d:e.path,fill:l}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}},79075:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n,o=r(67294),a=r(94184),i=r.n(a),l=r(25108),c=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},u=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function l(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((n=n.apply(e,t||[])).next())}))},m=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},p=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},h=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},f=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function w(e,t,r){var n=t.height,o=t.width,a=d(t,["height","width"]),i=s({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return"".concat(e,"=").concat(i[e])})).join(", "));if(r)var u=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(u),r(c))}catch(e){l.error(e)}}),1e3);return c}const g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,l=void 0===i?"windowCenter":i,c=r.windowWidth,u=void 0===c?550:c;w(e,s({height:a,width:u},"windowCenter"===l?h(u,a):f(u,a)),n)},t.handleClick=function(e){return u(t,void 0,void 0,(function(){var t,r,n,o,a,i,l,c,s,u;return m(this,(function(m){switch(m.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(i,c),n?[2]:(e.preventDefault(),r?(u=r(),p(u)?[4,u]:[3,2]):[3,2]);case 1:m.sent(),m.label=2;case 2:return l&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return c(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,l=e.forwardedRef,c=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),m=e.style,p=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,d(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),f=s(s(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},m),n&&a);return o.createElement("button",s({},p,{"aria-label":p["aria-label"]||c,className:h,onClick:this.handleClick,ref:l,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component);var b=function(){return b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)};const v=function(e,t,r,n){function a(a,i){var l=r(a),c=b({},a);return Object.keys(l).forEach((function(e){delete c[e]})),o.createElement(g,b({},n,c,{forwardedRef:i,networkName:e,networkLink:t,opts:r(a)}))}return a.displayName="ShareButton-".concat(e),(0,o.forwardRef)(a)}},25456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n,o=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return o(t,e),t}(Error);function i(e,t){if(!e)throw new a(t)}},86459:(e,t,r)=>{"use strict";function n(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r)))}));return t.length>0?"?".concat(t.join("&")):""}r.d(t,{Z:()=>n})}}]);