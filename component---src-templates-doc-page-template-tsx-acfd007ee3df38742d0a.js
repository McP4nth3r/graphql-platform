(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4M6O":function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.insertScript=function(e,t,n){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=t,n.appendChild(i),i},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var i;return function(){var a=this,o=arguments,c=function(){i=null,n||e.apply(a,o)},r=n&&!i;window.clearTimeout(i),i=setTimeout(c,t),r&&e.apply(a,o)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var i,o=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(i=[]).concat.apply(i,(0,a.default)(o)).filter((function(i){if("object"==typeof t[i]){if(e(t[i],n[i]))return!0}else if(t[i]!==n[i]&&!c(t[i]))return!0})).length};var a=i(n("R7tm")),o=i(n("q1tI"));function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},AIgE:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return Ne}));var i=n("q1tI"),a=n.n(i),o=n("BBkP"),c=n("CMDK"),r=n("/MKj"),l=n("vOnD"),d=n("mcIw"),s=(n("wqoF"),n("Hf4c")),p=function(e){var t=e.data,n=Object(r.useDispatch)(),o=Object(i.useCallback)((function(){n(Object(d.b)())}),[]);return Object(i.useEffect)((function(){var e,n=t.tableOfContents.split(/"|\//).filter((function(e){return 0===e.indexOf("#")})).map((function(e){var t=e.substring(1);return{id:"toc-"+t,position:document.getElementById(t).offsetTop-60}})).reverse(),i=function(){for(var t,i=document.body.scrollTop||document.documentElement.scrollTop,a=0;a<n.length;a++)if(i>=n[a].position){t=n[a].id;break}e!==t&&(e&&(document.getElementById(e).parentElement.className=""),(e=t)&&(document.getElementById(e).parentElement.className="active"))};return n.length>0&&document.addEventListener("scroll",i),function(){n.length>0&&document.removeEventListener("scroll",i)}}),[t]),t.tableOfContents.length>0?a.a.createElement(u,null,a.a.createElement(m,null,"In this article"),a.a.createElement(f,{onClick:o,dangerouslySetInnerHTML:{__html:t.tableOfContents.replace(/href=\"(.*?#)(.*?)\"/gi,'id="toc-$2" href="/docs$1$2"')}})):a.a.createElement(a.a.Fragment,null)},u=l.c.section.withConfig({displayName:"article-sections__Container",componentId:"dv409r-0"})(["margin-bottom:20px;"]),m=l.c.h6.withConfig({displayName:"article-sections__Title",componentId:"dv409r-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1320px){padding:0 20px;}"]),f=l.c.div.withConfig({displayName:"article-sections__Content",componentId:"dv409r-2"})(["> ul{display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;> li{flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;&.active > a{font-weight:bold;}> a{font-size:0.833em;color:#666;:hover{color:#000;}}}@media only screen and (min-width:1320px){padding:0 20px 10px;}}"]),h=n("AcpX");function g(){var e=Object(h.a)(["\n  body {\n    overflow-y: ",";\n\n    @media only screen and (min-width: 600px) {\n      overflow-y: initial;\n    }\n  }\n"]);return g=function(){return e},e}var x=Object(l.b)(["position:fixed;display:flex;flex-direction:column;*{user-select:none;}"]),w=Object(l.b)(["position:fixed;display:initial;padding:40px 0;width:250px;height:initial;background-color:initial;opacity:initial;box-shadow:initial;"]),v=l.c.div.withConfig({displayName:"doc-page-elements__FixedContainer",componentId:"c2lr7n-0"})(["position:absolute;display:none;padding:25px 0 0;width:100vw;height:calc(100vh - 85px);overflow-y:initial;background-color:white;opacity:0;transition:opacity 2s ease-in-out;&.show{display:initial;opacity:initial;}@media only screen and (min-width:600px){width:450px;box-shadow:0px 3px 6px 0px rgba(0,0,0,0.25);}"]),b=l.c.aside.withConfig({displayName:"doc-page-elements__Aside",componentId:"c2lr7n-1"})([""," z-index:2;right:0;> ","{right:0;}@media only screen and (min-width:1320px){position:relative;right:initial;flex:0 0 250px;> ","{",";right:initial;}}"],x,v,v,w),y=l.c.nav.withConfig({displayName:"doc-page-elements__Navigation",componentId:"c2lr7n-2"})([""," z-index:3;left:0;> ","{left:0;}@media only screen and (min-width:1070px){position:relative;left:initial;flex:0 0 250px;> ","{",";left:initial;}}"],x,v,v,w),E=Object(l.a)(g(),(function(e){return e.disableScrolling?"hidden":"initial"})),C=n("qGPU"),_=n.n(C),I=function(e){var t=e.showWhenScreenWidthIsSmallerThan,n=e.title,i=e.onClose;return a.a.createElement(j,{showWhenScreenWidthIsSmallerThan:t},a.a.createElement(N,null,n),a.a.createElement(O,{onClick:i}))},j=l.c.header.withConfig({displayName:"doc-page-pane-header__Header",componentId:"sc-1i87nrk-0"})(["display:flex;flex-direction:row;align-items:center;padding-bottom:10px;@media only screen and (min-width:","px){display:none;}"],(function(e){return e.showWhenScreenWidthIsSmallerThan})),N=l.c.h5.withConfig({displayName:"doc-page-pane-header__Title",componentId:"sc-1i87nrk-1"})(["flex:1 1 auto;margin-bottom:0;margin-left:25px;"]),O=Object(l.c)(_.a).withConfig({displayName:"doc-page-pane-header__CloseButton",componentId:"sc-1i87nrk-2"})(["flex:0 0 auto;margin-right:19px;margin-left:20px;width:26px;height:26px;opacity:0.5;cursor:pointer;transition:opacity 0.2s ease-in-out;&:hover{opacity:1;}"]);function k(e){var t=Object(i.useState)(!1),n=t[0],a=t[1],o=Object(i.createRef)(),c=Object(i.createRef)();return Object(i.useEffect)((function(){var t=function(){var t=document.body.clientWidth||document.documentElement.clientWidth;a(t>=e)};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),Object(i.useEffect)((function(){if(o.current&&c.current){var e=o.current,t=c.current;if(n){var i=function(){return function(e,t){var n=document.body.scrollTop||document.documentElement.scrollTop,i=e.offsetTop+e.offsetHeight;n+t.offsetHeight>=i?(t.style.position="absolute",t.style.top=e.offsetHeight-t.offsetHeight+"px"):(t.style.position="fixed",t.style.top="initial")}(e,t)};return i(),document.addEventListener("scroll",i),window.addEventListener("resize",i),function(){document.removeEventListener("scroll",i),window.removeEventListener("resize",i)}}!function(e){e.style.position="",e.style.top=""}(t)}}),[n]),{containerRef:o,elementRef:c}}var S=function(e){var t=e.children,n=k(1300),o=n.containerRef,c=n.elementRef,l=Object(r.useSelector)((function(e){return e.common.showAside})),s=Object(r.useDispatch)(),p=Object(i.useCallback)((function(){s(Object(d.j)())}),[]);return a.a.createElement(b,{ref:o},a.a.createElement(E,{disableScrolling:l}),a.a.createElement(v,{ref:c,className:l?"show":""},a.a.createElement(I,{title:"About this article",showWhenScreenWidthIsSmallerThan:1300,onClose:p}),t))},q=n("LOFe"),z=n("ZGSP"),D=n("DmWS"),M=n.n(D),P=n("+K7j"),T=n.n(P),H=function(e){var t=e.data,n=e.originPath,i=t.site.siteMetadata,o=i.repositoryUrl+"/blob/master/website/src/docs/"+n;return a.a.createElement(A,null,a.a.createElement(L,null,"Help us improving our content"),a.a.createElement(U,null,a.a.createElement(B,null,a.a.createElement(W,{to:o},a.a.createElement(q.a,null,a.a.createElement(M.a,null)),"Edit on GitHub")),a.a.createElement(B,null,a.a.createElement(W,{to:i.tools.slack},a.a.createElement(q.a,null,a.a.createElement(T.a,null)),"Discuss on Slack"))))},A=l.c.section.withConfig({displayName:"doc-page-community__Container",componentId:"sc-12dq8k-0"})(["margin-bottom:20px;"]),L=l.c.h6.withConfig({displayName:"doc-page-community__Title",componentId:"sc-12dq8k-1"})(["padding:0 25px;font-size:0.833em;@media only screen and (min-width:1320px){padding:0 20px;}"]),U=l.c.ol.withConfig({displayName:"doc-page-community__CommunityItems",componentId:"sc-12dq8k-2"})(["display:flex;flex-direction:column;margin:0;padding:0 25px 10px;list-style-type:none;@media only screen and (min-width:1320px){padding:0 20px 10px;}"]),B=l.c.li.withConfig({displayName:"doc-page-community__CommunityItem",componentId:"sc-12dq8k-3"})(["flex:0 0 auto;margin:5px 0;padding:0;line-height:initial;"]),W=Object(l.c)(z.a).withConfig({displayName:"doc-page-community__CommunityLink",componentId:"sc-12dq8k-4"})(["font-size:0.833em;color:#666;> ","{margin-right:10px;> svg{fill:#666;}}:hover{color:#000;> "," > svg{fill:#000;}}"],q.a,q.a),R=n("r5vi"),V=function(){var e=Object(r.useSelector)((function(e){return e.common.showLegacyDocInfo})),t=Object(r.useDispatch)(),n="chillicream-legacy-doc-info",o=Object(R.a)([n]),c=o[0],l=o[1],s=c[n];return Object(i.useEffect)((function(){t("true"===s?Object(d.g)():Object(d.i)())}),[s]),a.a.createElement(Q,{role:"dialog","aria-live":"polite","aria-label":"legacydoc","aria-describedby":"legacydoc:desc",show:e},a.a.createElement(K,null,a.a.createElement(X,{id:"legacydoc:desc"},a.a.createElement("strong",null,"Important:")," This documentation covers Hot Chocolate 11. For version 10 and lower click"," ",a.a.createElement(F,{to:"https://hotchocolate.io"},"here"),"."),a.a.createElement(G,{"aria-label":"dismiss cookie message",role:"button",onClick:function(){l(n,"true",{path:"/"})}},a.a.createElement(_.a,null))))},Q=l.c.div.withConfig({displayName:"doc-page-legacy__Dialog",componentId:"sc-1ijx7hc-0"})(["display:",";border-radius:4px 4px 0 0;background-color:#ffb806;"],(function(e){return e.show?"initial":"none"})),K=l.c.div.withConfig({displayName:"doc-page-legacy__Container",componentId:"sc-1ijx7hc-1"})(["display:flex;flex-direction:row;padding:10px 20px;@media only screen and (min-width:820px){padding:10px 50px;}"]),X=l.c.div.withConfig({displayName:"doc-page-legacy__Message",componentId:"sc-1ijx7hc-2"})(["flex:0 1 auto;font-size:0.889em;line-height:1.667em;color:#4f3903;"]),F=Object(l.c)(z.a).withConfig({displayName:"doc-page-legacy__LegacyDocLink",componentId:"sc-1ijx7hc-3"})(["text-decoration:underline;color:#4f3903;"]),G=l.c.button.withConfig({displayName:"doc-page-legacy__CloseButton",componentId:"sc-1ijx7hc-4"})(["flex:0 0 auto;margin-left:auto;cursor:pointer;> svg{fill:#4f3903;width:24px;height:24px;}"]),J=n("l5rq"),$=n.n(J),Z=n("RkNZ"),Y=n.n(Z),ee=n("XuCD"),te=n.n(ee),ne=function(e){var t,n,o=e.data,c=e.selectedPath,l=e.selectedProduct,s=k(1050),p=s.containerRef,u=s.elementRef,m=Object(r.useSelector)((function(e){return e.common.expandedPaths})),f=Object(r.useSelector)((function(e){return e.common.showTOC})),h=Object(r.useDispatch)(),g=Object(i.useState)(!1),x=g[0],w=g[1],b=(null===(t=o.config)||void 0===t?void 0:t.products)&&o.config.products.find((function(e){return(null==e?void 0:e.path)===l})),C=Object(i.useCallback)((function(e){e.stopPropagation(),h(Object(d.c)())}),[]),_=Object(i.useCallback)((function(){w(!1)}),[]),j=Object(i.useCallback)((function(){h(Object(d.l)())}),[]),N=Object(i.useCallback)((function(){h(Object(d.c)())}),[]),O=Object(i.useCallback)((function(e,t){e.stopPropagation(),w(!t)}),[]),S=Object(i.useCallback)((function(e,t){e.stopPropagation(),h(Object(d.k)({path:t}))}),[]);return Object(i.useEffect)((function(){return window.addEventListener("click",_),function(){window.removeEventListener("click",_)}}),[_]),Object(i.useEffect)((function(){if(b&&b.items){var e=c.indexOf(l)+l.length+1,t=c.substring(e).split("/").filter((function(e){return e.length>0}));if(t.length>0)if(b.items.find((function(e){return e.path===t[0]&&e.items}))){var n=c.substring(0,t.length>1?c.lastIndexOf(t[t.length-1])-1:c.length-1);h(Object(d.e)({path:n}))}}}),[b,c,l]),a.a.createElement(y,{ref:p},a.a.createElement(E,{disableScrolling:f}),a.a.createElement(v,{ref:u,className:f?"show":""},a.a.createElement(I,{title:"Table of contents",showWhenScreenWidthIsSmallerThan:1050,onClose:j}),a.a.createElement(oe,null,a.a.createElement(ce,{onClick:function(e){return O(e,x)}},null==b?void 0:b.title,a.a.createElement(q.a,{size:16},a.a.createElement(te.a,null))),a.a.createElement(re,{open:x,onClick:C},(null===(n=o.config)||void 0===n?void 0:n.products)&&o.config.products.map((function(e){return e===b?a.a.createElement(de,{key:e.path,onClick:_},a.a.createElement(pe,null,e.title),a.a.createElement(ue,null,e.description)):a.a.createElement(se,{key:e.path,to:"/docs/"+e.path+"/"},a.a.createElement(pe,null,e.title),a.a.createElement(ue,null,e.description))})))),(null==b?void 0:b.items)&&function e(t,n){return a.a.createElement(me,{open:!x},t.map((function(t){var i=t.path,o=t.title,r=t.items,l=r||"index"!==i?n+"/"+i:n;return a.a.createElement(we,{key:l+(r?"/parent":""),className:r?ie(c,l)?"active":"":ae(c,l)?"active":"",onClick:N},r?a.a.createElement(ge,{expanded:-1!==m.indexOf(l)},a.a.createElement(fe,{onClick:function(e){return S(e,l)}},o,a.a.createElement(q.a,{size:16},a.a.createElement($.a,{className:"arrow-down"}),a.a.createElement(Y.a,{className:"arrow-up"}))),a.a.createElement(he,null,e(r,l))):a.a.createElement(xe,{to:l+"/"},o))})))}(b.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title,items:e.items?null==e?void 0:e.items.filter((function(e){return!!e})).map((function(e){return{path:e.path,title:e.title}})):void 0}})),"/docs/"+b.path)))};function ie(e,t){return e.startsWith(t)}function ae(e,t){return t===e.substring(0,e.lastIndexOf("/"))}var oe=l.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcher",componentId:"j0l58s-0"})(["display:flex;flex-wrap:wrap;align-items:center;@media only screen and (min-width:1070px){position:relative;flex-wrap:initial;overflow-y:initial;}"]),ce=l.c.button.withConfig({displayName:"doc-page-navigation__ProductSwitcherButton",componentId:"j0l58s-1"})(["display:flex;flex:0 0 auto;flex-direction:row;align-items:center;border:1px solid #ccc;border-radius:5px;margin:6px 14px 10px;padding:7px 10px;width:calc(100% - 28px);height:38px;font-size:0.833em;transition:background-color 0.2s ease-in-out;> ","{margin-left:auto;> svg{fill:#666;}}:hover{background-color:#ddd;}@media only screen and (min-width:1070px){margin-bottom:20px;padding:7px 5px;width:calc(100% - 28px);height:initial;}"],q.a),re=l.c.div.withConfig({displayName:"doc-page-navigation__ProductSwitcherDialog",componentId:"j0l58s-2"})(["display:",";flex:1 1 100%;flex-direction:column;padding:0 10px;background-color:#fff;@media only screen and (min-width:1070px){position:fixed;z-index:10;top:130px;flex-direction:row;flex-wrap:wrap;margin:0 14px;border-radius:5px;padding:10px;width:700px;height:initial;box-shadow:0 3px 6px 0 rgba(0,0,0,0.25);}"],(function(e){return e.open?"flex":"none"})),le=Object(l.b)(["flex:0 0 auto;border:1px solid #ccc;border-radius:5px;margin:5px;padding:10px;font-size:0.833em;color:#666;cursor:pointer;@media only screen and (min-width:1070px){flex:0 0 calc(50% - 32px);}"]),de=l.c.div.withConfig({displayName:"doc-page-navigation__ActiveProduct",componentId:"j0l58s-3"})(["",";background-color:#ddd;"],le),se=Object(l.c)(z.a).withConfig({displayName:"doc-page-navigation__ProductLink",componentId:"j0l58s-4"})(["",";transition:background-color 0.2s ease-in-out;:hover{background-color:#ddd;}"],le),pe=l.c.h6.withConfig({displayName:"doc-page-navigation__ProductTitle",componentId:"j0l58s-5"})(["font-size:1em;"]),ue=l.c.p.withConfig({displayName:"doc-page-navigation__ProductDescription",componentId:"j0l58s-6"})(["margin-bottom:0;"]),me=l.c.ol.withConfig({displayName:"doc-page-navigation__NavigationList",componentId:"j0l58s-7"})(["display:",";flex-direction:column;margin:0;padding:0 25px 20px;list-style-type:none;@media only screen and (min-width:1070px){display:flex;padding:0 20px 20px;}"],(function(e){return e.open?"flex":"none"})),fe=l.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupToggle",componentId:"j0l58s-8"})(["display:flex;flex-direction:row;align-items:center;min-height:20px;font-size:0.833em;"]),he=l.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroupContent",componentId:"j0l58s-9"})(["> ","{padding:5px 10px;}"],me),ge=l.c.div.withConfig({displayName:"doc-page-navigation__NavigationGroup",componentId:"j0l58s-10"})(["display:flex;flex-direction:column;cursor:pointer;> ","{display:",";}> "," > ","{margin-left:auto;> .arrow-down{display:",";fill:#666;}> .arrow-up{display:",";fill:#666;}}"],he,(function(e){return e.expanded?"initial":"none"}),fe,q.a,(function(e){return e.expanded?"none":"initial"}),(function(e){return e.expanded?"initial":"none"})),xe=Object(l.c)(z.a).withConfig({displayName:"doc-page-navigation__NavigationLink",componentId:"j0l58s-11"})(["font-size:0.833em;color:#666;:hover{color:#000;}"]),we=l.c.li.withConfig({displayName:"doc-page-navigation__NavigationItem",componentId:"j0l58s-12"})(["flex:0 0 auto;margin:5px 0;padding:0;min-height:20px;line-height:initial;&.active{> ",",> "," > ","{font-weight:bold;}}"],xe,ge,fe),ve=n("t+sS"),be=n.n(ve),ye=n("NmUf"),Ee=n.n(ye),Ce=function(e){var t=e.data,n=e.originPath,o=Object(r.useDispatch)(),c=t.file.childMarkdownRemark,l=c.fields,u=c.frontmatter,m=c.html,f=l.slug.substring(1),h="/docs/"+f,g=f.substring(0,f.indexOf("/")),x=u.title,w=Object(i.useCallback)((function(){o(Object(d.l)())}),[]),v=Object(i.useCallback)((function(){o(Object(d.j)())}),[]);return a.a.createElement(_e,null,a.a.createElement(ne,{data:t,selectedPath:h,selectedProduct:g}),a.a.createElement(s.e,null,a.a.createElement(s.a,null,a.a.createElement(V,null),a.a.createElement(s.c,null,a.a.createElement(Ie,null,a.a.createElement(je,{onClick:w,className:"toc-toggle"},a.a.createElement(be.a,null)," Table of contents"),a.a.createElement(je,{onClick:v,className:"aside-toggle"},a.a.createElement(Ee.a,null)," About this article")),a.a.createElement(s.d,null,x)),a.a.createElement(s.b,{dangerouslySetInnerHTML:{__html:m}})),!1),a.a.createElement(S,null,a.a.createElement(H,{data:t,originPath:n}),a.a.createElement(p,{data:t.file.childMarkdownRemark})))},_e=l.c.div.withConfig({displayName:"doc-page__Container",componentId:"vhp4qm-0"})(["display:flex;flex-direction:row;width:100%;max-width:820px;@media only screen and (min-width:1070px){max-width:1070px;}@media only screen and (min-width:1320px){max-width:1320px;}"]),Ie=l.c.div.withConfig({displayName:"doc-page__ResponsiveMenu",componentId:"vhp4qm-1"})(["display:flex;flex-direction:row;align-items:center;padding:30px 20px 20px;@media only screen and (min-width:820px){padding-right:50px;padding-left:50px;}@media only screen and (min-width:1070px){> .toc-toggle{display:none;}}@media only screen and (min-width:1320px){display:none;}"]),je=l.c.button.withConfig({displayName:"doc-page__Button",componentId:"vhp4qm-2"})(["display:flex;flex-direction:row;align-items:center;color:#666;transition:color 0.2s ease-in-out;&.aside-toggle{margin-left:auto;}&:hover{color:#000;> svg{fill:#000;}}> svg{margin-right:5px;width:16px;height:16px;fill:#666;transition:fill 0.2s ease-in-out;}"]),Ne=(t.default=function(e){var t=e.data,n=e.pageContext;return a.a.createElement(c.a,null,a.a.createElement(o.a,{title:t.file.childMarkdownRemark.frontmatter.title}),a.a.createElement(Ce,{data:t,originPath:n.originPath}))},"4045361384")},Hf4c:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return l}));var i=n("vOnD"),a=i.c.div.withConfig({displayName:"article-elements__ArticleWrapper",componentId:"sc-17wo9z6-0"})(["display:flex;flex:1 1 auto;flex-direction:column;@media only screen and (min-width:820px){padding:20px 10px 0;}"]),o=i.c.article.withConfig({displayName:"article-elements__Article",componentId:"sc-17wo9z6-1"})(["display:flex;flex:1 1 auto;flex-direction:column;margin-bottom:40px;padding-bottom:20px;@media only screen and (min-width:820px){border-radius:4px;box-shadow:0 3px 6px rgba(0,0,0,0.25);}"]),c=i.c.header.withConfig({displayName:"article-elements__ArticleHeader",componentId:"sc-17wo9z6-2"})(["> .gatsby-image-wrapper{border-radius:4px 4px 0 0;}"]),r=i.c.h1.withConfig({displayName:"article-elements__ArticleTitle",componentId:"sc-17wo9z6-3"})(["margin:20px 20px 10px;font-size:2em;@media only screen and (min-width:820px){margin:20px 50px 10px;}"]),l=i.c.div.withConfig({displayName:"article-elements__ArticleContent",componentId:"sc-17wo9z6-4"})(['> *{padding-right:20px;padding-left:20px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{padding-right:4px;transform:translateX(0px);}> blockquote{padding:30px 20px;}> table{th:first-child,td:first-child{padding-left:20px;}th:last-child,td:last-child{padding-right:20px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{padding-right:0;padding-left:0;> pre[class*="language-"]{padding:30px 20px;::before{left:20px;}}}@media only screen and (min-width:820px){> *{padding-right:50px;padding-left:50px;}> h1 > a.anchor.before,> h2 > a.anchor.before,> h3 > a.anchor.before,> h4 > a.anchor.before,> h5 > a.anchor.before,> h6 > a.anchor.before{transform:translateX(30px);}> blockquote{padding:30px 50px;}> table{th:first-child,td:first-child{padding-left:50px;}th:last-child,td:last-child{padding-right:50px;}}> .gatsby-code-button-container{padding:0;}> .gatsby-highlight{> pre[class*="language-"]{padding-right:50px;padding-left:50px;::before{left:50px;}}}}'])},NmUf:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"}))}a.defaultProps={viewBox:"0 0 576 512"},e.exports=a,a.default=a},ORnI:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("VUT9"));t.Disqus=a.default;var o=i(n("qASQ"));t.CommentCount=o.default;var c=i(n("vAJ3"));t.CommentEmbed=c.default;var r=a.default;t.default=r},R7tm:function(e,t,n){var i=n("qHws"),a=n("gC2u"),o=n("dQcQ"),c=n("m7BV");e.exports=function(e){return i(e)||a(e)||o(e)||c()}},VUT9:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("j8BX")),o=i(n("uDP2")),c=i(n("XEEL")),r=i(n("q1tI")),l=i(n("17x9")),d=n("4M6O"),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,c.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,d.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,d.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return r.default.createElement("div",(0,a.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(r.default.Component);t.default=s,s.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},XuCD:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},dQcQ:function(e,t,n){var i=n("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},l5rq:function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))}a.defaultProps={viewBox:"0 0 448 512"},e.exports=a,a.default=a},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qASQ:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("j8BX")),o=i(n("uDP2")),c=i(n("XEEL")),r=i(n("q1tI")),l=i(n("17x9")),d=n("4M6O"),s=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n}(0,c.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?s():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,i=(0,o.default)(e,["config","placeholder"]);return r.default.createElement("span",(0,a.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(r.default.Component);t.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},qHws:function(e,t,n){var i=n("hMe3");e.exports=function(e){if(Array.isArray(e))return i(e)}},"t+sS":function(e,t,n){var i=n("q1tI");function a(e){return i.createElement("svg",e,i.createElement("path",{d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},vAJ3:function(e,t,n){"use strict";var i=n("5NKs");t.__esModule=!0,t.default=void 0;var a=i(n("XEEL")),o=i(n("q1tI")),c=i(n("17x9")),r=function(e){function t(){return e.apply(this,arguments)||this}(0,a.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(o.default.Component);t.default=r,r.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},r.propTypes={commentId:c.default.string.isRequired,width:c.default.number,height:c.default.number,showMedia:c.default.bool,showParentComment:c.default.bool}},wqoF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("ORnI"),a=n("q1tI"),o=n.n(a),c=n("vOnD"),r=function(e){var t=e.data,n=e.path,i=e.title,a={url:t.site.siteMetadata.siteUrl+n,identifier:n,title:i};return o.a.createElement(l,{config:a})},l=Object(c.c)(i.Disqus).withConfig({displayName:"article-comments__DisqusWrapper",componentId:"sc-1uyp3j8-0"})(["margin:0 20px 60px;@media only screen and (min-width:820px){margin:0 50px 60px;}"])}}]);
//# sourceMappingURL=component---src-templates-doc-page-template-tsx-acfd007ee3df38742d0a.js.map