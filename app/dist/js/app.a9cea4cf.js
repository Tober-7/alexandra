(function(){"use strict";var e={1338:function(e,t,n){var a=n(9242),o=n(3396);function r(e,t,n,a,r,i){const s=(0,o.up)("alexandra-header"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r.isAuth?((0,o.wg)(),(0,o.j4)(s,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(l,{onSetIsAuth:t[0]||(t[0]=e=>i.setIsAuth(e))})],64)}var i=n(7139),s=n.p+"img/logo.71d546ea.png";const l={class:"flex bg-dark-500"},u={class:"flex justify-between items-center relative w-full h-[46px] sm:h-[60px] md:h-[63px] lg:h-[66px] xl:h-[69px] px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-600 shadow-bottom z-[100] rounded-b-2xl border-b border-dark-200"},d={class:"flex items-center h-full"},c=(0,o._)("img",{src:s,class:"w-[24px] sm:w-[32px] md:w-[34px] lg:w-[36px] xl:w-[38px]"},null,-1),v=[c],p=(0,o._)("div",{class:"mx-4"},null,-1),m=(0,o._)("div",{class:"w-2 h-2 border border-grey-500 rounded-full"},null,-1),h=(0,o._)("div",{class:"mx-4"},null,-1),f={id:"header-category--1",class:"header-category flex h-full items-center relative text-font text-light-500 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px]"},k={id:"header-categories--1",class:"header-categories-list flex flex-col justify-start items-center absolute left-[0] top-[100%] w-full h-auto px-5 py-4 opacity-0 hover:opacity-100 rounded-b-2xl border-b border-l border-r border-dark-200 bg-dark-600 transition"},b={class:"flex items-center h-full"};function x(e,t,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",u,[(0,o._)("div",d,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>s.pushRoute("Home"))},v),r.isSmallScreen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[p,m,h,(0,o._)("span",f,[(0,o.Uk)((0,i.zw)(e.$t("header.birthdays"))+" ",1),(0,o._)("div",k,[(0,o._)("button",{onClick:t[1]||(t[1]=e=>s.pushRoute("Bd2023")),class:"text-font text-light-500 hover:text-red-600 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] transition"},"2023")])])],64))]),(0,o._)("div",b,[(0,o._)("button",{onClick:t[2]||(t[2]=t=>s.secret(.75,e.$t("header.secretHidden"),t)),class:"text-font text-light-500 hover:text-light-500 sm:hover:text-red-600 text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] transition"},(0,i.zw)(e.$t("header.secretHidden")),1)])])])}var y=n(3508),g={data(){return{isSmallScreen:!1}},created(){window.addEventListener("resize",this.myEventHandler),this.checkScreenSize()},unmounted(){window.removeEventListener("resize",this.myEventHandler)},methods:{myEventHandler(){this.checkScreenSize()},checkScreenSize(){this.isSmallScreen=window.innerWidth<640},secret(e,t,n){n.target.textContent=this.$t("header.secretVisible"),setTimeout((function(){n.target.textContent=t}),1e3*e)},pushRoute(e){y.Z.pushRoute(this.$router,e)}}},j=n(89);const A=(0,j.Z)(g,[["render",x]]);var w=A,z={components:{AlexandraHeader:w},data(){return{isAuth:!1}},methods:{setIsAuth(e){this.isAuth=e}}};const S=(0,j.Z)(z,[["render",r]]);var O=S,_=n(2483);const N=[{path:"/auth",name:"Auth",component:()=>n.e(568).then(n.bind(n,568))},{path:"/home",name:"Home",component:()=>n.e(266).then(n.bind(n,1714)),meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",name:"NotFound"},{path:"/bd2023",name:"Bd2023",component:()=>n.e(99).then(n.bind(n,5037)),meta:{requiresAuth:!0}}],H=(0,_.p7)({history:(0,_.PO)(),routes:N});H.beforeEach(((e,t,n)=>{console.log(t,e),!0===e.meta.requiresAuth?y.Z.isAuth()?n():n({name:"Auth"}):"NotFound"===e.name?y.Z.isAuth()?n({name:"Home"}):n({name:"Auth"}):"Auth"===e.name&&(y.Z.isAuth()?n({name:"Home"}):n())}));var E=H,L=n(7853),P=n(6588),q=n(4237),C=n.n(q);const T=(0,a.ri)(O),R=(0,L.o)({locale:"sk",fallbackLocale:"sk",messages:{sk:P}});T.use(E).use(R).use(C(),{position:"bottom",duration:1e3,queue:!0,pauseOnHover:!1}).mount("#app")},3508:function(e,t,n){n.d(t,{Z:function(){return r}});n(560);var a=n(8958),o=n.n(a);class r{static replaceRoute(e,t){e.replace({name:t})}static pushRoute(e,t){e.push({name:t})}static splitLines(e){return e.split("\n")}static scroll(e,t){e[t].scrollIntoView({behavior:"smooth"})}static checkPassword(e){return o().compareSync(e,"$2a$10$GJyLRv1N4EqdBqop7vkA0eR.IbA6cxf9YuRw.lqFHMZb8/LpL8AKe")}static isAuth(){const e=JSON.parse(localStorage.getItem("alexandra_auth_token"));if(!e)return!1;if(!r.checkPassword(e.password))return!1;const t=(Date.now()-e.at)/1e3/60;return!(t>60)&&(localStorage.setItem("alexandra_auth_token",JSON.stringify({password:e.password,at:Date.now()})),!0)}}},6588:function(e){e.exports=JSON.parse('{"auth":{"password":"Len pre vyvolených","placeholder":"tajné heslo...","submit":"Potvrdiť"},"header":{"birthdays":"Narodeniny","valentines":"Valentíny","anniversaries":"Výročia","secretHidden":"Najlepšia žena","secretVisible":"Láskujem ťa <3"},"home":{"home":"Domov","name":"~ Alexandra Jankovičová ~","title":"aka Anakin Skywalker","text":"Nie je žiadnym tajomstvom, že Alexandra Jankovičová je proste úžasná osoba. \\n Ale ak vám to ale ešte nedošlo, dovoľte mi, aby som vám vysvetlil prečo...","birthday":"Narodeniny","valentine":"Valentín","anniversary":"Výročie"},"bd2023":{"refs":["Úžasné vlastnosti","Ôsmy div sveta","Alexandra the builder","Krásne očká","Krejzy","Stylisch Alexandra","Všetko najlepšie!"],"ref0":{"title":"je jednoducho:","adjectives":["rozumná","krásna","inteligentná","humorná","akademická zbraň","slay","trpezlivá","prívetivá","zlatučká","spisovateľka","nádherná","fancy","empatická","baby girl","kultúrne založená","goofy","pobožná","validná","skromná","turistka","sebavedomá","stylish","baletka","verná","cute","slušná","sympatická","silly","vzdelaná","vzorná","quirky","nenáročná","smash","oddaná","lovely","vychovaná","fashionable","gorgeous","stunning","pozorná","úžasná","pôvabná","múdra","ohľaduplná","zodpovedná","vyspelá","cool","small & petite","zásadová","epická","buby","vtipná","škorpión","spanilá","sexy ;)","skvelá","cmuk","dejepisná expertka","fešná","úprimná","zaujímavá","dream girlfriend","fantastická","internet addict","dreamy","gamer girl","magická","krejzy","atraktívna","švárna dievčina","mentally stable","dobrá osoba","slejózna","čistá fantázia","ohromujúca","prekrásna","veľkolepá","spevácky nadaná","prenádherná","čarovná","milujúca","proste perfektná <3"]},"ref1":{"title":"~ Ôsmy div sveta ~","text":"Ak by divov sveta nebolo 7, ale 8, ten ôsmy by určite bol úsmev Alexandri Jankovičovej. \\n Tento úsmev je známy pre svoje liečivé účinky v oblasti psychológie a zdravotníctva. Ak budete mať šťastie, tak niekedy možno uvidíte tento objektívne nádherný úsmev naživo."},"ref2":{"title":"~ Alexandra the builder ~","text":"Mali ste už niekedy blbý deň? Zlú náladu? Pravdepodobne áno. Našťastie je tu pre nás Alexandra the builder, ktorá opraví hocičo, vrátane vašej nálady. Stačí byť v jej blízkosti a vaša nálada sa rapídne zlepší. Aj ak je váš problém hlbší ako zlá nálada, stačí sa ozvať Alexandre. Keďže vyštudovala vysokú školu života a empatie, určite vám dobre poradí a budete sa cítiť lepšie. Odporúča 9/10 terapeutov."},"ref3":{"title":"~ Krásne očká ~","text":"Niektorí ľudia roky študujú na vysokých školách, aby sa naučili profesionálne fotiť. Alexandra sa ale s touto zručnosťou narodila a od vtedy ju využíva, aby zachytila perfekciu svojich očí. Čo je ale hlavné pri jej tvorbe je určite uhol. Ako môžete vidieť, pod správnym uhlom môže krása jej očí nádherne vyniknúť, Alexandra vám to určite sama potvrdí. Ale myslím si, že obrázky hovoria sami za seba."},"ref4":{"title":"~ Krejzy ~","text":"~ Alexandra ~"},"ref5":{"title":"~ Stylish Alexandra ~","text":"Ako svetoznáma modelka, Alexandra vie ako sa správne obliecť. Pomocou svojich módnych schopností sa dokáže pripraviť na hocijakú príležitosť. Mnohí odborníci ju považujú za priekopníčku módy 21. storočia. Ale presvedčte sa sami...","style":["Alexandra v divadle","Bread","Alexandra v roku 1900","Alexandra na stanovačke","Alexandra ako Barbie"]},"ref6":{"title":"~ Všetko najlepšie! ~","text":"Moja drahá Saška, \\n prajem ti len to najlepšie v živote. Nech ostaneš taká skvelá akú ťa poznám a akú ťa mám rád. \\n Nech sa ti darí vo všetkom čomu sa venuješ a nech nikdy nezabudneš, ako moc stojíš za to a ako moc si ťa vážim. \\n\\n Týmto darčekom som ti chcel ukázať, čo všetko na tebe ľúbim, aj keď to zďaleka nie je všetko. \\n Tak dúfam, že na to naozaj nikdy nezabudneš, všetko najlepšie ešte raz, cmuk.","love":"Láskujem ťa!","btw":"A ak by ťa to náhodou zaujímalo, tak s touto stránkou som ešte určite neskončil ;)"}}}')}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],r=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{99:"f0706739",266:"a123deb8",568:"4081293f"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var v=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1338)}));a=n.O(a)})();
//# sourceMappingURL=app.a9cea4cf.js.map