(this["webpackJsonp4laws-web"]=this["webpackJsonp4laws-web"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),i=a.n(s),o=a(11),r=a.n(o);a(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))},u=a(26),j=a(18),h=a(19),d=a(58),O=a(21),b=a(20),w=a(168),f=(a(97),a(29)),p=a(82),x=a(167),g=a(164),m=a(165),T=(a(98),a(156)),L=a(171),v=a(159),N=a(160),W=a(122),_=a(173),y=a(75),A=a.n(y),E=a(161),M=(a(99),[1,2,3,4]),k=function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).toggleDrawer=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&n.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{open:e})}))}},n.state={open:!1},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(T.a,{className:"DrawerMenu-IconButton",edge:"start","aria-label":"menu",onClick:this.toggleDrawer(!0),children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(L.a,{anchor:"right",open:this.state.open,onClose:this.toggleDrawer(!1),children:Object(n.jsx)("div",{role:"presentation",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(N.a,{children:Object(n.jsx)(E.a,{id:"drawerMenu.subheader",defaultMessage:"Four Spritual Laws",description:"Drawer Menu Subheader"})}),M.map((function(e){return Object(n.jsx)(W.a,{button:!0,component:f.b,to:"/",children:Object(n.jsx)(_.a,{children:Object(n.jsx)(E.a,{id:"drawerMenu.laws",defaultMessage:"Law {n}",description:"Drawer Menu Link",values:{n:e}})})},e)}))]})})})]})}}]),a}(i.a.Component),P=a(162),C=a(77),F=a.n(C),I=a(78),S=a.n(I),R=a(79),G=a.n(R),U=a(172),H=a(163),D=a(170),B=(a(106),[{type:"en",label:"English"},{type:"ko",label:"\ud55c\uad6d\uc5b4"}]),J=function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).changeLanguage=function(e){n.props.changeLanguage(e)},n.onMenuClick=function(e){var t=e.currentTarget;n.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{anchorEl:t})}))},n.onMenuClose=function(){n.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{anchorEl:null})}))},n.state={anchorEl:null},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=B.find((function(t){return t.type===e.props.locale}));return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(P.a,{className:"TranslationMenu-Button","aria-label":"i18n","aria-controls":"i18n-menu","aria-haspopup":"true",onClick:this.onMenuClick,children:[Object(n.jsx)(F.a,{}),Object(n.jsx)(D.a,{xsDown:!0,children:Object(n.jsx)("span",{className:"TranslationMenu-Text",children:t?t.label:""})}),this.state.anchorEl?Object(n.jsx)(S.a,{}):Object(n.jsx)(G.a,{})]}),Object(n.jsx)(U.a,{id:"i18n-menu",className:"TranslationMenu-Menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.onMenuClose,keepMounted:!0,children:B.map((function(t){return Object(n.jsx)(H.a,{selected:t.type===e.props.locale,onClick:function(){return e.changeLanguage(t.type)},children:t.label},t.type)}))})]})}}]),a}(i.a.Component),z=function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(g.a,{position:"fixed",className:"Header",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("div",{className:"logo-placeholder"}),Object(n.jsx)("div",{className:"spacing"}),Object(n.jsx)(J,Object(u.a)({},this.props)),Object(n.jsx)(k,{})]})})}}]),a}(i.a.Component),Y=a(67),K=a(14),V=(a(107),a(166)),$=(a(108),function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(V.a,{className:"PageContainer",maxWidth:"md",children:Object(n.jsx)("div",{className:"PageContainer-Wrapper",children:this.props.children})})}}]),a}(i.a.Component)),q="/4laws",Q="/4laws/main",X="/4laws/one",Z="/4laws/two",ee={ROOT:q,MAIN:Q,MAIN_TITLE:"/4laws/main/0",MAIN_WRAPUP:"/4laws/main/1",LAW_ONE:X,LAW_ONE_TITLE:"/4laws/one/0",LAW_ONE_1:"/4laws/one/1",LAW_ONE_2:"/4laws/one/2",LAW_ONE_WRAPUP:"/4laws/one/3",LAW_TWO:Z,LAW_TWO_TITLE:"/4laws/two/0",LAW_TWO_1:"/4laws/two/1",LAW_TWO_2:"/4laws/two/2",LAW_TWO_3:"/4laws/two/3",LAW_TWO_4:"/4laws/two/4",LAW_TWO_WRAPUP:"/4laws/two/5",LAW_THREE:"/4laws/three",LAW_FOUR:"/4laws/four",PRAYER:"/4laws/prayer"};!function(e){e.TITLE="title",e.CONTENT="content"}(c||(c={}));a(109);var te=function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"getClassNames",value:function(){var e=this.props,t=e.type,a=e.className,n="PageText ";switch(t){case c.TITLE:n+="PageText-Title";break;case c.CONTENT:n+="PageText-Content"}return a&&(n+=" "+a),n}},{key:"render",value:function(){return Object(n.jsx)("span",{className:this.getClassNames(),children:this.props.children})}}]),a}(i.a.Component),ae=(a(110),function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"getClassNames",value:function(){var e=this.props,t=e.minimized,a=e.className,n="PageTitle";return t&&(n+=" PageTitle-Minimized"),a&&(n+=" "+a),n}},{key:"render",value:function(){var e=this.props,t=e.icon,a=e.type,s=e.children;return Object(n.jsx)("div",{className:this.getClassNames(),children:Object(n.jsxs)("div",{className:"PageTitle-Wrapper",children:[t,Object(n.jsx)(te,{type:a,children:s})]})})}}]),a}(i.a.Component)),ne=te,se=(a(111),function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e,t,a=this.props,i=a.previousLink,o=a.nextLink,r=a.previousText,l=a.nextText;return i&&(e=Object(n.jsx)(f.b,{className:"BottomNavigation-Previous",to:i,children:Object(n.jsx)(ne,{type:c.CONTENT,children:r||Object(n.jsx)(E.a,{id:"bottomNavigation.previous",defaultMessage:"Previous"})})})),o&&(t=Object(n.jsx)(f.b,{className:"BottomNavigation-Next",to:o,children:Object(n.jsx)(ne,{type:c.CONTENT,children:l||Object(n.jsx)(E.a,{id:"bottomNavigation.next",defaultMessage:"Next"})})})),Object(n.jsxs)(s.Fragment,{children:[e,t]})}}]),a}(s.Component)),ie=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(ne,{type:c.CONTENT,className:"LawOne-Content",children:[Object(n.jsx)("div",{className:"LawOne-SubTitle",children:Object(n.jsx)(E.a,{id:"fourlaws.law1.one.title",defaultMessage:"God's Love"})}),Object(n.jsx)("div",{children:Object(n.jsx)(E.a,{id:"fourlaws.law1.one.content",defaultMessage:'"For God so loved the world, that He gave His only begotten Son, that whoever believes in Him should not perish, but have eternal life" (John 3:16).'})})]}),Object(n.jsx)(se,{previousLink:ee.LAW_ONE_TITLE,nextLink:ee.LAW_ONE_2})]})},oe=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(ne,{type:c.CONTENT,className:"LawOne-Content",children:[Object(n.jsx)("div",{className:"LawOne-SubTitle",children:Object(n.jsx)(E.a,{id:"fourlaws.law1.two.title",defaultMessage:"God's Plan"})}),Object(n.jsx)("div",{children:Object(n.jsx)(E.a,{id:"fourlaws.law1.two.content",defaultMessage:'(Christ speaking) "I came that they might have life, and might have it abundantly" (that it might be full and meaningful) (John 10:10).'})})]}),Object(n.jsx)(se,{previousLink:ee.LAW_ONE_1,nextLink:ee.LAW_ONE_WRAPUP})]})},re=function(){return Object(n.jsx)(se,{previousLink:ee.MAIN_WRAPUP,nextLink:ee.LAW_ONE_1})},ce=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(ne,{type:c.CONTENT,className:"LawOne-Wrapup",children:Object(n.jsx)(E.a,{id:"fourlaws.law1.wrapup",defaultMessage:"Why is it that most people are not experiencing the abundant life? Because..."})}),Object(n.jsx)(se,{previousLink:ee.LAW_ONE_2,nextLink:ee.LAW_TWO})]})},le=function(){return Object(n.jsxs)(K.d,{children:[Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_ONE_TITLE,component:re}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_ONE_1,component:ie}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_ONE_2,component:oe}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_ONE_WRAPUP,component:ce}),Object(n.jsx)(K.a,{exact:!0,to:ee.LAW_ONE_TITLE})]})},ue=(a(112),a(43)),je=a.n(ue),he=function(){var e=Object(n.jsx)(je.a,{className:"PageTitle-Icon"}),t=window.location.href.endsWith(ee.LAW_ONE_TITLE),a=window.location.href.endsWith(ee.LAW_ONE_WRAPUP);return Object(n.jsxs)(i.a.Fragment,{children:[a?null:Object(n.jsx)(ae,{className:"LawOne-PageTitle",icon:e,type:c.CONTENT,minimized:!t,children:Object(n.jsx)(E.a,{id:"fourlaws.law1.title",defaultMessage:"God LOVES you, and offers a wonderful PLAN for your life."})}),Object(n.jsx)("div",{className:"LawOne-PageContent",children:Object(n.jsx)(le,{})})]})},de=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(ne,{type:c.CONTENT,className:"LawTwo-Content",children:[Object(n.jsx)("div",{className:"LawTwo-SubTitle",children:Object(n.jsx)(E.a,{id:"fourlaws.law2.one.title",defaultMessage:"Man is Sinful"})}),Object(n.jsx)("div",{children:Object(n.jsx)(E.a,{id:"fourlaws.law2.one.content",defaultMessage:'"For all have sinned and fall short of the glory of God" (Romans 3:23).'})})]}),Object(n.jsx)(se,{previousLink:ee.LAW_TWO_TITLE,nextLink:ee.LAW_TWO_2})]})},Oe=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(ne,{type:c.CONTENT,className:"LawTwo-Content",children:Object(n.jsx)(E.a,{id:"fourlaws.law2.two",defaultMessage:"Man was created to have fellowship with God; but, because of his stubborn self-will, he chose to go his own independent way and fellowship with God was broken. This self-will, characterized by an attitude of active rebellion or passive indifference, is evidence of what the Bible calls sin."})}),Object(n.jsx)(se,{previousLink:ee.LAW_TWO_1,nextLink:ee.LAW_TWO_3})]})},be=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(ne,{type:c.CONTENT,className:"LawTwo-Content",children:[Object(n.jsx)("div",{className:"LawTwo-SubTitle",children:Object(n.jsx)(E.a,{id:"fourlaws.law2.three.title",defaultMessage:"Man is Separated"})}),Object(n.jsx)("div",{children:Object(n.jsx)(E.a,{id:"fourlaws.law2.three.content",defaultMessage:'"For the wages of sin is death" (spiritual separation from God) (Romans 6:23).'})})]}),Object(n.jsx)(se,{previousLink:ee.LAW_TWO_2,nextLink:ee.LAW_TWO_4})]})},we=(a(113),function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(ne,{type:c.CONTENT,className:"LawTwo-Content",children:Object(n.jsxs)("div",{className:"LawTwo-Four-flex",children:[Object(n.jsx)(je.a,{className:"LawTwo-Four-Icon"}),Object(n.jsx)("span",{children:Object(n.jsx)(E.a,{id:"fourlaws.law2.four",defaultMessage:"This diagram illustrates that God is holy and man is sinful. A great gulf separates the two. The arrows illustrate that man is continually trying to reach God and the abundant life through his own efforts, such as a good life, philosophy, or religion."})})]})}),Object(n.jsx)(se,{previousLink:ee.LAW_TWO_3,nextLink:ee.LAW_TWO_WRAPUP})]})}),fe=function(){return Object(n.jsx)(se,{previousLink:ee.LAW_ONE_WRAPUP,nextLink:ee.LAW_TWO_1})},pe=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(ne,{type:c.CONTENT,className:"LawTwo-Wrapup",children:Object(n.jsx)(E.a,{id:"fourlaws.law2.wrapup",defaultMessage:"The Third Law explains the only way to bridge this gulf..."})}),Object(n.jsx)(se,{previousLink:ee.LAW_TWO_4,nextLink:ee.LAW_TWO_WRAPUP})]})},xe=function(){return Object(n.jsxs)(K.d,{children:[Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_TWO_TITLE,component:fe}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_TWO_1,component:de}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_TWO_2,component:Oe}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_TWO_3,component:be}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_TWO_4,component:we}),Object(n.jsx)(K.b,{exact:!0,path:ee.LAW_TWO_WRAPUP,component:pe}),Object(n.jsx)(K.a,{exact:!0,to:ee.LAW_TWO_TITLE})]})},ge=(a(114),function(){var e=Object(n.jsx)(je.a,{className:"PageTitle-Icon"}),t=window.location.href.endsWith(ee.LAW_TWO_TITLE),a=window.location.href.endsWith(ee.LAW_TWO_WRAPUP);return Object(n.jsxs)(i.a.Fragment,{children:[a?null:Object(n.jsx)(ae,{className:"LawTwo-PageTitle",icon:e,type:c.CONTENT,minimized:!t,children:Object(n.jsx)(E.a,{id:"fourlaws.law2.title",defaultMessage:"Man is SINFUL and SEPARATED from God. Therefore, he cannot know and experience God's love and plan for his life."})}),Object(n.jsx)("div",{className:"LawTwo-PageTitle-Placeholder"}),Object(n.jsx)("div",{className:"LawTwo-PageContent",children:Object(n.jsx)(xe,{})})]})}),me=(a(115),function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsxs)(ne,{type:c.TITLE,className:"FourLawsMain-Title",children:[Object(n.jsx)(E.a,{id:"fourlaws.main1",defaultMessage:"Have You"}),Object(n.jsx)("span",{className:"FourLawsMain-Kanji",children:Object(n.jsx)(E.a,{id:"fourlaws.main2",defaultMessage:" "})}),Object(n.jsx)(E.a,{id:"fourlaws.main3",defaultMessage:"Heard of the Four Spiritual Laws?"})]}),Object(n.jsx)(se,{nextLink:ee.MAIN_WRAPUP})]})}),Te=(a(116),function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(ne,{type:c.CONTENT,className:"FourLawsMain-Wrapup",children:Object(n.jsx)(E.a,{id:"fourlaws.main.wrapup",defaultMessage:"Just as there are physical laws that govern the physical universe, so are there spiritual laws that govern your relationship with God."})}),Object(n.jsx)(se,{previousLink:ee.MAIN_TITLE,nextLink:ee.LAW_ONE})]})}),Le=function(){return Object(n.jsxs)(K.d,{children:[Object(n.jsx)(K.b,{exact:!0,path:ee.MAIN_TITLE,render:function(){return Object(n.jsx)(me,{})}}),Object(n.jsx)(K.b,{exact:!0,path:ee.MAIN_WRAPUP,render:function(){return Object(n.jsx)(Te,{})}}),Object(n.jsx)(K.a,{exact:!0,to:ee.MAIN_TITLE})]})},ve=function(){return Object(n.jsx)(Le,{})},Ne=function(){return Object(n.jsxs)(K.d,{children:[Object(n.jsx)(K.b,{path:ee.MAIN,component:ve}),Object(n.jsx)(K.b,{path:ee.LAW_ONE,component:he}),Object(n.jsx)(K.b,{path:ee.LAW_TWO,component:ge}),Object(n.jsx)(K.a,{exact:!0,to:ee.MAIN})]})},We=function(){return Object(n.jsx)($,{children:Object(n.jsx)(Ne,{})})},_e=function(){return Object(n.jsxs)(K.d,{children:[Object(n.jsx)(K.b,{path:ee.ROOT,component:We}),Object(n.jsx)(K.a,{exact:!0,to:ee.ROOT})]})},ye=Object(p.a)({typography:{fontFamily:'"Ikkeullim", "Helvetica", "Arial", "sans-serif"',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500},palette:{primary:{main:"#FFFFFF"}}}),Ae=function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.intl.formatMessage({id:"header.title",defaultMessage:"Example Title",description:"Header Title"});return Object(n.jsx)(x.a,{theme:ye,children:Object(n.jsx)(f.a,{basename:"/",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(z,Object(u.a)({title:e},this.props)),Object(n.jsx)(_e,{})]})})})}}]),a}(i.a.Component),Ee=Object(Y.c)(Ae),Me={en:a(80),ko:a(81)},ke=function(e){Object(O.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).changeLanguage=n.changeLanguage.bind(Object(d.a)(n)),n.state={locale:"en"},n}return Object(h.a)(a,[{key:"changeLanguage",value:function(e){this.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{locale:e})}))}},{key:"render",value:function(){var e=Me[this.state.locale];return Object(n.jsx)(w.a,{locale:this.state.locale,messages:e,defaultLocale:"en",children:Object(n.jsx)(Ee,{changeLanguage:this.changeLanguage,locale:this.state.locale})},this.state.locale)}}]),a}(i.a.Component);r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),l()},80:function(e){e.exports=JSON.parse('{"bottomNavigation.next":"Next","bottomNavigation.previous":"Previous","drawerMenu.laws":"Law {n}","drawerMenu.subheader":"Four Spritual Laws","fourlaws.law1.one.content":"\\"For God so loved the world, that He gave His only begotten Son, that whoever believes in Him should not perish, but have eternal life\\" (John 3:16).","fourlaws.law1.one.title":"God\'s Love","fourlaws.law1.title":"God LOVES you, and offers a wonderful PLAN for your life.","fourlaws.law1.two.content":"(Christ speaking) \\"I came that they might have life, and might have it abundantly\\" (that it might be full and meaningful) (John 10:10).","fourlaws.law1.two.title":"God\'s Plan","fourlaws.law1.wrapup":"Why is it that most people are not experiencing the abundant life? Because...","fourlaws.law2.four":"This diagram illustrates that God is holy and man is sinful. A great gulf separates the two. The arrows illustrate that man is continually trying to reach God and the abundant life through his own efforts, such as a good life, philosophy, or religion.","fourlaws.law2.one.content":"\\"For all have sinned and fall short of the glory of God\\" (Romans 3:23).","fourlaws.law2.one.title":"Man is Sinful","fourlaws.law2.three.content":"\\"For the wages of sin is death\\" (spiritual separation from God) (Romans 6:23).","fourlaws.law2.three.title":"Man is Separated","fourlaws.law2.title":"Man is SINFUL and SEPARATED from God. Therefore, he cannot know and experience God\'s love and plan for his life.","fourlaws.law2.two":"Man was created to have fellowship with God; but, because of his stubborn self-will, he chose to go his own independent way and fellowship with God was broken. This self-will, characterized by an attitude of active rebellion or passive indifference, is evidence of what the Bible calls sin.","fourlaws.law2.wrapup":"The Third Law explains the only way to bridge this gulf...","fourlaws.main.wrapup":"Just as there are physical laws that govern the physical universe, so are there spiritual laws that govern your relationship with God.","fourlaws.main1":"Have You","fourlaws.main2":" ","fourlaws.main3":"Heard of the Four Spiritual Laws?","header.title":"Example Title"}')},81:function(e){e.exports=JSON.parse('{"bottomNavigation.next":"\ub2e4\uc74c","bottomNavigation.previous":"\uc774\uc804","drawerMenu.laws":"\uc81c {n}\uc6d0\ub9ac","drawerMenu.subheader":"\uc0ac\uc601\ub9ac","fourlaws.law1.one.content":"\\"\ud558\ub098\ub2d8\uc774 \uc138\uc0c1\uc744 \uc774\ucc98\ub7fc \uc0ac\ub791\ud558\uc0ac \ub3c5\uc0dd\uc790 (\uc608\uc218 \uadf8\ub9ac\uc2a4\ub3c4)\ub97c \uc8fc\uc168\uc73c\ub2c8, \uc774\ub294 \uc800\ub97c \ubbff\ub294 \uc790\ub9c8\ub2e4 \uba78\ub9dd\uce58 \uc54a\uace0 \uc601\uc0dd\uc744 \uc5bb\uac8c \ud558\ub824 \ud558\uc2ec\uc774\ub2c8\ub77c\\"\uace0 \ud588\uc2b5\ub2c8\ub2e4. (\uc694\ud55c\ubcf5\uc74c 3\uc7a5 16\uc808)","fourlaws.law1.one.title":"\ud558\ub098\ub2d8\uc758 \uc0ac\ub791","fourlaws.law1.title":"\ud558\ub098\ub2d8\uc740 \ub2f9\uc2e0\uc744 \uc0ac\ub791\ud558\uc2dc\uba70, \ub2f9\uc2e0\uc744 \uc704\ud55c \ub180\ub77c\uc6b4 \uacc4\ud68d\uc744 \uac00\uc9c0\uace0 \uacc4\uc2ed\ub2c8\ub2e4.","fourlaws.law1.two.content":"\uc608\uc218 \uadf8\ub9ac\uc2a4\ub3c4\uaed8\uc11c \ub9d0\uc500 \ud558\uc2dc\uae30\ub97c \\"\ub0b4\uac00 \uc628 \uac83\uc740 \uc591(\ub2f9\uc2e0)\uc73c\ub85c \uc0dd\uba85\uc744 \uc5bb\uac8c \ud558\uace0 \ub354 \ud48d\uc131\ud788 \uc5bb\uac8c \ud558\ub824\ub294 \uac83\uc774\ub77c\\" \uace0 \ud558\uc168\uc2b5\ub2c8\ub2e4.(\uc694\ud55c\ubcf5\uc74c 10\uc7a510\uc808)","fourlaws.law1.two.title":"\ud558\ub098\ub2d8\uc758 \uacc4\ud68d","fourlaws.law1.wrapup":"\uadf8\ub7f0\ub370 \uc65c \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc774 \ud48d\uc131\ud55c \uc0b6\uc744 \ub204\ub9ac\uc9c0 \ubabb\ud558\uace0 \uc788\uc744\uae4c\uc694? \uadf8 \uc774\uc720\ub294...","fourlaws.law2.four":"\ud558\ub098\ub2d8\uc740 \uac70\ub8e9\ud558\uc2dc\uba70 \uc0ac\ub78c\uc740 \uc8c4\uc5d0 \ube60\uc838 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\ud558\uc5ec \uc774 \ub458 \uc0ac\uc774\uc5d0\ub294 \ucee4\ub2e4\ub780 \uac04\uaca9\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \uc0ac\ub78c\ub4e4\uc740 \ub04a\uc784\uc5c6\uc774 \uc120\ud589,\ucca0\ud559, \uc885\uad50 \ub4f1\uc758 \uc790\uae30 \ud798\uc73c\ub85c \ud558\ub098\ub2d8\uaed8 \ub3c4\ub2ec\ud558\uc5ec \ud48d\uc131\ud55c \uc0b6\uc744 \ub204\ub824 \ubcf4\ub824\uace0 \uc560\uc4f0\uace0 \uc788\uc2b5\ub2c8\ub2e4.","fourlaws.law2.one.content":"\\"\ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc8c4\ub97c \ubc94\ud558\uc600\uc73c\ub9e4 \ud558\ub098\ub2d8\uc758 \uc601\uad11\uc5d0 \uc774\ub974\uc9c0 \ubabb\ud558\ub354\ub2c8\\" \ub77c\uace0 \ud588\uc2b5\ub2c8\ub2e4. (\ub85c\ub9c8\uc11c 3\uc7a5 23\uc808)","fourlaws.law2.one.title":"\uc0ac\ub78c\uc740 \uc8c4\uc5d0 \ube60\uc838 \uc788\uc2b5\ub2c8\ub2e4.","fourlaws.law2.three.content":"\\"\uc8c4\uc758 \uc0af\uc740 \uc0ac\ub9dd\\"\uc774\ub77c\uace0 \ud588\uc2b5\ub2c8\ub2e4. (\uc5ec\uae30\uc11c \uc0ac\ub9dd\uc774\ub780 \uc601\uc801\uc73c\ub85c \ud558\ub098\ub2d8\uc73c\ub85c\ubd80\ud130 \ub5a0\ub098 \uc788\ub294 \uc0c1\ud0dc\ub97c \ub9d0\ud569\ub2c8\ub2e4.) (\ub85c\ub9c8\uc11c 6\uc7a5 23\uc808)","fourlaws.law2.three.title":"\uc0ac\ub78c\uc740 \ud558\ub098\ub2d8\uc73c\ub85c\ubd80\ud130 \ub5a0\ub098 \uc788\uc2b5\ub2c8\ub2e4.","fourlaws.law2.title":"\uc0ac\ub78c\uc740 \uc8c4\uc5d0 \ube60\uc838 \ud558\ub098\ub2d8\uc73c\ub85c\ubd80\ud130 \ub5a0\ub098 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c \ud558\ub098\ub2d8\uc758 \uc0ac\ub791\uacfc \uacc4\ud68d\uc744 \uc54c \uc218 \uc5c6\uace0, \ub610 \uadf8\uac83\uc744 \uccb4\ud5d8\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.","fourlaws.law2.two":"\ubcf8\ub798 \uc0ac\ub78c\uc740 \ud558\ub098\ub2d8\uacfc \uc0ac\uadc0\uba70 \uc0b4\ub3c4\ub85d \ucc3d\uc870\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc0ac\ub78c\uc774 \uc790\uae30 \ub9c8\uc74c\ub300\ub85c \uc0b4\uae30\ub85c \ud588\uae30 \ub54c\ubb38\uc5d0 \ub9c8\uce68\ub0b4 \ud558\ub098\ub2d8\uacfc\uc758 \uc0ac\uadd0\uc740 \ub04a\uc5b4\uc9c0\uace0 \ub9d0\uc558\uc2b5\ub2c8\ub2e4. \ud558\ub098\ub2d8 \uc5c6\uc774 \uc81c \ub9c8\uc74c\ub300\ub85c \uc0ac\ub294 \uc0ac\ub78c\uc740 \uc801\uadf9\uc801\uc77c \ub54c\ub294 \ud558\ub098\ub2d8\uaed8 \ubc18\ud56d\ud558\uac8c \ub418\uba70, \uc18c\uadf9\uc801\uc778 \ub54c\ub294 \ud558\ub098\ub2d8\uc5d0\ub300\ud558\uc5ec \ubb34\uad00\uc2ec\ud558\uac8c \ub418\ub294\ub370 \uc774\uac83\uc774 \ubc14\ub85c \uc131\uacbd\uc5d0\uc11c \ub9d0\ud558\ub294 \uc8c4\uc758 \uc99d\uac70\uc785\ub2c8\ub2e4.","fourlaws.law2.wrapup":"\uc774 \uac04\uaca9\uc744 \uc774\uc5b4\uc8fc\ub294 \uc720\uc77c\ud55c \uae38\uc744 \uc81c3\uc6d0\ub9ac\uc5d0\uc11c \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","fourlaws.main.wrapup":"\uc790\uc5f0\uacc4\uc5d0 \uc790\uc5f0 \ubc95\uce59\uc774 \uc788\ub4ef\uc774 \ud558\ub098\ub2d8\uacfc \uc0ac\ub78c \uc0ac\uc774\uc5d0\ub3c4 \uc601\uc801\uc778 \uc6d0\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4.","fourlaws.main1":"\uc0ac\uc601\ub9ac(","fourlaws.main2":"\u56db\uf9b3\u7406","fourlaws.main3":")\uc5d0 \ub300\ud558\uc5ec \ub4e4\uc5b4\ubcf4\uc168\uc2b5\ub2c8\uae4c?","header.title":"\uc608\uc2dc \ud0c0\uc774\ud2c0"}')},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.d532431a.chunk.js.map