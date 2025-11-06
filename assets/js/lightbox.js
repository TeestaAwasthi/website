function openLightbox(src, title, price, medium, size, year, available, desc){
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-title').textContent = title || 'Untitled';
  const bits = [medium, size, year].filter(Boolean).join(' · ');
  const priceStr = (available && available.toLowerCase()==='sold') ? 'Sold' :
                   (price ? `₹${price}` : 'Price on request');
  document.getElementById('lb-sub').textContent = [bits, priceStr].filter(Boolean).join(' — ');
  document.getElementById('lb-desc').textContent = desc || '';
  const subject = encodeURIComponent(`Enquiry: ${title}`);
  const body = encodeURIComponent(`Hi Teesta,\n\nI'm interested in "${title}".\n\nDetails:\n${bits}\n${price ? 'Price: ₹'+price : ''}\n\nLink/Image: ${location.origin+src}\n\nThanks!`);
  document.getElementById('lb-email').href = `mailto:teesta.art@example.com?subject=${subject}&body=${body}`;
  lb.hidden = false;
  lb.onclick = (e)=>{ if(e.target.id==='lightbox'){ closeLightbox(); } };
}
function closeLightbox(){ document.getElementById('lightbox').hidden = true; }
