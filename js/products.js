const products = [
  {
    id:1, name:"Air Motion X", code:"NM-270", category:"Sneakers", price:8999, oldPrice:10999, rating:4.9, reviews:1245,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#f5f5f5","#c7c7c7"], sizes:["7","8","9","10","11","12"],
    description:"A lightweight performance sneaker with responsive cushioning, breathable mesh and a sharp everyday silhouette.",
    details:"Designed for movement from morning commutes to late-night city walks. The Air Motion X blends a structured upper with a cushioned sole and a low-profile shape that works with almost anything."
  },
  {
    id:2, name:"Court 01", code:"NC-001", category:"Sneakers", price:6999, oldPrice:8499, rating:4.8, reviews:782,
    image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=90",
    colors:["#ffffff","#111111","#d8d2c8"], sizes:["7","8","9","10","11"],
    description:"Clean court-inspired sneakers with a premium upper and an understated streetwear profile.",
    details:"A minimal everyday sneaker built around clean lines, soft cushioning and a versatile neutral palette."
  },
  {
    id:3, name:"Retro High 01", code:"NR-101", category:"Sneakers", price:7999, oldPrice:9999, rating:4.9, reviews:918,
    image:"https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#e63946","#f2f2f2"], sizes:["7","8","9","10","11","12"],
    description:"A high-top statement sneaker inspired by classic basketball silhouettes and modern street style.",
    details:"A bold high-top profile with supportive ankle structure and a contrast sole, created for outfits that need a focal point."
  },
  {
    id:4, name:"Sonic WH-1000", code:"NS-500", category:"Audio", price:24999, oldPrice:29999, rating:4.8, reviews:643,
    image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#d9d9d9"], sizes:[],
    description:"Immersive wireless headphones with adaptive noise cancellation, rich low-end and all-day comfort.",
    details:"Soft ear cushions, balanced sound and a sculpted headband make the Sonic WH-1000 a polished companion for work, travel and downtime."
  },
  {
    id:5, name:"Studio Buds Pro", code:"NB-200", category:"Audio", price:8999, oldPrice:10999, rating:4.7, reviews:512,
    image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#f3f3f3"], sizes:[],
    description:"Compact wireless earbuds with active noise cancellation and a pocket-ready charging case.",
    details:"Studio Buds Pro are tuned for focused listening with clear vocals, punchy bass and a compact silhouette."
  },
  {
    id:6, name:"Aero Backpack", code:"NA-310", category:"Accessories", price:3999, oldPrice:4999, rating:4.8, reviews:386,
    image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#3d4a43","#c8bda9"], sizes:[],
    description:"A structured everyday backpack with a laptop sleeve, water-resistant exterior and clean utility-first design.",
    details:"The Aero Backpack balances useful storage with an understated silhouette that moves easily from campus to city."
  },
  {
    id:7, name:"Motion Cap", code:"NA-404", category:"Accessories", price:1499, oldPrice:1999, rating:4.6, reviews:203,
    image:"https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#f4f4f4","#d1c2a8"], sizes:["S/M","L/XL"],
    description:"A low-profile six-panel cap with a curved brim and lightweight everyday construction.",
    details:"An easy finishing piece with a clean front, comfortable fit and versatile neutral colorways."
  },
  {
    id:8, name:"Everyday Hoodie", code:"NA-520", category:"Apparel", price:3499, oldPrice:4499, rating:4.8, reviews:621,
    image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#d7d7d7","#879184"], sizes:["S","M","L","XL","XXL"],
    description:"A heavyweight everyday hoodie with a relaxed fit and soft brushed interior.",
    details:"The Everyday Hoodie is built around comfort, clean proportions and a heavyweight feel that works across seasons."
  },
  {
    id:9, name:"Performance Tee", code:"NA-601", category:"Apparel", price:1999, oldPrice:2499, rating:4.7, reviews:418,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=90",
    colors:["#ffffff","#111111","#7c8a84"], sizes:["S","M","L","XL","XXL"],
    description:"A breathable performance tee with a clean athletic cut and lightweight stretch fabric.",
    details:"Designed for training and everyday wear, with a smooth hand-feel and easy movement."
  },
  {
    id:10, name:"Minimal Watch", code:"NW-700", category:"Accessories", price:5999, oldPrice:7499, rating:4.7, reviews:296,
    image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=90",
    image2:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=90",
    image3:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=90",
    colors:["#111111","#d5c7ae"], sizes:[],
    description:"A minimal timepiece with a clean dial, slim profile and understated premium finish.",
    details:"The Minimal Watch is designed as an everyday object: simple enough to disappear, distinctive enough to be noticed."
  }
];