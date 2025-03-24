import{a as b,i as g,S as L}from"./assets/vendor-DtRopbQG.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function u(t,a,o){const i="https://pixabay.com/api/",e={key:"49126238-069e1a94ee3ccc35c34a34de0",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o};return(await b.get(i,{params:e})).data}function x(t){const{webformatURL:a,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:f}=t;return`<li class="gallery-item">
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
                <p class="gallery-txt">${r}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Comments</p>
                <p class="gallery-txt">${n}</p>
              </li>
              <li class="gallery-list">
                <p class="gallery-subtitle">Downloads</p>
                <p class="gallery-txt">${f}</p>
              </li>
            </ul>
          </div>
        </li>`}function d(t){return t.map(x).join("")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let m;const s={message:"",page:null,total:1,perPage:40};c();l.form.addEventListener("submit",w);async function w(t){t.preventDefault(),l.gallery.innerHTML="",y();const a=t.target.elements.search.value.trim();s.message=a,s.page=1;try{const o=await u(s.message,s.page,s.perPage);if(c(),o.hits.length===0)c(),p(),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=d(o.hits);l.gallery.innerHTML=i,s.total=o.totalHits,h(),m=new L(".gallery a"),l.loader.classList.add("hidden")}}catch(o){l.gallery.innerHTML="",l.loader.classList.add("hidden"),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}t.target.reset()}l.btnNext.addEventListener("click",async()=>{c(),y(),s.page+=1;try{const t=await u(s.message,s.page,s.perPage),a=d(t.hits);l.gallery.insertAdjacentHTML("beforeend",a),m.refresh(),p(),h(),F()}catch{g.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"}),p()}});function y(){l.loader.classList.remove("hidden")}function p(){l.loader.classList.add("hidden")}function P(){l.btnNext.style.display=""}function c(){l.btnNext.style.display="none"}function h(){const t=Math.ceil(s.total/s.perPage);s.page>=t||s.total<s.perPage?(c(),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):P()}function F(){const a=l.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:a*2})}
//# sourceMappingURL=index.js.map
