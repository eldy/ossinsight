"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8319],{85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},t)}},65130:(e,t,r)=>{r.d(t,{b:()=>s,k:()=>l});var n=r(67294),a=r(902);const o=n.createContext(null);function s(e){let{children:t,content:r}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return n.createElement(o.Provider,{value:a},t)}function l(){const e=(0,n.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}},14353:(e,t,r)=>{r.d(t,{D:()=>l,f:()=>c});var n=r(67294),a=r(902);const o=Symbol("EmptyContext"),s=n.createContext(o);function l(e){let{children:t}=e;const[r,a]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:r,setExpandedItem:a})),[r]);return n.createElement(s.Provider,{value:o},t)}function c(){const e=(0,n.useContext)(s);if(e===o)throw new a.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,r)=>{r.d(t,{a:()=>s});var n=r(67294),a=r(12466),o=r(85936);function s(e){let{threshold:t}=e;const[r,s]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:c,cancelScroll:i}=(0,a.Ct)();return(0,a.RF)(((e,r)=>{let{scrollY:n}=e;const a=null==r?void 0:r.scrollY;a&&(l.current?l.current=!1:n>=a?(i(),s(!1)):n<t?s(!1):n+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,o.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:r,scrollToTop:()=>c(0)}}},96841:(e,t,r)=>{r.d(t,{S:()=>c});var n=r(67294),a=r(86668);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function s(e,t){let{anchorTopOffset:r}=t;const n=e.find((e=>o(e).top>=r));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function l(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,n.useRef)(void 0),r=l();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:r}=e;const n=[];for(let a=t;a<=r;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=s(c,{anchorTopOffset:r.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,r])}},23477:(e,t,r)=>{r.r(t),r.d(t,{AnnouncementBarProvider:()=>w.pl,BlogPostProvider:()=>y.n,Collapsible:()=>c.z,ColorModeProvider:()=>m.S,DEFAULT_SEARCH_TAG:()=>o.HX,DocProvider:()=>P.b,DocSidebarItemsExpandedStateProvider:()=>T.D,DocsPreferredVersionContextProvider:()=>S.L5,DocsSidebarProvider:()=>L.b,DocsVersionProvider:()=>E.q,HtmlClassNameProvider:()=>d.FG,NavbarProvider:()=>O.V,NavbarSecondaryMenuFiller:()=>v.Zo,PageMetadata:()=>d.d,PluginHtmlClassNameProvider:()=>d.VC,ReactContextError:()=>u.i6,ScrollControllerProvider:()=>_.OC,TabGroupChoiceProvider:()=>k.z,ThemeClassNames:()=>i.k,composeProviders:()=>u.Qc,containsLineNumbers:()=>H.nt,createStorageSlot:()=>a.W,docVersionSearchTag:()=>o.os,duplicates:()=>g.l,filterDocCardListItems:()=>s.MN,findFirstCategoryLink:()=>s.Wl,findSidebarCategory:()=>s.em,getPrismCssVariables:()=>H.QC,isActiveSidebarItem:()=>s._F,isDocsPluginEnabled:()=>s.cE,isMultiColumnFooterLinks:()=>b.a,isRegexpStringMatch:()=>p.F,isSamePath:()=>B.Mg,keyboardFocusedClassName:()=>Z.h,listStorageKeys:()=>a._,listTagsByLetters:()=>h.P,parseCodeBlockTitle:()=>H.bc,parseLanguage:()=>H.Vo,parseLines:()=>H.nZ,splitNavbarItems:()=>O.A,translateTagsPageTitle:()=>h.M,uniq:()=>g.j,useAlternatePageUtils:()=>D.l,useAnnouncementBar:()=>w.nT,useBackToTopButton:()=>X.a,useBlogPost:()=>y.C,useCodeWordWrap:()=>Y.F,useCollapsible:()=>c.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>o._q,useCurrentSidebarCategory:()=>s.jA,useDoc:()=>P.k,useDocById:()=>s.xz,useDocRouteMetadata:()=>s.hI,useDocSidebarItemsExpandedState:()=>T.f,useDocsPreferredVersion:()=>S.J,useDocsPreferredVersionByPluginId:()=>S.Oh,useDocsSidebar:()=>L.V,useDocsVersion:()=>E.E,useDocsVersionCandidates:()=>s.lO,useEvent:()=>u.zX,useFilteredAndTreeifiedTOC:()=>V.b,useHideableNavbar:()=>z.c,useHistoryPopHandler:()=>M.R,useHomePageRoute:()=>B.Ns,useIsomorphicLayoutEffect:()=>u.LI,useKeyboardNavigation:()=>Z.t,useLayoutDoc:()=>s.vY,useLayoutDocsSidebar:()=>s.oz,useLocalPathname:()=>A.b,useLocationChange:()=>R.S,useLockBodyScroll:()=>G.N,useNavbarMobileSidebar:()=>N.e,useNavbarSecondaryMenu:()=>x.Y,usePluralForm:()=>l.c,usePrevious:()=>u.D9,usePrismTheme:()=>C.p,useScrollController:()=>_.sG,useScrollPosition:()=>_.RF,useScrollPositionBlocker:()=>_.o5,useSearchPage:()=>$,useSidebarBreadcrumbs:()=>s.s1,useSkipToContent:()=>Q.a,useSmoothScrollTo:()=>_.Ct,useTOCHighlight:()=>F.S,useTabGroupChoice:()=>k.U,useThemeConfig:()=>n.L,useTitleFormatter:()=>I.p,useTreeifiedTOC:()=>V.a,useWindowSize:()=>f.i});var n=r(86668),a=r(50012),o=r(43320),s=r(53438),l=r(88824),c=r(86043),i=r(35281),u=r(902),d=r(10833),m=r(92949),v=r(13102),f=r(87524),h=r(35155),b=r(42489),p=r(98022),g=r(67392),C=r(66412),S=r(60373),T=r(14353),E=r(74477),L=r(1116),P=r(65130),y=r(9460),w=r(59689),k=r(7094),N=r(93163),x=r(76857),D=r(94711),H=r(37016),I=r(82128),R=r(85936),A=r(51753),M=r(91980),V=r(39665),_=r(12466),B=r(48596),O=r(58978),F=r(96841),z=r(99445),Z=r(19727),G=r(69800),U=r(67294),q=r(16550),W=r(52263);const j="q";function $(){const e=(0,q.k6)(),{siteConfig:{baseUrl:t}}=(0,W.Z)(),[r,n]=(0,U.useState)("");(0,U.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get(j)??"";n(e)}),[]);return{searchQuery:r,setSearchQuery:(0,U.useCallback)((t=>{const r=new URLSearchParams(window.location.search);t?r.set(j,t):r.delete(j),e.replace({search:r.toString()}),n(t)}),[e]),generateSearchPageLink:(0,U.useCallback)((e=>`${t}search?q=${encodeURIComponent(e)}`),[t])}}var Y=r(85448),Q=r(68721),X=r(2730)},35155:(e,t,r)=>{r.d(t,{M:()=>a,P:()=>o});var n=r(95999);const a=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function o(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[n]=t;return r.localeCompare(n)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},39665:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>l});var n=r(67294);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:r,...a}=e;r>=0?t[r].children.push(a):n.push(a)})),n}function o(e){return(0,n.useMemo)((()=>a(e)),[e])}function s(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[{...e,children:t}]:t}))}function l(e){let{toc:t,minHeadingLevel:r,maxHeadingLevel:o}=e;return(0,n.useMemo)((()=>s({toc:a(t),minHeadingLevel:r,maxHeadingLevel:o})),[t,r,o])}},63303:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(87462),a=r(67294),o=r(67392),s=r(72389),l=r(86010);const c="tabItem_es3Q",i="schemaTabActive_dWHR",u="schemaTabsTopSection_sc6Y",d="schemaTabsListContainer_wmy4",m="schemaTabLabel_clV0",v="schemaTabsContainer_HVyG",f="tabArrow_zmvw",h="tabArrowLeft_RzDG",b="tabArrowRight_X4Xu",p="marginVertical_VWja",{useScrollPositionBlocker:g,useTabGroupChoice:C}=r(23477);function S(e){var t,r;const{lazy:s,block:S,defaultValue:T,values:E,groupId:L,className:P}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=E??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),k=(0,o.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===T?T:T??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=y[0])?void 0:r.props.value);if(null!==N&&!w.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:D}=C(),[H,I]=(0,a.useState)(N),R=[],{blockElementScrollPositionUntilNextRender:A}=g();if(null!=L){const e=x[L];null!=e&&e!==H&&w.some((t=>t.value===e))&&I(e)}const M=e=>{const t=e.currentTarget,r=R.indexOf(t),n=w[r].value;n!==H&&(A(t),I(n),null!=L&&D(L,n))},V=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;r=R[t]||R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;r=R[t]||R[R.length-1];break}}null==(t=r)||t.focus()},_=(0,a.useRef)(null),[B,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?O(!0):O(!1)}));return e.observe(_.current),()=>{e.disconnect()}}),[]);return a.createElement("div",{className:"tabs__container"},a.createElement("div",{className:u},a.createElement("div",{className:v},B&&a.createElement("button",{className:(0,l.Z)(f,h),onClick:()=>{_.current.scrollLeft-=90}}),a.createElement("div",{ref:_,role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)(d,"tabs",{"tabs--block":S},P)},w.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("div",(0,n.Z)({role:"tab",tabIndex:H===t?0:-1,"aria-selected":H===t,key:t,ref:e=>R.push(e),onKeyDown:V,onFocus:M,onClick:M},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{[i]:H===t})}),a.createElement("span",{className:m},r??t))}))),B&&a.createElement("button",{className:(0,l.Z)(f,b),onClick:()=>{_.current.scrollLeft+=90}}))),a.createElement("hr",null),s?(0,a.cloneElement)(y.filter((e=>e.props.value===H))[0]??y.filter((e=>e.props.value===N))[0],{className:p}):a.createElement("div",{className:p},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==H})))))}function T(e){const t=(0,s.Z)();return a.createElement(S,(0,n.Z)({key:String(t)},e))}}}]);