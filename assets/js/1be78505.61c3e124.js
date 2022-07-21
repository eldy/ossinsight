"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9514,4204],{50122:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(63366),o=n(87462),r=n(67294),l=n(86010),i=n(94780),c=n(54844),s=n(41796),u=n(98216),d=n(90948),m=n(71657),p=n(18791),b=n(51705),h=n(46483),f=n(34867);function v(e){return(0,f.Z)("MuiLink",e)}var g=(0,n(1588).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),E=n(85893);const Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=(0,d.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,u.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>{const n=(0,c.D)(e,`palette.${(e=>k[e]||e)(t.color)}`)||t.color;return(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?(0,s.Fq)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})}));var C=r.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiLink"}),{className:c,color:s="primary",component:d="a",onBlur:h,onFocus:f,TypographyClasses:g,underline:C="always",variant:_="inherit",sx:N}=n,S=(0,a.Z)(n,Z),{isFocusVisibleRef:T,onBlur:I,onFocus:x,ref:A}=(0,p.Z)(),[M,B]=r.useState(!1),w=(0,b.Z)(t,A),L=(0,o.Z)({},n,{color:s,component:d,focusVisible:M,underline:C,variant:_}),D=(e=>{const{classes:t,component:n,focusVisible:a,underline:o}=e,r={root:["root",`underline${(0,u.Z)(o)}`,"button"===n&&"button",a&&"focusVisible"]};return(0,i.Z)(r,v,t)})(L);return(0,E.jsx)(y,(0,o.Z)({color:s,className:(0,l.Z)(D.root,c),classes:g,component:d,onBlur:e=>{I(e),!1===T.current&&B(!1),h&&h(e)},onFocus:e=>{x(e),!0===T.current&&B(!0),f&&f(e)},ref:w,ownerState:L,variant:_,sx:[...Object.keys(k).includes(s)?[]:[{color:s}],...Array.isArray(N)?N:[N]]},S))}))},52701:function(e,t,n){n.d(t,{O:function(){return E}});var a=n(87462),o=n(63366),r=n(67294),l=n(86010),i=n(53810),c=n(33692),s=n(13919),u=n(95999),d=n(90541),m="menuLinkText_OKON",p="hasHref_TwRn",b=n(72389),h=["items"],f=["item"],v=["item","onItemClick","activePath","level"],g=["item","onItemClick","activePath","level"],E=(0,r.memo)((function(e){var t=e.items,n=(0,o.Z)(e,h);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(Z,(0,a.Z)({key:t,item:e},n))})))}));function Z(e){var t=e.item,n=(0,o.Z)(e,f);return"category"===t.type?0===t.items.length?null:r.createElement(k,(0,a.Z)({item:t},n)):r.createElement(y,(0,a.Z)({item:t},n))}function k(e){var t,n=e.item,s=e.onItemClick,d=e.activePath,h=e.level,f=(0,o.Z)(e,v),g=n.items,Z=n.label,k=n.collapsible,y=n.className,C=n.href,_=function(e){var t=(0,b.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),N=(0,i._F)(n,d),S=(0,i.uR)({initialState:function(){return!!k&&(!N&&n.collapsed)}}),T=S.collapsed,I=S.setCollapsed,x=S.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:N,collapsed:T,setCollapsed:I}),r.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(h),"menu__list-item",{"menu__list-item--collapsed":T},y)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(c.Z,(0,a.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":k&&!C,"menu__link--active":N},t[m]=!k,t[p]=!!_,t)),onClick:k?function(e){null==s||s(n),C?I(!1):(e.preventDefault(),x())}:function(){null==s||s(n)},href:k?null!=_?_:"#":_},f),Z),C&&k&&r.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:Z}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),x()}})),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},r.createElement(E,{items:g,tabIndex:T?-1:0,onItemClick:s,activePath:d,level:h+1})))}function y(e){var t=e.item,n=e.onItemClick,u=e.activePath,m=e.level,p=(0,o.Z)(e,g),b=t.href,h=t.label,f=t.className,v=(0,i._F)(t,u);return r.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(m),"menu__list-item",f),key:h},r.createElement(c.Z,(0,a.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:b},(0,s.Z)(b)&&{onClick:n?function(){return n(t)}:void 0},p),(0,s.Z)(b)?h:r.createElement("span",null,h,r.createElement(d.Z,null))))}},34096:function(e,t,n){var a=n(87462),o=n(67294);t.Z=function(e){return o.createElement("svg",(0,a.Z)({width:"20",height:"20","aria-hidden":"true"},e),o.createElement("g",{fill:"#7a7a7a"},o.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},20819:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),o=n(67294),r=n(86010),l=n(23746),i=n(95999),c=n(53810),s=n(83229),u="codeBlockContainer_EiTO",d="codeBlockContent_X2I6",m="codeBlockTitle_PQMO",p="codeBlock_UxnK",b="copyButton_V-PD",h="codeBlockLines_W6UD";function f(e){var t,n=e.children,f=e.className,v=e.metastring,g=e.title,E=(0,c.LU)().prism,Z=(0,o.useState)(!1),k=Z[0],y=Z[1],C=(0,o.useState)(!1),_=C[0],N=C[1];(0,o.useEffect)((function(){N(!0)}),[]);var S=(0,c.bc)(v)||g,T=(0,s.Z)(),I=Array.isArray(n)?n.join(""):n,x=null!=(t=(0,c.Vo)(f))?t:E.defaultLanguage,A=(0,c.nZ)(I,v,x),M=A.highlightLines,B=A.code,w=function(){navigator.clipboard.writeText(B).then((function(){y(!0)})).catch((function(e){console.error("failed to copy",e)})).finally((function(){setTimeout((function(){return y(!1)}),2e3)}))};return o.createElement(l.ZP,(0,a.Z)({},l.lG,{key:String(_),theme:T,code:B,language:x}),(function(e){var t=e.className,n=e.style,l=e.tokens,s=e.getLineProps,v=e.getTokenProps;return o.createElement("div",{className:(0,r.Z)(u,f,c.kM.common.codeBlock)},S&&o.createElement("div",{style:n,className:m},S),o.createElement("div",{className:(0,r.Z)(d,x)},o.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,p,"thin-scrollbar"),style:n},o.createElement("code",{className:h},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return M.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,a.Z)({key:t},n),e.map((function(e,t){return o.createElement("span",(0,a.Z)({key:t},v({token:e,key:t})))})),o.createElement("br",null))})))),o.createElement("button",{type:"button","aria-label":(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),disabled:!I,className:(0,r.Z)(b,"clean-btn"),onClick:w},k?o.createElement(i.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(i.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},91530:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(67294),o=n(3905),r=n(46291),l=n(10059),i=n(72016),c=n(73491),s=n(84204),u=n(34096),d=n(86010),m=n(95999),p="backToTopButton_i9tI",b="backToTopButtonShow_wCmF",h=n(53810);function f(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var v=function(){var e,t=(0,a.useState)(!1),n=t[0],o=t[1],r=(0,a.useRef)(!1),l=f(),i=l.smoothScrollTop,c=l.cancelScrollToTop;return(0,h.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(r.current)r.current=!1;else{var l=n<a;if(l||c(),n<300)o(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&o(!0)}else o(!1)}})),(0,h.SL)((function(e){e.location.hash&&(r.current=!0,o(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,d.Z)("clean-btn",h.kM.common.backToTopButton,p,(e={},e[b]=n,e)),type:"button",onClick:function(){return i()}})},g=n(76775),E={docPage:"docPage_GMj9",docMainContainer:"docMainContainer_Q970",docSidebarContainer:"docSidebarContainer_k0Pq",docMainContainerEnhanced:"docMainContainerEnhanced_ipQ4",docSidebarContainerHidden:"docSidebarContainerHidden_05py",collapsedDocSidebar:"collapsedDocSidebar_3Col",expandSidebarButtonIcon:"expandSidebarButtonIcon_Dhhx",docItemWrapperEnhanced:"docItemWrapperEnhanced_JuqB"},Z=n(12859);function k(e){var t,n,r,s=e.currentDocRoute,p=e.versionMetadata,b=e.children,f=e.sidebarName,g=(0,h.Vq)(),Z=p.pluginId,k=p.version,y=(0,a.useState)(!1),C=y[0],_=y[1],N=(0,a.useState)(!1),S=N[0],T=N[1],I=(0,a.useCallback)((function(){S&&T(!1),_((function(e){return!e}))}),[S]);return a.createElement(l.Z,{wrapperClassName:h.kM.wrapper.docsPages,pageClassName:h.kM.page.docsDocPage,searchMetadata:{version:k,tag:(0,h.os)(Z,k)}},a.createElement("div",{className:E.docPage},a.createElement(v,null),g&&a.createElement("aside",{className:(0,d.Z)(E.docSidebarContainer,(t={},t[E.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(E.docSidebarContainer)&&C&&T(!0)}},a.createElement(i.Z,{key:f,sidebar:g,path:s.path,onCollapse:I,isHidden:S}),S&&a.createElement("div",{className:E.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},a.createElement(u.Z,{className:E.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(E.docMainContainer,(n={},n[E.docMainContainerEnhanced]=C||!g,n))},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",E.docItemWrapper,(r={},r[E.docItemWrapperEnhanced]=C,r))},a.createElement(o.Zo,{components:c.Z},b)))))}var y=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,l=t.find((function(e){return(0,g.LX)(o.pathname,e)}));if(!l)return a.createElement(s.default,null);var i=l.sidebar,c=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(Z.Z,null,a.createElement("html",{className:n.className})),a.createElement(h.qu,{version:n},a.createElement(h.bT,{sidebar:c},a.createElement(k,{currentDocRoute:l,versionMetadata:n,sidebarName:i},(0,r.Z)(t,{versionMetadata:n})))))}},72016:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(67294),o=n(86010),r=n(53810),l=n(93783),i=n(55537),c=n(34096),s=n(95999),u=n(52701),d="sidebar_LIo8",m="sidebarWithFooter_OqJz",p="sidebarFooter_kdaq",b="sidebarWithHideableNavbar_CMI-",h="sidebarHidden_4BoQ",f="sidebarLogo_P87M",v="menu_oAhv",g="menuWithAnnouncementBar_IVfW",E="collapseSidebarButton_EBxv",Z="collapseSidebarButtonIcon_AF9Q";function k(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",E),onClick:t},a.createElement(c.Z,{className:Z}))}function y(e){var t,n,l=e.path,c=e.sidebar,s=e.onCollapse,E=e.isHidden,Z=e.Footer,y=function(){var e=(0,r.nT)().isActive,t=(0,a.useState)(e),n=t[0],o=t[1];return(0,r.RF)((function(t){var n=t.scrollY;e&&o(0===n)}),[e]),e&&n}(),C=(0,r.LU)(),_=C.navbar.hideOnScroll,N=C.hideableSidebar;return a.createElement("div",{className:(0,o.Z)(d,(t={},t[b]=_,t[h]=E,t))},_&&a.createElement(i.Z,{tabIndex:-1,className:f}),a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",v,(n={},n[g]=y,n))},a.createElement("ul",{className:(0,o.Z)(r.kM.docs.docSidebarMenu,"menu__list",Z?m:void 0)},a.createElement(u.O,{items:c,activePath:l,level:1}),Z&&a.createElement("li",{className:p},a.createElement(Z,null)))),N&&a.createElement(k,{onClick:s}))}var C=function(e){var t=e.toggleSidebar,n=e.sidebar,l=e.path,i=e.Footer;return a.createElement("ul",{className:(0,o.Z)(r.kM.docs.docSidebarMenu,"menu__list")},a.createElement(u.O,{items:n,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}),i&&a.createElement("li",null,a.createElement(i,null)))};function _(e){return a.createElement(r.Cv,{component:C,props:e})}var N=a.memo(y),S=a.memo(_);function T(e){var t=(0,l.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(N,e),o&&a.createElement(S,e))}},84204:function(e,t,n){n.r(t);var a=n(67294),o=n(10059),r=n(95999),l=n(76775),i=n(98456),c=n(46483),s=n(83321),u=n(50122);t.default=function(){var e=(0,l.k6)(),t=(0,a.useState)(!1),n=t[0],d=t[1];return(0,a.useEffect)((function(){var t,n,a=window.location,o=a.pathname,r=a.search,l=a.hash;r=null==(t=r)?void 0:t.replace(/^\?/,""),l=null==(n=l)?void 0:n.replace(/^#/,"");var i=o.split("/"),c=i[0],s=i.slice(1);if("analyze"===c){if(s.length>=1&&s.length<=2)return void e.replace({pathname:o,search:r,hash:l});if(0===s.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:r,hash:l})}d(!0)}),[]),a.createElement(o.Z,{title:n?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"},n?a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Oooooops! You have found a magical place \u26f0\ufe0f.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We can not lead you to this URL.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"How about going to analyze a developer / repository ? And I guess you will find something interesting in Collections as well !")),a.createElement(s.Z,{sx:{fontSize:16,fontWeight:"bold",verticalAlign:"baseline",textDecoration:"underline",marginTop:6},component:u.Z,href:"/"},"\ud83e\uddd1\u200d\ud83d\udcbb get insights with developers"),a.createElement(s.Z,{sx:{fontSize:16,fontWeight:"bold",verticalAlign:"baseline",textDecoration:"underline",marginTop:2},component:u.Z,href:"/"},"\ud83d\udd0d  get insights with repositories"),a.createElement(s.Z,{sx:{fontSize:16,fontWeight:"bold",verticalAlign:"baseline",textDecoration:"underline",marginTop:2},component:u.Z,href:"/collections/open-source-database"},"\ud83d\udd25 get insights with collections")))):a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(c.Z,{variant:"body1",fontSize:24},"Loading... \xa0",a.createElement(i.Z,{display:"inline-block",size:24}))))))}}}]);