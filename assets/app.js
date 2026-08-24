
document.addEventListener('DOMContentLoaded',()=>{
  const search=document.querySelector('[data-global-search]');
  if(search){
    search.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        const q=encodeURIComponent(search.value.trim());
        location.href='/cards.html?q='+q;
      }
    });
  }
  document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>alert('Prototype：正式版會串接真實交易 / 會員 / 金流流程。')));
});
