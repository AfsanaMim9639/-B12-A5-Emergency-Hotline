// Emergency services data
const services = [
  {
    title: "National Emergency Number",
    dept: "National Emergency",
    number: "999",
    tags: ["All"],
    icon: "🚨",
    image: "assets/emergency.png" // new top-left image
  },
  {
    title: "Police Helpline Number",
    dept: "Police",
    number: "999",
    tags: ["Police"],
    icon: "👮",
    image: "assets/police.png"
  },
  {
    title: "Fire Service Number",
    dept: "Fire Service",
    number: "999",
    tags: ["Fire"],
    icon: "🚒",
    image: "assets/fire-service.png"
  },
  {
    title: "Ambulance Service",
    dept: "Ambulance",
    number: "1994-999999",
    tags: ["Health"],
    icon: "🚑",
    image: "assets/ambulance.png"
  },
  {
    title: "Women & Child Helpline",
    dept: "Women & Child Helpline",
    number: "109",
    tags: ["Help"],
    icon: "🧒",
    image: "assets/emergency.png"
  },
  {
    title: "Anti-Corruption Helpline",
    dept: "Anti-Corruption",
    number: "106",
    tags: ["Govt."],
    icon: "🛡️",
    image: "assets/emergency.png"
  },
  {
    title: "Electricity Helpline",
    dept: "Electricity Outage",
    number: "16216",
    tags: ["Electricity"],
    icon: "🚑",
    image: "assets/ambulance.png"
  },
  {
    title: "Brac Helpline",
    dept: "Brac",
    number: "16445",
    tags: ["NGO"],
    icon: "🧒",
    image: "assets/emergency.png"
  },
  {
    title: "Bangladesh Railway Helpline",
    dept: "Bangladesh Railway",
    number: "103",
    tags: ["Travel"],
    icon: "🛡️",
    image: "assets/emergency.png"
  },
];




// Elements
const copyCountEl = document.getElementById("copyCount");
let lastCopiedNumber = null;
const favs = new Set();
const favCountEl = document.getElementById("favCount");
const cardGrid = document.getElementById("cardGrid");
const toast = document.getElementById("toast");
const historyList = document.getElementById("historyList");
const copyBtn = document.getElementById("copyBtn");
// Render cards
services.forEach((s, idx) => cardGrid.appendChild(makeCard(s, idx)));

function makeCard(svc, idx) {
  const card = document.createElement("article");
  card.className = "bg-white rounded-2xl shadow-card p-5 flex flex-col justify-between";

  card.innerHTML = `
    <!-- Top row: Icon + Favorite -->
    <div class="flex items-center justify-between mb-4">
  <div class="w-6 h-6 flex items-center justify-center rounded-lg bg-[rgba(246, 87, 59, 0.4)] overflow-hidden">
  <img src="${svc.image}" alt="${svc.title}" class="w-full h-full object-cover"/>
</div>
  <button aria-label="Toggle favorite" data-idx="${idx}" class="favBtn text-gray-400 hover:text-brand-700 transition flex items-center justify-center">
    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>


    <!-- 2. Name -->
    <h4 class="font-semibold text-gray-900 mb-1">${svc.title}</h4>

    <!-- 3. Subtitle -->
    <p class="text-sm text-gray-500 mb-3">${svc.dept}</p>

    <!-- 4. Hotline number -->
    <div class="text-2xl font-extrabold text-gray-900 mb-3">${svc.number}</div>

    <!-- 5. Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      ${svc.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded-full bg-gray-100">${t}</span>`).join("")}
    </div>

    <!-- 6. Two buttons -->
    <div class="mt-auto grid grid-cols-2 gap-3">
      <button class="copyBtn border border-gray-200 rounded-xl px-3 py-2 text-sm hover:bg-gray-700 hover:text-white" data-num="${svc.number}">
        <span class="inline-flex items-center gap-2"><input type="checkbox" class="pointer-events-none"> Copy</span>
      </button>
      <a href="tel:${svc.number}" 
   class="callBtn bg-brand-600 hover:bg-brand-700 text-white rounded-xl px-3 py-2 text-sm text-center"
   data-title="${svc.title}" 
   data-num="${svc.number}">
   Call
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

  
  
if (copyBtn) { // check if the button exists / clicked
    const number = copyBtn.dataset.num || "12345"; // get number from data attribute or fallback

    try {
        await navigator.clipboard.writeText(number); // Copy to clipboard

        // Increase count every time
        copyCountEl.textContent = parseInt(copyCountEl.textContent) + 1;

        // Show regular alert instead of toast
        alert(`Copied ${number}!`);
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}



  if (callBtn) {
    const num = callBtn.dataset.num;
    const title = callBtn.dataset.title;
    addHistory({title, number: num});
  }

  //const favBtn = e.target.closest(".favBtn"); // assuming your heart icon has class "favBtn"
  if (favBtn) {
    // Get current count element
    const favCountEl = document.getElementById("favCount"); // adjust to your counter element
    // Increase count by 1
    favCountEl.textContent = +favCountEl.textContent + 1;

    // Optional: add some visual effect on the heart
    favBtn.classList.add("text-brand-600", "fill-brand-600");
    setTimeout(() => {
      favBtn.classList.remove("text-brand-600", "fill-brand-600");
    }, 300); // temporary animation effect
  }
});


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
