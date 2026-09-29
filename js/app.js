const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

function getCart(){ return JSON.parse(localStorage.getItem("novaCart") || "[]"); }
function saveCart(cart){ localStorage.setItem("novaCart", JSON.stringify(cart)); }
function getWishlist(){ return JSON.parse(localStorage.getItem("novaWishlist") || "[]"); }

function updateCartCount(){
  const count=getCart().reduce((n,i)=>n+i.quantity,0);
  $$(".cart-count").forEach(el=>el.textContent=count);
}

function showToast(message){
  const t=$("#toast"); if(!t)return;
  t.textContent=message; t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}

function addToCart(id, quantity=1){
  const cart=getCart(), item=cart.find(i=>i.id===id);
  if(item)item.quantity+=quantity; else cart.push({id,quantity});
  saveCart(cart); updateCartCount(); showToast("Added to your bag");
}

function productCard(p){
  const wished=getWishlist().includes(p.id);
  return `<article class="product-card reveal">
    <a class="product-image" href="product.html?id=${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <span class="product-badge">${p.id<=4?"NEW":"EDIT"} </span>
      <button class="heart ${wished?"liked":""}" onclick="event.preventDefault();toggleWishlist(${p.id})">${wished?"♥":"♡"}</button>
      <span class="quick-add" onclick="event.preventDefault();addToCart(${p.id})">Add to bag ↗</span>
    </a>
    <div class="product-card-body">
      <div class="product-meta"><span>${p.category}</span><span>★ ${p.rating}</span></div>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="price">₹${p.price.toLocaleString()} <del>₹${p.oldPrice.toLocaleString()}</del></div>
    </div>
  </article>`;
}

function toggleWishlist(id){
  let list=getWishlist();
  list=list.includes(id)?list.filter(x=>x!==id):[...list,id];
  localStorage.setItem("novaWishlist",JSON.stringify(list));
  showToast(list.includes(id)?"Saved to wishlist":"Removed from wishlist");
  if($("#productGrid")) renderShop();
  if($("#featuredGrid")) renderFeatured();
}

function renderFeatured(){
  const grid=$("#featuredGrid"); if(!grid)return;
  grid.innerHTML=products.slice(0,4).map(productCard).join("");
  observeReveals();
}

function renderShop(){
  const grid=$("#productGrid"); if(!grid)return;
  let list=[...products];
  const q=($("#searchInput")?.value||"").trim().toLowerCase();
  const cat=$("#categoryFilter")?.value||"all";
  const price=$("#priceFilter")?.value||"all";
  const sort=$("#sortFilter")?.value||"featured";
  if(q)list=list.filter(p=>(p.name+" "+p.category).toLowerCase().includes(q));
  if(cat!=="all")list=list.filter(p=>p.category===cat);
  if(price==="under2000")list=list.filter(p=>p.price<2000);
  if(price==="2000-5000")list=list.filter(p=>p.price>=2000&&p.price<=5000);
  if(price==="over5000")list=list.filter(p=>p.price>5000);
  if(sort==="low")list.sort((a,b)=>a.price-b.price);
  if(sort==="high")list.sort((a,b)=>b.price-a.price);
  if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
  $("#resultCount").textContent=`${list.length} product${list.length!==1?"s":""}`;
  grid.innerHTML=list.length?list.map(productCard).join(""):`<div class="empty-state"><div class="empty-icon">⌕</div><h2>No products found.</h2><p>Try a different search or filter.</p></div>`;
  observeReveals();
}

function initShop(){
  if(!$("#productGrid"))return;
  const params=new URLSearchParams(location.search), category=params.get("category");
  if(category && ["Sneakers","Audio","Accessories","Apparel"].includes(category))$("#categoryFilter").value=category;
  ["searchInput","categoryFilter","priceFilter","sortFilter"].forEach(id=>$("#"+id)?.addEventListener(id==="searchInput"?"input":"change",renderShop));
  $("#clearFilters")?.addEventListener("click",()=>{$("#searchInput").value="";$("#categoryFilter").value="all";$("#priceFilter").value="all";$("#sortFilter").value="featured";renderShop()});
  renderShop();
}

function header(){
  const root=$("#siteHeader"); if(!root)return;
  root.innerHTML=`<header class="site-header"><a class="brand" href="index.html">NOVA<span>®</span></a>
  <nav><a href="index.html">Home</a><a href="products.html">Shop</a><a href="products.html?category=Sneakers">Sneakers</a><a href="about.html">About</a></nav>
  <div class="header-actions"><button class="icon-btn theme-toggle" aria-label="Toggle theme">◐</button><a class="bag-link" href="cart.html">Bag <span class="cart-count">0</span></a><button class="menu-btn">☰</button></div></header>`;
  $(".theme-toggle").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("novaTheme",document.body.classList.contains("light")?"light":"dark")};
  $(".menu-btn").onclick=()=>document.body.classList.toggle("nav-open");
  if(localStorage.getItem("novaTheme")==="light")document.body.classList.add("light");
}

function footer(){
  const root=$("#siteFooter"); if(!root)return;
  root.innerHTML=`<footer><div class="footer-top"><div><a class="brand" href="index.html">NOVA<span>®</span></a><p>Digital commerce, reimagined.</p></div><div><b>Explore</b><a href="products.html">Shop all</a><a href="products.html?category=Sneakers">Sneakers</a><a href="products.html?category=Audio">Audio</a></div><div><b>Company</b><a href="about.html">About Nova</a><a href="#">Contact</a><a href="#">Careers</a></div><div><b>Social</b><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a><a href="#">GitHub ↗</a></div></div><div class="footer-bottom"><span>© 2026 Nova. Portfolio project.</span><span>Built with HTML · CSS · JavaScript</span></div></footer>`;
}

function observeReveals(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});
  $$(".reveal:not(.visible)").forEach(el=>io.observe(el));
}

document.addEventListener("DOMContentLoaded",()=>{
  header();footer();updateCartCount();renderFeatured();initShop();observeReveals();
  $("#newsletterForm")?.addEventListener("submit",e=>{e.preventDefault();e.target.reset();showToast("Welcome to Nova.");});
});