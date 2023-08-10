import{h as w,p as S}from"./hooks.module.588e47ed.js";import{a as b,T as L}from"./jwt.f0e0aa9c.js";import{S as x}from"./spinner.164b1eeb.js";import{a as h}from"./http.82ebf0f1.js";import{o}from"./jsxRuntime.module.c718f406.js";import{k as E}from"./preact.module.ce248672.js";const v="/_astro/linkedin.e8891d46.svg",l="linkedInRedirectAt",c="linkedInLastPage";function U(P){const[i,t]=w(!1),[d,n]=w(""),f=i?x:v;return S(()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),a=e.get("state"),u=e.get("provider");!r||!a||u!=="linkedin"||(t(!0),h(`https://api.roadmap.sh/v1-linkedin-callback${window.location.search}`).then(({response:s,error:I})=>{if(!s?.token){n(I?.message||"Something went wrong."),t(!1);return}let m="/";const g=localStorage.getItem(l),p=localStorage.getItem(c);if(g&&p){const k=parseInt(g,10);Date.now()-k<30*1e3&&(m=p)}localStorage.removeItem(l),localStorage.removeItem(c),b.set(L,s.token,{path:"/",expires:30}),window.location.href=m}).catch(s=>{n("Something went wrong. Please try again later."),t(!1)}))},[]),o(E,{children:[o("button",{class:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:i,onClick:()=>{t(!0),h("https://api.roadmap.sh/v1-linkedin-login").then(({response:e,error:r})=>{if(!e?.loginUrl){n(r?.message||"Something went wrong."),t(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const a=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(l,Date.now().toString()),localStorage.setItem(c,a)}window.location.href=e.loginUrl}).catch(e=>{n("Something went wrong. Please try again later."),t(!1)})},children:[o("img",{src:f,alt:"Google",class:`h-[18px] w-[18px] ${i?"animate-spin":""}`}),"Continue with LinkedIn"]}),d&&o("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:d})]})}export{U as LinkedInButton};
