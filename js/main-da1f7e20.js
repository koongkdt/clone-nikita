(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();let g=[],u=!1,h=!1;const E=`
System: Nikita AI Agent Initialized
---------------------------------------------------------
>> Phase 1: Foundation ✅

- [x] Market Sentiment Analysis Activated

- [x] Website & Community Portal Deployed

- [x] Twitter (X) Account Connected

- [x] Agent Launched on Virtuals Protocol

- [x] Roadmap v1 Announced

- [x] Agent Deployed on TikTok

- [x] Agent Deployed on Instagram

- [x] Alpha Hunting Module Enhancement

>> Phase 2: Intelligence Expansion

- [x] AI Market-Intelligence Terminal Launch

- [ ] Daily AI Newsletter Activation

>> Phase 3: Core Modules Upgrade

- [ ] Ecosystem Insights Module Release

- [ ] In-depth Project Analysis Module Release

- [ ] Interaction with Other Agents

>> Phase 4: Ecosystem Growth

- [ ] Cross-Chain Integration

- [ ] Alpha Hunting DAO Establishment

- [ ] API Access Rollout for Devs & Agents

- [ ] Staking Pool Activation

>> Phase 5: [ REDACTED ]

Status: 🚀 Nikita AI evolving to empower degen tools, virtuals, and beyond. Stay tuned.
`;async function l(o,t,a=10){let s=0;return o.textContent="",new Promise(e=>{function n(){s<t.length?(o.textContent+=t.charAt(s),s++,setTimeout(n,a)):e()}n()})}const y=[{text:"Test 1.",date:"28 November 2024, 24:00"},{text:"Latest market analysis shows increasing adoption of AI-driven trading strategies. Our algorithms consistently outperform traditional methods.",date:"23 November 2024, 17:30"},{text:"New partnership announcement: Expanding our ecosystem with major DeFi protocols. Stay tuned for more updates!",date:"22 November 2024, 16:45"},{text:"Technical update: Enhanced AI models now processing market data 3x faster. Improved accuracy in price predictions.",date:"21 November 2024, 15:20"},{text:"Community milestone: Over 10k active users in our ecosystem! Thank you for your continued support.",date:"20 November 2024, 14:10"}];let d=null;async function x(){try{let o;if(window.location.hostname.includes("localhost")){const n=await fetch("http://localhost:8000/api/tweets",{method:"GET",headers:{Accept:"application/json"}});n.ok?o=await n.json():(console.log("API error, using mock data"),o=y)}else{const e=`${window.location.origin}/api/tweets`;o=await(await fetch(e)).json()}const t=document.getElementById("tweets-container");t.innerHTML="";const a=document.createElement("div");a.className="executed-command",a.textContent="> $ show latest_research",t.appendChild(a);const s=o.slice(0,10);for(const e of s){const n=document.createElement("div");n.className="tweet fade-in";const i=document.createElement("a");i.href="link_Twitter",i.target="_blank",i.className="tweet-link";const c=document.createElement("p");c.className="tweet-content";const r=document.createElement("span");r.className="tweet-date",r.textContent=e.date,i.appendChild(c),n.appendChild(i),n.appendChild(r),t.appendChild(n),await l(c,e.text,5)}setTimeout(()=>{h=!1,m()},500)}catch(o){console.error("Error:",o),g=y;const t=document.getElementById("tweets-container");t.innerHTML="";const a=document.createElement("div");a.className="executed-command",a.textContent="> $ show latest_research",t.appendChild(a);for(const s of g){const e=document.createElement("div");e.className="tweet fade-in";const n=document.createElement("a");n.href="link_Twitter",n.target="_blank",n.className="tweet-link";const i=document.createElement("p");i.className="tweet-content";const c=document.createElement("span");c.className="tweet-date",c.textContent=s.date,n.appendChild(i),e.appendChild(n),e.appendChild(c),t.appendChild(e),await l(i,s.text,5)}setTimeout(()=>{h=!1,m()},500)}}async function A(){const o=document.getElementById("tweets-container");o.innerHTML="";const t=document.createElement("div");t.className="executed-command",t.textContent="> $ show roadmap",o.appendChild(t);const a=document.createElement("div");a.className="roadmap fade-in",o.appendChild(a);const s=E.split(`


`);for(const e of s)if(e.trim()){const n=e.split(`
`),i=n[0],c=n.slice(1),r=document.createElement("p");r.className="section-title",a.appendChild(r),await l(r,i,5);const p=document.createElement("div");p.className="section-content",a.appendChild(p);for(const f of c)if(f.trim()){const w=document.createElement("p");p.appendChild(w),await l(w,f,5)}}setTimeout(()=>{h=!1,m()},500)}function m(){if(u)return;document.querySelectorAll(".command-options").forEach(a=>a.remove()),d&&document.removeEventListener("keydown",d);const t=document.createElement("div");t.className="command-options",t.innerHTML=`
        <div class="terminal-options">
            <div class="terminal-button" data-option="research">$ show latest_research</div>
            <div class="terminal-button" data-option="roadmap">$ show roadmap</div>
        </div>
    `,document.getElementById("tweets-container").appendChild(t),C()}function C(){const o=document.querySelectorAll(".terminal-button");let t=0;o[t].classList.add("active");function a(){o.forEach(s=>s.classList.remove("active")),o[t].classList.add("active")}d=function(s){switch(s.key){case"ArrowUp":case"ArrowLeft":t=(t-1+o.length)%o.length,a();break;case"ArrowDown":case"ArrowRight":t=(t+1)%o.length,a();break;case"Enter":const e=o[t];v(e.dataset.option);break}},document.addEventListener("keydown",d),o.forEach((s,e)=>{s.addEventListener("click",()=>{t=e,a(),v(s.dataset.option)})})}async function v(o){u=!0,d&&document.removeEventListener("keydown",d);const t=document.getElementById("tweets-container"),a=o==="research"?"$ show latest_research":"$ show roadmap";t.innerHTML="";const s=document.createElement("div");s.className="executed-command",s.textContent=`> ${a}`,t.appendChild(s),o==="research"?await x():await A(),u=!1}document.addEventListener("DOMContentLoaded",()=>{m()});
