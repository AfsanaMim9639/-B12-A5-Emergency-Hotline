// Emergency services data
const services = [
  {
    title: "National Emergency Number",
    dept: "National Emergency",
    number: "999",
    tags: ["All"],
    icon: "🚨"
  },
  {
    title: "Police Helpline Number",
    dept: "Police",
    number: "999",
    tags: ["Police"],
    icon: "👮"
  },
  {
    title: "Fire Service Number",
    dept: "Fire Service",
    number: "999",
    tags: ["Fire"],
    icon: "🚒"
  },
  {
    title: "Ambulance Service",
    dept: "Ambulance",
    number: "1994-999999",
    tags: ["Health"],
    icon: "🚑"
  },
  {
    title: "Women & Child Helpline",
    dept: "Women & Child Helpline",
    number: "109",
    tags: ["Help"],
    icon: "🧒"
  },
  {
    title: "Anti-Corruption Helpline",
    dept: "Anti-Corruption",
    number: "106",
    tags: ["Govt."],
    icon: "🛡️"
  },
];

// Elements
const favs = new Set();
const favCountEl = document.getElementById("favCount");
const cardGrid = document.getElementById("cardGrid");
const toast = document.getElementById("toast");
const historyList = document.getElementById("historyList");

// Render cards
services.forEach((s, idx) => cardGrid.appendChild(makeCard(s, idx)));

function makeCard(svc, idx) {
  const card = document.createElement("article");
  card.className = "bg-white rounded-2xl shadow-card p-5 flex flex-col justify-between";
  card.innerHTML = `
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-100 text-2xl">${svc.icon}</div>
        <div>
          <h4 class="font-semibold text-gray-900">${svc.title}</h4>
          <p class="text-sm text-gray-500">${svc.dept}</p>
        </div>
      </div>
      <button aria-label="Toggle favorite" data-idx="${idx}" class="favBtn text-gray-400 hover:text-brand-700 transition">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <div class="mt-4">
      <div class="text-3xl font-extrabold text-gray-900 tracking-tight">${svc.number}</div>
      <div class="mt-2 flex flex-wrap gap-2">
        ${svc.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded-full bg-gray-100">${t}</span>`).join("")}
      </div>
    </div>

    <div class="mt-5 grid grid-cols-2 gap-3">
      <button class="copyBtn border border-gray-200 rounded-xl px-3 py-2 text-sm hover:bg-gray-50" data-num="${svc.number}">
        <span class="inline-flex items-center gap-2"><input type="checkbox" class="pointer-events-none"> Copy</span>
      </button>
      <a href="tel:${svc.number.replaceAll(' ','')}" class="callBtn bg-brand-600 hover:bg-brand-700 text-white rounded-xl px-3 py-2 text-sm text-center" data-title="${svc.title}" data-num="${svc.number}">
        <span class="inline-flex items-center gap-2">📞 Call</span>
      </a>
    </div>
  `;
  return card;
}

// Event delegation
document.addEventListener("click", async (e) => {
  const copyBtn = e.target.closest(".copyBtn");
  const callBtn = e.target.closest(".callBtn");
  const favBtn  = e.target.closest(".favBtn");

  if (copyBtn) {
    const num = copyBtn.dataset.num;
    try {
      await navigator.clipboard.writeText(num);
      showToast(`Copied ${num}`);
      addHistory({title: "Copied Number", number: num});
    } catch {
      showToast("Copy failed");
    }
  }

  if (callBtn) {
    const num = callBtn.dataset.num;
    const title = callBtn.dataset.title;
    addHistory({title, number: num});
  }

  if (favBtn) {
    const idx = +favBtn.dataset.idx;
    if (favs.has(idx)) favs.delete(idx); else favs.add(idx);
    favCountEl.textContent = favs.size;
    favBtn.classList.toggle("text-brand-600");
    favBtn.classList.toggle("fill-brand-600");
  }
});

// Toast
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  toast.classList.add("animate-[fadein_0.2s_ease-out]");
  setTimeout(() => toast.classList.add("hidden"), 1300);
}

// Call history
function addHistory({title, number}) {
  const li = document.createElement("li");
  li.className = "flex items-center justify-between gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl px-3 py-2";
  const time = new Date();
  li.innerHTML = `
    <div>
      <div class="font-medium text-gray-800 line-clamp-1">${title}</div>
      <div class="text-xs text-gray-500">${number}</div>
    </div>
    <div class="text-xs text-gray-500 whitespace-nowrap">${time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>`;
  historyList.prepend(li);
}
document.getElementById("clearHistory").addEventListener("click", () => historyList.innerHTML = "");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
