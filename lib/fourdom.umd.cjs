(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e.Fourdom={}))})(this,function(e){"use strict";const n=(t,s)=>{const y=(t.getAttribute("style")||"").split(";").filter(o=>!!o.trim()).reduce((o,c)=>{const r=c.split(":").map(b=>b.trim()),m=r[0],v=r[1];return o[m]=v,o},{}),l=Object.assign(y,s),p=Object.keys(l).filter(o=>!!o.trim()).reduce((o,c)=>(o+=`${c}: ${l[c]};`,o),"");t.setAttribute("style",p)},d=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)},a=(t,s)=>t.classList.contains(s),u=(t,s)=>{const i=typeof s=="string"?[s]:s;t.classList.add(...i)},f=(t,s)=>{const i=typeof s=="string"?[s]:s;t.classList.remove(...i)};e.addClass=u,e.css=n,e.hasClass=a,e.removeClass=f,e.removeElement=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
