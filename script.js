const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  });
});

// Filtro por categoria
const pills = document.querySelectorAll(".pill");
const products = document.querySelectorAll(".product");

function setFilter(cat){
  pills.forEach(p => p.classList.toggle("is-active", p.dataset.show === cat));
  products.forEach(card => {
    const match = (cat === "todos") || (card.dataset.cat === cat);
    card.style.display = match ? "block" : "none";
  });
}

pills.forEach(p => p.addEventListener("click", () => setFilter(p.dataset.show)));

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const cat = chip.dataset.filter;
    setFilter(cat);
    document.getElementById("destaques")?.scrollIntoView({behavior:"smooth"});
  });
});

// Fake send
const btn = document.getElementById("fakeSend");
const sentMsg = document.getElementById("sentMsg");
btn?.addEventListener("click", () => {
  sentMsg.textContent = "Pronto. Agora me manda seu Whats/Instagram que eu conecto isso de verdade com seus links e catálogo.";
});

