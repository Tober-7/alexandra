"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[198],{8198:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var r=s(3396),l=s(7139),o=s(9242);const a={class:"flex flex-col justify-center items-center h-full"},x={class:"flex flex-col justify-between items-center w-[350px] h-[240px] sm:w-[450px] sm:h-[280px] md:w-[550px] md:h-[320px] lg:w-[650px] lg:h-[360px] xl:w-[750px] xl:h-[400px] p-12 bg-transparent"},n={class:"text-font text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-light-500"},p=["placeholder"],i=(0,r._)("hr",{class:"my-3 sm:my-5 md:my-6 border-none"},null,-1),d={type:"submit",class:"w-16 sm:w-20 md:w-24 py-1 text-font text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-light-500 sm:hover:text-red-600 transition"};function u(t,e,s,u,m,h){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",x,[(0,r._)("span",n,(0,l.zw)(t.$t("auth.password")),1),(0,r._)("form",{onSubmit:e[1]||(e[1]=(0,o.iM)((t=>h.submit()),["prevent"])),class:"flex flex-col items-center w-full"},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>m.password=t),type:"password",placeholder:t.$t("auth.placeholder"),autocomplete:"off",class:"w-full px-4 pb-2 border-b border-grey-500 hover:border-light-500 bg-transparent text-font text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-light-500 placeholder:text-grey-500 focus:placeholder:text-transparent focus:outline-none transition"},null,8,p),[[o.nr,m.password]]),i,(0,r._)("button",d,(0,l.zw)(t.$t("auth.submit")),1)],32)])])}var m=s(3508),h={emits:["setIsAuth"],mounted(){this.$emit("setIsAuth",!1)},data(){return{password:""}},methods:{submit(){if(this.password){if(m.Z.checkPassword(this.password))return localStorage.setItem("alexandra_auth_token",JSON.stringify({password:this.password,at:Date.now()})),this.$toast.success("Welcome!"),m.Z.goTo(this.$router,"Home");this.$toast.error("Wrong Password"),this.password=""}}}},c=s(89);const w=(0,c.Z)(h,[["render",u]]);var f=w}}]);
//# sourceMappingURL=198.350dcdf3.js.map