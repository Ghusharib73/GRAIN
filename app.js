const PRODUCT_IMAGES = {
  Men: [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=85'
  ],
  Women: [
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85'
  ],
  Watches: [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=900&q=85'
  ],
  Perfumes: [
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=900&q=85'
  ],
  Shoes: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85'
  ]
};

const categoryCards = [
  {name:'Men', price:'From PKR 9,900', image:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85'},
  {name:'Women', price:'From PKR 8,900', image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85'},
  {name:'Watches', price:'From PKR 18,500', image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85'},
  {name:'Perfumes', price:'From PKR 7,500', image:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85'},
  {name:'Shoes', price:'From PKR 12,900', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85'}
];

const heroSlides = [
  {title:'Modern tailoring\nfor men.', subtitle:'MEN / NEW SEASON', text:'Precision cuts, softened structure, and pieces built to move with you.', image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90'},
  {title:'A softer\nkind of statement.', subtitle:'WOMEN / GRAIN EDIT', text:'Fluid silhouettes and subtle textures designed to feel effortless.', image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=90'},
  {title:'Objects with\nquiet presence.', subtitle:'WATCHES / TIMEKEEPING', text:'Refined watch faces and tactile finishes, selected for daily ritual.', image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=2200&q=90'},
  {title:'Leave a\nlasting trace.', subtitle:'PERFUME / SCENT', text:'Layered fragrance made for skin, close conversations, and long evenings.', image:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=2200&q=90'},
  {title:'Finish the look\nfrom the ground up.', subtitle:'SHOES / ESSENTIALS', text:'Clean profiles, premium materials, and the right amount of attitude.', image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2200&q=90'}
];

const productSeed = [
  ['Alden Relaxed Overshirt','Men',16900,['S','M','L','XL'],['Stone','Black'],0],
  ['Noir Tailored Trouser','Men',14900,['S','M','L','XL'],['Black','Charcoal'],1],
  ['Morrow Knit Polo','Men',12900,['S','M','L','XL'],['Sand','Espresso'],2],
  ['Atelier Linen Set','Women',18900,['XS','S','M','L'],['Ivory','Olive'],0],
  ['Muse Draped Top','Women',9900,['XS','S','M','L'],['Pearl','Black'],1],
  ['Sable Column Dress','Women',22900,['XS','S','M','L'],['Black','Cocoa'],2],
  ['Arc Automatic 01','Watches',38500,['40'],['Steel','Black'],0],
  ['No. 07 Field Watch','Watches',29700,['40'],['Gold','Brown'],1],
  ['Linea Mini Watch','Watches',24900,['39'],['Steel','White'],2],
  ['Noir Eau de Parfum','Perfumes',8900,['50ml','100ml'],['Black'],0],
  ['Amber Study','Perfumes',9900,['50ml','100ml'],['Amber'],1],
  ['Terre No. 4','Perfumes',11400,['50ml','100ml'],['Olive'],2],
  ['Form Runner 01','Shoes',16900,['39','40','41','42','43','44'],['Bone','Black'],0],
  ['Court Low 02','Shoes',14900,['39','40','41','42','43','44'],['White','Cocoa'],1],
  ['Mono Leather Loafer','Shoes',19900,['40','41','42','43','44'],['Black','Espresso'],2],
  ['Axis Leather Bag','Women',21900,['One Size'],['Black','Cocoa'],1],
  ['Frame Crossbody','Men',17900,['One Size'],['Taupe','Black'],2],
  ['Daily Card Holder','Perfumes',7900,['One Size'],['Black','Tan'],0],
  ['Studio Shoulder Bag','Shoes',20900,['One Size'],['Black','Ivory'],1],
  ['GRAIN Travel Tote','Watches',15900,['One Size'],['Canvas','Black'],2]
].map((p,i)=>({id:i+1,name:p[0],category:p[1],price:p[2],sizes:p[3],colors:p[4],imageIndex:p[5],images:PRODUCT_IMAGES[p[1]].length?PRODUCT_IMAGES[p[1]]:PRODUCT_IMAGES.Men,rating:4+(i%2)*.5,bestseller:i%3!==1,featured:i<12||[12,16,18].includes(i),description:`A considered GRAIN essential built with a calm silhouette, tactile finish, and everyday versatility. Designed to layer, repeat, and keep.`}));

const state = {
  wishlist: JSON.parse(localStorage.getItem('grainWishlist')||'[]'),
  cart: JSON.parse(localStorage.getItem('grainCart')||'[]'),
  heroIndex:0,
  heroTimer:null,
  quickProduct:null,
  quickImageIndex:0,
  shopCategory:'all',
  search:'',
  minPrice:'',
  maxPrice:'',
  filterCategory:'all',
  filterSize:'all'
};

function persist(){localStorage.setItem('grainWishlist',JSON.stringify(state.wishlist));localStorage.setItem('grainCart',JSON.stringify(state.cart));}
function formatPrice(p){return new Intl.NumberFormat('en-PK',{style:'currency',currency:'PKR',maximumFractionDigits:0}).format(p).replace('PKR','PKR ')}
function esc(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}

function setupShell(){
  document.getElementById('site-nav').innerHTML = `
    <header class="site-nav" id="siteNav">
      <div class="nav-inner">
        <div class="nav-left">
          <button class="menu-button" id="menuButton" aria-label="Open menu"><span></span><span></span></button>
          <nav class="nav-page-links" aria-label="Main navigation">
            <a href="index.html">Home</a>
            <a href="shop.html#all-products">Shop</a>
            <a href="about.html">About Us</a>
          </nav>
        </div>
        <a class="brand-mark" href="index.html" aria-label="GRAIN home">GRAIN<span class="brand-dot">.</span></a>
        <div class="nav-right">
          <button class="nav-icon" id="globalSearchBtn" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2"></circle><path d="m16 16 5 5"></path></svg></button>
          <button class="nav-icon" id="wishlistOpen" aria-label="Wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.7 4.7 0 0 1 8 4.2c1.5 0 2.8.7 4 2 1.2-1.3 2.5-2 4-2a4.7 4.7 0 0 1 4.8 4.5Z"></path></svg></button>
          <button class="nav-icon" id="cartOpen" aria-label="Cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 8.5V7a4.5 4.5 0 0 1 9 0v1.5"></path><path d="M5 8.5h14l-1 11H6l-1-11Z"></path></svg></button>
        </div>
      </div>
    </header>
    <div class="menu-backdrop" id="menuBackdrop"></div>
    <aside class="menu-panel" id="menuPanel" aria-hidden="true">
      <div class="menu-top">
        <a class="menu-brand" href="index.html" aria-label="GRAIN home">GRAIN<span class="brand-dot">.</span></a>
        <button class="menu-close" id="menuClose" aria-label="Close menu">×</button>
      </div>
      <div class="menu-scroll">
        <div class="menu-inner">
          <p class="eyebrow">Browse GRAIN</p>
          <nav class="menu-links">
            <a href="shop.html?category=Men"><span>Men</span></a>
            <a href="shop.html?category=Women"><span>Women</span></a>
            <a href="shop.html?category=Watches"><span>Watches</span><b>+</b></a>
            <a href="shop.html?category=Perfumes"><span>Perfumes</span><b>+</b></a>
            <a href="shop.html?category=Shoes"><span>Shoes</span><b>+</b></a>
            <a href="shop.html"><span>All Products</span></a>
          </nav>
        </div>
      </div>
    </aside>`;

  const footer = document.getElementById('site-footer');
  footer.className='site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-brand">GRAIN<span class="brand-dot">.</span></div>
      <div class="footer-grid">
        <div class="footer-col"><h4>Contact Us</h4><div class="footer-contact"><a href="mailto:ghusharibsiddiqui2009@gmail.com">✉ ghusharibsiddiqui2009@gmail.com</a><a href="tel:+923310400226">◉ +92 331 0400226</a><a href="https://wa.me/923310400226" target="_blank" rel="noreferrer">◔ WhatsApp channel</a></div><div class="social-row"><a href="https://www.facebook.com/profile.php?id=100080684961618" target="_blank" rel="noreferrer">f</a><a href="#" aria-label="X">𝕏</a><a href="https://www.instagram.com/ghusharibsid/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer">🅾</a><a href="#" aria-label="Pinterest">p</a></div></div>
        <div class="footer-col"><h4>About The Brand</h4><div class="footer-links"><a href="about.html">About Us</a><a href="index.html">FAQs</a><a href="index.html">Store Locator</a></div></div>
        <div class="footer-col"><h4>Customer Care</h4><div class="footer-links"><a href="index.html">Get In Touch</a><a href="index.html">Returns &amp; Exchanges</a><a href="index.html">Privacy Policy</a><a href="index.html">Terms of Service</a><a href="index.html">Track Order</a></div></div>
        <div class="footer-col newsletter"><h4>Newsletter</h4><p>Notes from GRAIN: new drops, considered edits, and things worth noticing.</p><form class="newsletter-form" id="newsletterForm"><input type="email" placeholder="Your email address" aria-label="Email" required><button type="submit" aria-label="Subscribe">→</button></form></div>
      </div><div class="footer-bottom">POWERED BY GRAIN.</div>
    </div>`;

  document.getElementById('global-ui').innerHTML = `
    <div class="drawer-backdrop" id="drawerBackdrop"></div>
    <aside class="side-drawer" id="sideDrawer"><div class="drawer-head"><h3 id="drawerTitle">Your Cart</h3><button class="drawer-close" id="drawerClose">×</button></div><div class="drawer-body" id="drawerBody"></div><div class="drawer-foot" id="drawerFoot"></div></aside>
    <div class="search-overlay" id="searchOverlay"><button class="search-close" id="searchClose">×</button><div class="search-modal"><p class="eyebrow" style="color:rgba(255,255,255,.45)">Search GRAIN</p><input id="globalSearchInput" placeholder="Search the collection..." autocomplete="off"><div class="search-results" id="globalSearchResults"></div></div></div>
    <a class="whatsapp-fab" href="https://wa.me/923310400226" target="_blank" rel="noreferrer" aria-label="Chat with GRAIN on WhatsApp">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path class="wa-ring" d="M24 6.5c-9.66 0-17.5 7.72-17.5 17.25 0 3.03.8 5.88 2.2 8.36L6.8 41.5l9.65-1.85A17.53 17.53 0 0 0 24 41c9.66 0 17.5-7.72 17.5-17.25S33.66 6.5 24 6.5Z"/>
        <path class="wa-phone" d="M18.05 15.2c-.48 0-.93.27-1.18.7l-1.7 2.96c-.23.4-.24.89-.04 1.31 1.72 3.59 4.66 6.53 8.25 8.25.42.2.91.19 1.31-.04l2.96-1.7c.43-.25.7-.7.7-1.18v-1.05c0-.55-.34-1.04-.85-1.23l-2.62-.98a1.34 1.34 0 0 0-1.49.38l-.9 1.1a11.83 11.83 0 0 1-3.6-3.6l1.1-.9c.41-.34.56-.9.38-1.39l-.98-2.62a1.32 1.32 0 0 0-1.23-.86h-1.11Z"/>
      </svg>
    </a>
    <div class="toast" id="toast"></div>`;

  bindShell();
  if(document.body.dataset.page==='shop'){document.getElementById('siteNav').classList.add('scrolled');}
  bindNewsletter();
  renderDrawer('cart');
}

function bindShell(){
  const nav=document.getElementById('siteNav');
  const menu=document.getElementById('menuButton');
  const panel=document.getElementById('menuPanel');
  const menuBackdrop=document.getElementById('menuBackdrop');
  const menuClose=document.getElementById('menuClose');
  const toggleMenu=(force)=>{
    const open=typeof force==='boolean'?force:!panel.classList.contains('open');
    menu.classList.toggle('active',open);
    panel.classList.toggle('open',open);
    menuBackdrop.classList.toggle('open',open);
    panel.setAttribute('aria-hidden',String(!open));
    document.body.classList.toggle('menu-open',open);
  };
  menu.addEventListener('click',()=>toggleMenu());
  menuClose.addEventListener('click',()=>toggleMenu(false));
  menuBackdrop.addEventListener('click',()=>toggleMenu(false));
  panel.querySelectorAll('.menu-links a,.menu-brand').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && panel.classList.contains('open')) toggleMenu(false)});
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});
  document.getElementById('cartOpen').addEventListener('click',()=>openDrawer('cart'));
  document.getElementById('wishlistOpen').addEventListener('click',()=>openDrawer('wishlist'));
  document.getElementById('drawerClose').addEventListener('click',closeDrawer);
  document.getElementById('drawerBackdrop').addEventListener('click',closeDrawer);
  const so=document.getElementById('searchOverlay');
  document.getElementById('globalSearchBtn').addEventListener('click',()=>{so.classList.add('open');setTimeout(()=>document.getElementById('globalSearchInput').focus(),50)});
  document.getElementById('searchClose').addEventListener('click',()=>so.classList.remove('open'));
  document.getElementById('globalSearchInput').addEventListener('input',e=>renderGlobalSearch(e.target.value));
  document.getElementById('product-modal-root').addEventListener('click',e=>{if(e.target.id==='modalBackdrop'||e.target.closest('#quickClose'))closeQuickView()});
  window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeQuickView();closeDrawer();so.classList.remove('open')}});
}

function bindNewsletter(){document.getElementById('newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();e.target.reset();showToast('You’re on the GRAIN list.')})}
function renderGlobalSearch(term){
  const box=document.getElementById('globalSearchResults');
  if(!term.trim()){box.innerHTML='';return;}
  const q=term.toLowerCase();const matches=productSeed.filter(p=>`${p.name} ${p.category}`.toLowerCase().includes(q)).slice(0,7);
  box.innerHTML=matches.length?matches.map(p=>`<a class="search-result" href="shop.html?search=${encodeURIComponent(term)}"><span>${esc(p.name)}</span><span>${formatPrice(p.price)}</span></a>`).join(''):`<div class="search-result"><span>No matches found.</span><span>—</span></div>`;
}
function openDrawer(type){document.getElementById('drawerTitle').textContent=type==='cart'?'Your Cart':'Wishlist';document.getElementById('sideDrawer').dataset.type=type;document.getElementById('sideDrawer').classList.add('open');document.getElementById('drawerBackdrop').classList.add('open');renderDrawer(type)}
function closeDrawer(){document.getElementById('sideDrawer').classList.remove('open');document.getElementById('drawerBackdrop').classList.remove('open')}
function renderDrawer(type){
  const body=document.getElementById('drawerBody'),foot=document.getElementById('drawerFoot');
  if(type==='wishlist'){
    const items=productSeed.filter(p=>state.wishlist.includes(p.id));
    body.innerHTML=items.length?items.map(p=>`<div class="drawer-item"><img src="${p.images[0]}" alt="${esc(p.name)}"><div><h4>${esc(p.name)}</h4><p>${formatPrice(p.price)}</p></div><button class="drawer-remove" data-remove-wish="${p.id}">×</button></div>`).join(''):`<div class="drawer-empty">Your wishlist is waiting for a favorite.</div>`;
    foot.innerHTML=`<a class="btn btn-dark" href="shop.html" style="width:100%">Browse the shop</a>`;
    body.querySelectorAll('[data-remove-wish]').forEach(b=>b.onclick=()=>toggleWishlist(+b.dataset.removeWish));
  }else{
    const entries=state.cart.map(item=>({item,product:productSeed.find(p=>p.id===item.id)})).filter(x=>x.product);
    const total=entries.reduce((sum,x)=>sum+x.product.price*x.item.qty,0);
    body.innerHTML=entries.length?entries.map(x=>`<div class="drawer-item"><img src="${x.product.images[0]}" alt="${esc(x.product.name)}"><div><h4>${esc(x.product.name)}</h4><p>${x.item.qty} × ${formatPrice(x.product.price)}</p></div><button class="drawer-remove" data-remove-cart="${x.product.id}">×</button></div>`).join(''):`<div class="drawer-empty">Your cart is beautifully empty.</div>`;
    foot.innerHTML=`<div class="drawer-total"><span>Subtotal</span><span>${formatPrice(total)}</span></div><button class="btn btn-dark" id="checkoutBtn" style="width:100%">Checkout</button>`;
    body.querySelectorAll('[data-remove-cart]').forEach(b=>b.onclick=()=>removeFromCart(+b.dataset.removeCart));
    document.getElementById('checkoutBtn')?.addEventListener('click',()=>showToast('Checkout is ready for integration with your payment provider.'));
  }
}
function showToast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>t.classList.remove('show'),2200)}

function toggleWishlist(id){
  state.wishlist=state.wishlist.includes(id)?state.wishlist.filter(x=>x!==id):[...state.wishlist,id];persist();document.querySelectorAll(`[data-wishlist="${id}"]`).forEach(b=>b.classList.toggle('active',state.wishlist.includes(id)));renderDrawer('wishlist');showToast(state.wishlist.includes(id)?'Added to wishlist':'Removed from wishlist');
}
function addToCart(id,qty=1,size,color){
  const existing=state.cart.find(x=>x.id===id && x.size===size && x.color===color);
  if(existing)existing.qty+=qty;else state.cart.push({id,qty,size,color});persist();renderDrawer('cart');showToast('Added to cart');
}
function removeFromCart(id){state.cart=state.cart.filter(x=>x.id!==id);persist();renderDrawer('cart')}

function productCard(p){return `<article class="product-card" data-product-card="${p.id}" tabindex="0" role="button" aria-label="View ${esc(p.name)}">
  <div class="product-media"><img src="${p.images[0]}" alt="${esc(p.name)}" loading="lazy"><button class="wishlist-btn ${state.wishlist.includes(p.id)?'active':''}" data-wishlist="${p.id}" aria-label="Wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.7 4.7 0 0 1 8 4.2c1.5 0 2.8.7 4 2 1.2-1.3 2.5-2 4-2a4.7 4.7 0 0 1 4.8 4.5Z"></path></svg></button><div class="product-actions"><button class="quick-view" data-quick="${p.id}">Quick View</button></div></div>
  <div class="product-info"><div><div class="product-title">${esc(p.name)}</div><div class="product-meta">${p.category}</div></div><div class="product-price">${formatPrice(p.price)}</div></div>
</article>`}
function attachProductEvents(root){
  root.querySelectorAll('[data-wishlist]').forEach(b=>b.onclick=e=>{e.stopPropagation();toggleWishlist(+b.dataset.wishlist)});
  root.querySelectorAll('[data-quick]').forEach(b=>b.onclick=e=>{e.stopPropagation();openQuickView(+b.dataset.quick)});
  root.querySelectorAll('.product-card').forEach(card=>{
    const open=()=>openQuickView(+card.dataset.productCard);
    card.addEventListener('click',e=>{if(!e.target.closest('button'))open()});
    card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ') && !e.target.closest('button')){e.preventDefault();open()}});
  });
}
function renderProducts(list,root){root.innerHTML=list.length?list.map(productCard).join(''):`<div class="empty-state"><p class="eyebrow">No matches</p><h3 style="font-size:38px;margin-bottom:10px">Nothing quite there yet.</h3><p>Try a different category, size, price, or search phrase.</p></div>`;attachProductEvents(root)}

function setupHero(){
  const media=document.getElementById('heroMedia'),copy=document.getElementById('heroCopy'),ind=document.getElementById('heroIndicators');if(!media)return;
  media.innerHTML=heroSlides.map((s,i)=>`<div class="hero-slide ${i===0?'active':''}"><img src="${s.image}" alt="${esc(s.subtitle)}" loading="${i===0?'eager':'lazy'}" /></div>`).join('');
  ind.innerHTML=heroSlides.map((_,i)=>`<button class="${i===0?'active':''}" data-slide="${i}" aria-label="Slide ${i+1}"></button>`).join('');
  const draw=()=>{const s=heroSlides[state.heroIndex];copy.innerHTML=`<p class="eyebrow">${s.subtitle}</p><h1>${s.title.replace(/\n/g,'<br/>')}</h1><p>${s.text}</p><a class="btn btn-outline-light" href="shop.html?category=${encodeURIComponent(s.subtitle.split(' / ')[0])}">Shop Now <span>↗</span></a>`;document.querySelectorAll('.hero-slide').forEach((el,i)=>el.classList.toggle('active',i===state.heroIndex));ind.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===state.heroIndex));copy.style.animation='none';void copy.offsetWidth;copy.style.animation='fadeUp .8s cubic-bezier(.22,.61,.36,1)'};
  const go=n=>{state.heroIndex=(n+heroSlides.length)%heroSlides.length;draw()};
  document.getElementById('heroPrev').onclick=()=>go(state.heroIndex-1);document.getElementById('heroNext').onclick=()=>go(state.heroIndex+1);ind.querySelectorAll('button').forEach(b=>b.onclick=()=>go(+b.dataset.slide));draw(); restartHeroTimer();
  document.getElementById('homeHero').addEventListener('mouseenter',()=>clearInterval(state.heroTimer));document.getElementById('homeHero').addEventListener('mouseleave',restartHeroTimer);function restartHeroTimer(){clearInterval(state.heroTimer);state.heroTimer=setInterval(()=>go(state.heroIndex+1),2000)}
}
function setupCategories(){const root=document.getElementById('categoryGrid');if(!root)return;root.innerHTML=categoryCards.map(c=>`<a class="category-card" href="shop.html?category=${encodeURIComponent(c.name)}"><div class="category-image-wrap"><div class="category-image" style="background-image:url('${c.image}')"></div></div><div class="category-content"><div class="category-copy"><h3>${c.name}</h3><small>${c.price}</small></div><span class="category-arrow" aria-hidden="true">↗</span><span class="category-hover-btn">View All</span></div></a>`).join('')}
function setupOverview(){const root=document.getElementById('overviewGrid');if(!root)return;const render=view=>{const list=view==='featured'?productSeed.filter(p=>p.featured).slice(0,8):view==='rated'?productSeed.slice().sort((a,b)=>b.rating-a.rating).slice(0,8):productSeed.filter(p=>p.bestseller).slice(0,8);renderProducts(list,root)};document.querySelectorAll('#overviewTabs .tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('#overviewTabs .tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.view)});render('featured')}

function setupShop(){
  const root=document.getElementById('shopGrid');if(!root)return;
  const params=new URLSearchParams(location.search);if(params.get('category')){state.shopCategory=params.get('category');state.filterCategory=params.get('category');document.getElementById('filterCategory').value=state.filterCategory==='all'?'all':state.filterCategory}if(params.get('search')){state.search=params.get('search');document.getElementById('shopSearchInput').value=state.search;document.getElementById('shopSearchRow').classList.add('open')}
  function getFiltered(){return productSeed.filter(p=>{const categoryOK=state.shopCategory==='all'||p.category===state.shopCategory;const searchOK=!state.search||`${p.name} ${p.category} ${p.colors.join(' ')}`.toLowerCase().includes(state.search.toLowerCase());const minOK=!state.minPrice||p.price>=+state.minPrice;const maxOK=!state.maxPrice||p.price<=+state.maxPrice;const filterCatOK=state.filterCategory==='all'||p.category===state.filterCategory;const sizeOK=state.filterSize==='all'||p.sizes.includes(state.filterSize);return categoryOK&&searchOK&&minOK&&maxOK&&filterCatOK&&sizeOK})}
  function draw(){const list=getFiltered();renderProducts(list,root);document.getElementById('resultsCount').textContent=`${list.length} product${list.length===1?'':'s'}`;const tags=[];if(state.search)tags.push(`Search: “${state.search}”`);if(state.minPrice)tags.push(`Min ${formatPrice(+state.minPrice)}`);if(state.maxPrice)tags.push(`Max ${formatPrice(+state.maxPrice)}`);if(state.filterCategory!=='all')tags.push(state.filterCategory);if(state.filterSize!=='all')tags.push(`Size ${state.filterSize}`);document.getElementById('activeFilterSummary').textContent=tags.join(' · ')}
  document.querySelectorAll('#shopCategoryNav .shop-cat').forEach(b=>b.onclick=()=>{document.querySelectorAll('#shopCategoryNav .shop-cat').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.shopCategory=b.dataset.category;if(state.shopCategory!=='all'){state.filterCategory=state.shopCategory;document.getElementById('filterCategory').value=state.shopCategory}else{state.filterCategory='all';document.getElementById('filterCategory').value='all'}draw()});
  document.getElementById('filterToggle').onclick=()=>{const p=document.getElementById('filterPanel');p.hidden=!p.hidden;document.getElementById('filterToggle').querySelector('span:last-child').textContent=p.hidden?'＋':'−'};
  document.getElementById('shopSearchBtn').onclick=()=>document.getElementById('shopSearchRow').classList.toggle('open');
  document.getElementById('shopSearchInput').oninput=e=>{state.search=e.target.value;draw()};
  document.getElementById('clearShopSearch').onclick=()=>{state.search='';document.getElementById('shopSearchInput').value='';draw()};
  ['minPrice','maxPrice','filterCategory','filterSize'].forEach(id=>document.getElementById(id).addEventListener('input',e=>{state[id==='filterCategory'?'filterCategory':id]=e.target.value;if(id==='filterCategory')state.filterCategory=e.target.value;else if(id==='filterSize')state.filterSize=e.target.value;else if(id==='minPrice')state.minPrice=e.target.value;else state.maxPrice=e.target.value;draw()}));
  document.getElementById('resetFilters').onclick=()=>{state.minPrice='';state.maxPrice='';state.filterCategory='all';state.filterSize='all';state.shopCategory='all';document.getElementById('minPrice').value='';document.getElementById('maxPrice').value='';document.getElementById('filterCategory').value='all';document.getElementById('filterSize').value='all';document.querySelectorAll('.shop-cat').forEach(x=>x.classList.toggle('active',x.dataset.category==='all'));draw()};
  draw();
}

function openQuickView(id){
  const p=productSeed.find(x=>x.id===id);if(!p)return;state.quickProduct=p;state.quickImageIndex=0;
  const root=document.getElementById('product-modal-root');root.innerHTML=`<div class="modal-backdrop open" id="modalBackdrop"><div class="quick-modal" role="dialog" aria-modal="true">
  <button class="quick-close" id="quickClose" aria-label="Close">×</button>
  <div class="quick-gallery"><div class="thumbs">${p.images.map((src,i)=>`<button class="thumb-btn ${i===0?'active':''}" data-thumb="${i}"><img src="${src}" alt=""></button>`).join('')}</div><div class="main-image-wrap"><img id="quickMainImage" class="main-product-image" src="${p.images[0]}" alt="${esc(p.name)}"><button class="fullscreen-btn" id="fullscreenBtn">⛶</button><button class="gallery-arrow left" id="galleryPrev">←</button><button class="gallery-arrow right" id="galleryNext">→</button></div></div>
  <div class="quick-info"><p class="eyebrow">${p.category}</p><h2>${esc(p.name)}</h2><div class="quick-price">${formatPrice(p.price)}</div><p class="quick-desc">${esc(p.description)}</p><div class="form-grid"><div class="quick-field"><label>Size</label><select id="quickSize">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select></div><div class="quick-field"><label>Color</label><select id="quickColor">${p.colors.map(c=>`<option>${c}</option>`).join('')}</select></div></div><div class="qty-row"><span class="eyebrow" style="margin:0">Quantity</span><div class="qty-control"><button id="qtyMinus">−</button><input id="qtyInput" value="1" inputmode="numeric" aria-label="Quantity"><button id="qtyPlus">+</button></div></div><button class="btn btn-dark add-cart" id="quickAdd">Add to cart</button><div class="modal-actions"><button class="modal-action" id="quickWishlist"><span class="heart-label ${state.wishlist.includes(p.id)?'active':''}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.7 4.7 0 0 1 8 4.2c1.5 0 2.8.7 4 2 1.2-1.3 2.5-2 4-2a4.7 4.7 0 0 1 4.8 4.5Z"></path></svg></span> Wishlist</button><button class="modal-action" id="shareProduct">↗ Share</button></div></div>
  </div></div>`;
  document.body.classList.add('modal-open');
  root.querySelectorAll('[data-thumb]').forEach(b=>b.onclick=()=>setQuickImage(+b.dataset.thumb));
  document.getElementById('galleryPrev').onclick=()=>setQuickImage((state.quickImageIndex-1+p.images.length)%p.images.length);document.getElementById('galleryNext').onclick=()=>setQuickImage((state.quickImageIndex+1)%p.images.length);
  document.getElementById('qtyMinus').onclick=()=>changeQty(-1);document.getElementById('qtyPlus').onclick=()=>changeQty(1);document.getElementById('qtyInput').oninput=e=>e.target.value=Math.max(1,parseInt(e.target.value||'1',10)||1);
  document.getElementById('quickAdd').onclick=()=>addToCart(p.id,Math.max(1,parseInt(document.getElementById('qtyInput').value||'1',10)),document.getElementById('quickSize').value,document.getElementById('quickColor').value);
  document.getElementById('quickWishlist').onclick=()=>toggleWishlist(p.id);
  document.getElementById('shareProduct').onclick=async()=>{try{await navigator.clipboard.writeText(location.href+'#product-'+p.id);showToast('Product link copied.')}catch{showToast('Share link ready.')}};
  document.getElementById('fullscreenBtn').onclick=async()=>{const img=document.getElementById('quickMainImage');try{await img.requestFullscreen()}catch{window.open(img.src,'_blank')}};
}
function setQuickImage(i){state.quickImageIndex=i;const p=state.quickProduct;const img=document.getElementById('quickMainImage');img.style.opacity=.25;setTimeout(()=>{img.src=p.images[i];img.style.opacity=1},140);document.querySelectorAll('[data-thumb]').forEach((b,idx)=>b.classList.toggle('active',idx===i))}
function changeQty(delta){const input=document.getElementById('qtyInput');input.value=Math.max(1,(parseInt(input.value,10)||1)+delta)}
function closeQuickView(){document.getElementById('product-modal-root').innerHTML='';document.body.classList.remove('modal-open')}

function init(){setupShell();setupHero();setupCategories();setupOverview();setupShop()}

document.addEventListener('DOMContentLoaded',init);
