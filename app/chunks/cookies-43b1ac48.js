import{C as s}from"./vendor-c667ba6d.js";let m=s([]),p=s(),d=s(),u=s(),f=s(),b=s(),h=s(),S=s(0),w=s([]),y=s([]),I=s([]),O=s([]),k=s(),i={isLogin:void 0};i=typeof Storage!="undefined"?JSON.parse(localStorage.getItem("user")):JSON.parse(sessionStorage.getItem("user")),i||(i={isLogin:void 0});let g=s(i);g.subscribe(o=>{typeof Storage!="undefined"?window.localStorage.setItem("user",JSON.stringify(o)):window.sessionStorage.setItem("user",JSON.stringify(o))});const a="https://catalog.ms-global.co.il",v=a+"/search",e=a+"/client-api/",J=e+"albums/",N=e+"images/",C=e+"sizes/",L=e+"colors/",_=e+"logos/",j=a+"/api/set_csrf_token",x=a+"/contact-form",A=a+"/cart-form",q=a+"/api/get-token/",z=a+"/api/who-am-i/",B=a+"/api/logout/",G=a+"/api/logs/",P="https://catalog.ms-global.co.il/admin-api/get-all-campaigns/",R="https://catalog.ms-global.co.il",U="https://res.cloudinary.com/ms-global/image/upload/";function W(o){let r=o+"=",n=decodeURIComponent(document.cookie).split(";");for(let l=0;l<n.length;l++){let t=n[l];for(;t.charAt(0)==" ";)t=t.substring(1);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return""}export{q as A,a as B,U as C,j as G,G as L,N as P,A as S,z as W,S as _,B as a,h as b,p as c,d,m as e,O as f,I as g,f as h,w as i,y as j,W as k,b as l,R as m,P as n,v as o,u as p,x as q,J as r,k as s,_ as t,g as u,C as v,L as w};
