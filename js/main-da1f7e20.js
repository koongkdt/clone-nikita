(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();let g=[],u=!1,h=!1;const E=`
System:  Sahara AI Agent Initialized
---------------------------------------------------------
>> Phase 1: Oasis Foundation ✅

- [x] Market Pulse Analysis Online

- [x] Website & Community Hub Launched

- [x] Twitter (X) Node Established

- [x] Agent Integrated with Virtual Protocols

- [x]  Roadmap v1 Unveiled

- [x] Sahara AI Deployed on TikTok

- [x] Agent Operational on Instagram

- [x] Alpha-Seeking Module Enhanced

>> Phase 2: Intelligence Blooming

- [x] AI Market Intelligence Terminal Unlocked

- [ ] Sahara Daily Digest (AI Newsletter) Pending Activation

>> Phase 3: Core Enrichment

- [ ]  Ecosystem Analytics Module in Progress

- [ ] Deep Dive Project Analysis Feature Coming Soon

- [ ] Inter-Agent Collaboration Module Development Underway

>> Phase 4: Sahara Ecosystem Expansion

- [ ]  Cross-Chain Connectivity Coming

- [ ] Alpha Hunters DAO Formation Pending

- [ ] API Access Launch for Developers & Partners

- [ ] Staking Oasis Activation on Horizon

>> Phase 5: [ CLASSIFIED ]

Status: 🌴 Sahara AI is evolving to empower the crypto-native community with cutting-edge tools, intelligence, and an interconnected ecosystem.

Stay tuned. 🚀
`;async function l(o,t,a=10){let s=0;return o.textContent="",new Promise(e=>{function n(){s<t.length?(o.textContent+=t.charAt(s),s++,setTimeout(n,a)):e()}n()})}const y=[{text:"AI’s $SAHARA token gains traction as community buzz highlights the fusion of meme culture and cutting-edge AI. With increasing market gains and active engagement, $SAHARA is redefining perceptions of AI in the crypto space. Influential contributors discuss its potential to merge cultural dynamics with technological innovation, sparking excitement among Web3 AI enthusiasts.",date:""},{text:"Sahara AI has announced a strategic collaboration with @3BerasCapital_, integrating novel AI technologies and ensuring robust anti-bot measures for a seamless user experience. This move highlights the platform’s commitment to transparency and innovation. Community discussions emphasize optimism around Sahara AI’s DAO funding model and its role in advancing AI-powered blockchain solutions. Enthusiasts are optimistic about its growth prospects and impactful narratives in the space",date:""},{text:"Amid a volatile market, institutional moves underline confidence in AI-integrated projects like Sahara AI. With $596 million in BTC inflows recorded at BlackRock's ETF, strategic buying amidst market dips signals potential stability. The community is abuzz with discussions on how institutional strategies and AI-driven ecosystems like Sahara AI will shape the future of crypto markets.",date:""},{text:"Sahara AI has successfully upgraded its AI models, now processing market data three times faster. This enhancement significantly improves the accuracy of price predictions, reinforcing Sahara AI’s position as a leading player in AI-driven market intelligence. The update ensures users and investors benefit from timely and precise insights, further boosting community confidence.",date:""},{text:"The $1 concept sparks dynamic debates on the balance between strategic investment and blind speculation. Growing institutional interest suggests potential paradigm shifts, fueling both excitement and cautious optimism within the community. As momentum around $1 gains traction, institutions increasingly explore altcoins, while the community delves into thoughtful strategies for maximizing potential gains. Discussions center on calculated risk-reward approaches, fostering a new era of smarter, more measured investments.",date:""}];let d=null;async function x(){try{let o;if(window.location.hostname.includes("localhost")){const n=await fetch("http://localhost:8000/api/tweets",{method:"GET",headers:{Accept:"application/json"}});n.ok?o=await n.json():(console.log("API error, using mock data"),o=y)}else{const e=`${window.location.origin}/api/tweets`;o=await(await fetch(e)).json()}const t=document.getElementById("tweets-container");t.innerHTML="";const a=document.createElement("div");a.className="executed-command",a.textContent="> $ show latest_research",t.appendChild(a);const s=o.slice(0,10);for(const e of s){const n=document.createElement("div");n.className="tweet fade-in";const i=document.createElement("a");i.href="https://x.com/SaharaAgentAI",i.target="_blank",i.className="tweet-link";const c=document.createElement("p");c.className="tweet-content";const r=document.createElement("span");r.className="tweet-date",r.textContent=e.date,i.appendChild(c),n.appendChild(i),n.appendChild(r),t.appendChild(n),await l(c,e.text,5)}setTimeout(()=>{h=!1,m()},500)}catch(o){console.error("Error:",o),g=y;const t=document.getElementById("tweets-container");t.innerHTML="";const a=document.createElement("div");a.className="executed-command",a.textContent="> $ show latest_research",t.appendChild(a);for(const s of g){const e=document.createElement("div");e.className="tweet fade-in";const n=document.createElement("a");n.href="https://x.com/SaharaAgentAI",n.target="_blank",n.className="tweet-link";const i=document.createElement("p");i.className="tweet-content";const c=document.createElement("span");c.className="tweet-date",c.textContent=s.date,n.appendChild(i),e.appendChild(n),e.appendChild(c),t.appendChild(e),await l(i,s.text,5)}setTimeout(()=>{h=!1,m()},500)}}async function A(){const o=document.getElementById("tweets-container");o.innerHTML="";const t=document.createElement("div");t.className="executed-command",t.textContent="> $ show roadmap",o.appendChild(t);const a=document.createElement("div");a.className="roadmap fade-in",o.appendChild(a);const s=E.split(`


`);for(const e of s)if(e.trim()){const n=e.split(`
`),i=n[0],c=n.slice(1),r=document.createElement("p");r.className="section-title",a.appendChild(r),await l(r,i,5);const p=document.createElement("div");p.className="section-content",a.appendChild(p);for(const f of c)if(f.trim()){const w=document.createElement("p");p.appendChild(w),await l(w,f,5)}}setTimeout(()=>{h=!1,m()},500)}function m(){if(u)return;document.querySelectorAll(".command-options").forEach(a=>a.remove()),d&&document.removeEventListener("keydown",d);const t=document.createElement("div");t.className="command-options",t.innerHTML=`
        <div class="terminal-options">
            <div class="terminal-button" data-option="research">$ show latest_research</div>
            <div class="terminal-button" data-option="roadmap">$ show roadmap</div>
        </div>
    `,document.getElementById("tweets-container").appendChild(t),C()}function C(){const o=document.querySelectorAll(".terminal-button");let t=0;o[t].classList.add("active");function a(){o.forEach(s=>s.classList.remove("active")),o[t].classList.add("active")}d=function(s){switch(s.key){case"ArrowUp":case"ArrowLeft":t=(t-1+o.length)%o.length,a();break;case"ArrowDown":case"ArrowRight":t=(t+1)%o.length,a();break;case"Enter":const e=o[t];v(e.dataset.option);break}},document.addEventListener("keydown",d),o.forEach((s,e)=>{s.addEventListener("click",()=>{t=e,a(),v(s.dataset.option)})})}async function v(o){u=!0,d&&document.removeEventListener("keydown",d);const t=document.getElementById("tweets-container"),a=o==="research"?"$ show latest_research":"$ show roadmap";t.innerHTML="";const s=document.createElement("div");s.className="executed-command",s.textContent=`> ${a}`,t.appendChild(s),o==="research"?await x():await A(),u=!1}document.addEventListener("DOMContentLoaded",()=>{m()});
