import{a as f,i as c,S as b}from"./assets/vendor-DtRopbQG.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function u(t,a,o){const i="https://pixabay.com/api/",e={key:"49126238-069e1a94ee3ccc35c34a34de0",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o};return(await f.get(i,{params:e})).data}function x(t){const{webformatURL:a,largeImageURL:o,tags:i,likes:e,views:s,comments:n,downloads:h}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${i}"
            />
          </a>
          <div class="gallery-wrapper">
            <ul class="gallery-group">
              <li class="gallery-list">
                <p class="gallery-subtitle">Likes</p>
                <p class="gallery-txt">${e}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Views</p>
                <p class="gallery-txt">${s}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Comments</p>
                <p class="gallery-txt">${n}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Downloads</p>
                <p class="gallery-txt">${h}</p>
              </li>
            </ul>
          </div>
        </li>`}function m(t){return t.map(x).join("")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let d;const r={message:"",page:null,total:1,perPage:40};g();l.form.addEventListener("submit",L);async function L(t){t.preventDefault(),l.gallery.innerHTML="";const a=t.target.elements.search.value.trim();r.message=a,r.page=1;try{const o=await u(r.message,r.page,r.perPage);if(o.hits.length===0)g(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=m(o.hits);l.gallery.innerHTML=i,r.total=o.totalHits,y(),d=new b(".gallery a")}}catch(o){l.gallery.innerHTML="",l.loader.classList.add("hidden"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}t.target.reset()}l.btnNext.addEventListener("click",async()=>{g(),w(),r.page+=1;try{const t=await u(r.message,r.page,r.perPage),a=m(t.hits);l.gallery.insertAdjacentHTML("beforeend",a),d.refresh(),p(),y(),F()}catch{c.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),p()}});function w(){l.loader.classList.remove("hidden")}function p(){l.loader.classList.add("hidden")}function P(){l.btnNext.style.display=""}function g(){l.btnNext.style.display="none"}function y(){const t=Math.ceil(r.total/r.perPage);r.page>=t||r.total<r.perPage?(g(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):P()}function F(){const a=l.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:a*2})}
//# sourceMappingURL=index.js.map
