import{S as p,P as h,W as v,a as y,A as L,F as M,M as x,b as S,R as P,V as W}from"./vendor.d442135c.js";const b=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))f(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function f(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};b();const d=new p,o=new h(75,window.innerWidth/window.innerHeight,.1,1e3),s=new v({canvas:document.querySelector("#bg")});s.setPixelRatio(window.devicePixelRatio);s.setSize(window.innerWidth,window.innerHeight);o.position.setZ(300);o.position.setY(30);o.position.setX(-3);s.render(d,o);const u=new y(16777215);u.position.set(5,5,5);const A=new L(16777215);d.add(u,A);const E=new M;new x;let l;var H=new Object;E.load("Door.fbx",function(e){l=new S(e),l.clipAction(e.animations[0]).play(),console.log(e.animations[0].duration),e.position.set(-4.5,5.3,30.6),e.scale.set(.1,.1,.1),e.traverse(function(r){r.isMesh&&(H[r.uuid]=r.material.clone(),r.castShadow=!0,r.receiveShadow=!0)}),d.add(e)},e=>{console.log(e)},e=>{console.log(e)});window.addEventListener("resize",()=>{s.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()});new P;const w=new W;function O(e){w.x=e.clientX/window.innerWidth*2-1,w.y=-(e.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",O,!1);var t=0;const m=.002;function R(e){t-=e.deltaY*m,t=Math.max(0,t)}window.addEventListener("wheel",R,!1);function F(e){t-=e.deltaY*m,t=Math.max(0,t)}window.addEventListener("scoll",F,!1);function N(){document.getElementById("dbgText").innerHTML=t.toString(),t<10&&(o.position.setZ(300-30*t),t>3&&t<6.5&&l&&l.setTime((t-3)*.2+.05))}function g(){requestAnimationFrame(g),N(),s.render(d,o)}g();
