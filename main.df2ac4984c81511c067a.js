(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n){var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],o=document.querySelector("body"),a=document.querySelector('button[data-action="start"]'),c=document.querySelector('button[data-action="stop"]'),r=null,l=function(){var t=d(0,e.length-1);o.style.backgroundColor=e[t],console.log(o.style.backgroundColor+" is applied")},d=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)};a.addEventListener("click",(function(){r=setInterval(l,1e3),a.disabled=!0})),c.addEventListener("click",(function(){clearInterval(r),a.disabled=!1}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.df2ac4984c81511c067a.js.map