// TEAM LOGOS
const logos = {
  RCB: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bengaluru_Logo.png/600px-Royal_Challengers_Bengaluru_Logo.png",
  CSK: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
  MI: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
  KKR: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
  RR: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png",
  SRH: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.png/600px-Sunrisers_Hyderabad.png",
  GT: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",
  LSG: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Lucknow_Super_Giants_Logo.svg/1200px-Lucknow_Super_Giants_Logo.svg.png",
  DC: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png",
  PBKS: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png",
  "Qualifier 1": "https://cdn-icons-png.flaticon.com/512/54/54481.png",
  "Qualifier 2": "https://cdn-icons-png.flaticon.com/512/54/54481.png",
  Eliminator: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
  Final: "https://cdn-icons-png.flaticon.com/512/69/69881.png",
  TBD: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
};

// FULL MATCHES
const matches = [
  // {id:1,t1:"RCB",t2:"SRH",date:"28 Mar"},
  // {id:2,t1:"MI",t2:"KKR",date:"29 Mar"},
  // {id:3,t1:"RR",t2:"CSK",date:"30 Mar"},
  // {id:4,t1:"PBKS",t2:"GT",date:"31 Mar"},
  // {id:5,t1:"LSG",t2:"DC",date:"1 Apr"},
  // {id:6,t1:"KKR",t2:"SRH",date:"2 Apr"},
  // {id:7,t1:"CSK",t2:"PBKS",date:"3 Apr"},
  // {id:8,t1:"DC",t2:"MI",date:"4 Apr"},
  {id:9,t1:"GT",t2:"RR",date:"4 Apr"},
  {id:10,t1:"SRH",t2:"LSG",date:"5 Apr"},
  {id:11,t1:"RCB",t2:"CSK",date:"5 Apr"},
  {id:12,t1:"KKR",t2:"PBKS",date:"6 Apr"},
  {id:13,t1:"RR",t2:"MI",date:"7 Apr"},
  {id:14,t1:"DC",t2:"GT",date:"8 Apr"},
  {id:15,t1:"KKR",t2:"LSG",date:"9 Apr"},
  {id:16,t1:"RR",t2:"RCB",date:"10 Apr"},
  {id:17,t1:"PBKS",t2:"SRH",date:"11 Apr"},
  {id:18,t1:"CSK",t2:"DC",date:"11 Apr"},
  {id:19,t1:"LSG",t2:"GT",date:"12 Apr"},
  {id:20,t1:"MI",t2:"RCB",date:"12 Apr"},
  {id:21,t1:"SRH",t2:"RR",date:"13 Apr"},
  {id:22,t1:"CSK",t2:"KKR",date:"14 Apr"},
  {id:23,t1:"RCB",t2:"LSG",date:"15 Apr"},
  {id:24,t1:"MI",t2:"PBKS",date:"16 Apr"},
  {id:25,t1:"GT",t2:"KKR",date:"17 Apr"},
  {id:26,t1:"RCB",t2:"DC",date:"18 Apr"},
  {id:27,t1:"SRH",t2:"CSK",date:"18 Apr"},
  {id:28,t1:"KKR",t2:"RR",date:"19 Apr"},
  {id:29,t1:"PBKS",t2:"LSG",date:"19 Apr"},
  {id:30,t1:"GT",t2:"MI",date:"20 Apr"},
  {id:31,t1:"SRH",t2:"DC",date:"21 Apr"},
  {id:32,t1:"LSG",t2:"RR",date:"22 Apr"},
  {id:33,t1:"MI",t2:"CSK",date:"23 Apr"},
  {id:34,t1:"RCB",t2:"GT",date:"24 Apr"},
  {id:35,t1:"DC",t2:"PBKS",date:"25 Apr"},
  {id:36,t1:"RR",t2:"SRH",date:"25 Apr"},
  {id:37,t1:"GT",t2:"CSK",date:"26 Apr"},
  {id:38,t1:"LSG",t2:"KKR",date:"26 Apr"},
  {id:39,t1:"DC",t2:"RCB",date:"27 Apr"},
  {id:40,t1:"PBKS",t2:"RR",date:"28 Apr"},
  {id:41,t1:"MI",t2:"SRH",date:"29 Apr"},
  {id:42,t1:"GT",t2:"RCB",date:"30 Apr"},
  {id:43,t1:"RR",t2:"DC",date:"1 May"},
  {id:44,t1:"CSK",t2:"MI",date:"2 May"},
  {id:45,t1:"SRH",t2:"KKR",date:"3 May"},
  {id:46,t1:"GT",t2:"PBKS",date:"3 May"},
  {id:47,t1:"MI",t2:"LSG",date:"4 May"},
  {id:48,t1:"DC",t2:"CSK",date:"5 May"},
  {id:49,t1:"SRH",t2:"PBKS",date:"6 May"},
  {id:50,t1:"LSG",t2:"RCB",date:"7 May"},
  {id:51,t1:"DC",t2:"KKR",date:"8 May"},
  {id:52,t1:"RR",t2:"GT",date:"9 May"},
  {id:53,t1:"CSK",t2:"LSG",date:"10 May"},
  {id:54,t1:"RCB",t2:"MI",date:"10 May"},
  {id:55,t1:"PBKS",t2:"DC",date:"11 May"},
  {id:56,t1:"GT",t2:"SRH",date:"12 May"},
  {id:57,t1:"RCB",t2:"KKR",date:"13 May"},
  {id:58,t1:"PBKS",t2:"MI",date:"14 May"},
  {id:59,t1:"LSG",t2:"CSK",date:"15 May"},
  {id:60,t1:"KKR",t2:"GT",date:"16 May"},
  {id:61,t1:"PBKS",t2:"RCB",date:"17 May"},
  {id:62,t1:"DC",t2:"RR",date:"17 May"},
  {id:63,t1:"CSK",t2:"SRH",date:"18 May"},
  {id:64,t1:"RR",t2:"LSG",date:"19 May"},
  {id:65,t1:"KKR",t2:"MI",date:"20 May"},
  {id:66,t1:"CSK",t2:"GT",date:"21 May"},
  {id:67,t1:"SRH",t2:"RCB",date:"22 May"},
  {id:68,t1:"LSG",t2:"PBKS",date:"23 May"},
  {id:69,t1:"MI",t2:"RR",date:"24 May"},
  {id:70,t1:"KKR",t2:"DC",date:"24 May"},
  // Playoffs
  {id:71,t1:"Qualifier 1",t2:"TBD",date:"26 May"},
  {id:72,t1:"Eliminator",t2:"TBD",date:"27 May"},
  {id:73,t1:"Qualifier 2",t2:"TBD",date:"29 May"},
  {id:74,t1:"Final",t2:"TBD",date:"31 May"}
];

let currentFilter = "All";
let currentPage = 1;
const ITEMS_PER_PAGE = 8;
let filteredMatches = [...matches];

function init() {
  const savedWallet = localStorage.getItem('baseWallet');
  if (savedWallet && document.getElementById('baseWallet')) {
    document.getElementById('baseWallet').value = savedWallet;
  }

  renderFilters();
  applyFilter();
  renderRecentActivity();
}

function updateWallet() {
  const val = document.getElementById('baseWallet').value;
  localStorage.setItem('baseWallet', val);
  render();
}

function renderFilters() {
  const filterContainer = document.getElementById("filters");
  const teams = ["All", "RCB", "CSK", "MI", "KKR", "RR", "SRH", "GT", "LSG", "DC", "PBKS"];
  
  filterContainer.innerHTML = teams.map(team => `
    <button class="filter-btn ${currentFilter === team ? 'active' : ''}" onclick="setFilter('${team}')">${team}</button>
  `).join('');
}

function setFilter(team) {
  currentFilter = team;
  currentPage = 1; 
  renderFilters();
  applyFilter();
}

function applyFilter() {
  if (currentFilter === "All") {
    filteredMatches = [...matches];
  } else {
    filteredMatches = matches.filter(m => m.t1 === currentFilter || m.t2 === currentFilter);
  }
  render();
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `✅ <span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideUpOut 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
    setTimeout(() => toast.remove(), 400);
  }, 2000);
}

function render() {
  const container = document.getElementById("matches");
  container.innerHTML = "";
  
  // Dashboard Calculations (always calculate based on ALL matches data)
  const walletDeduction = Number(localStorage.getItem('baseWallet')) || 0;
  let totalProfit = -walletDeduction;
  let matchesBetCount = 0;
  let matchesWon = 0;
  
  let teamProfits = {};

  matches.forEach(match => {
    const saved = JSON.parse(localStorage.getItem(match.id)) || {};
    if (saved.amount && saved.status) {
      matchesBetCount++;
      const amt = Number(saved.amount);
      if (saved.status === "profit") {
        totalProfit += amt;
        matchesWon++;
        teamProfits[match.t1] = (teamProfits[match.t1] || 0) + amt;
        teamProfits[match.t2] = (teamProfits[match.t2] || 0) + amt;
      } else if (saved.status === "loss") {
        totalProfit -= amt;
        teamProfits[match.t1] = (teamProfits[match.t1] || 0) - amt;
        teamProfits[match.t2] = (teamProfits[match.t2] || 0) - amt;
      }
    }
  });

  // Display top dashboard stats
  const totalEl = document.getElementById("totalProfit");
  const labelEl = totalEl.previousElementSibling;

  if (totalProfit > 0) {
    totalEl.innerText = `+₹${totalProfit}`;
    labelEl.innerText = "Total Profit";
    totalEl.className = "stat-value profit";
  } else if (totalProfit < 0) {
    totalEl.innerText = `-₹${Math.abs(totalProfit)}`;
    labelEl.innerText = "Total Loss";
    totalEl.className = "stat-value loss";
  } else {
    totalEl.innerText = `₹0`;
    labelEl.innerText = "Total Net P/L";
    totalEl.className = "stat-value";
  }
  
  document.getElementById("matchesBet").innerText = matchesBetCount;
  
  const winRate = matchesBetCount > 0 ? Math.round((matchesWon / matchesBetCount) * 100) : 0;
  document.getElementById("winRate").innerText = `${winRate}%`;

  // Team Analytics Setup
  let goldmineTeam = "-";
  let maxProfit = -9999999;
  let sinkTeam = "-";
  let minProfit = 9999999;
  
  for (const team in teamProfits) {
    // Only consider teams, not "TBD" etc.
    if (team === 'TBD' || team.includes('Qualifier') || team === 'Final' || team === 'Eliminator') continue;
    
    if (teamProfits[team] > maxProfit) {
      maxProfit = teamProfits[team];
      goldmineTeam = team;
    }
    if (teamProfits[team] < minProfit) {
      minProfit = teamProfits[team];
      sinkTeam = team;
    }
  }

  const gmTeamEl = document.getElementById("goldmineTeam");
  const gmProfitEl = document.getElementById("goldmineProfit");
  if (gmTeamEl && gmProfitEl) {
    if (maxProfit > 0) {
      gmTeamEl.innerText = goldmineTeam;
      gmProfitEl.innerText = `+₹${maxProfit}`;
    } else {
      gmTeamEl.innerText = "-";
      gmProfitEl.innerText = `+₹0`;
    }
  }

  const sinkTeamEl = document.getElementById("sinkTeam");
  const sinkLossEl = document.getElementById("sinkLoss");
  if (sinkTeamEl && sinkLossEl) {
    if (minProfit < 0) {
      sinkTeamEl.innerText = sinkTeam;
      sinkLossEl.innerText = `-₹${Math.abs(minProfit)}`;
    } else {
      sinkTeamEl.innerText = "-";
      sinkLossEl.innerText = `-₹0`;
    }
  }

  // Pagination bounds
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = filteredMatches.slice(startIndex, endIndex);

  // Render paginated match cards
  paginatedItems.forEach(match => {
    const saved = JSON.parse(localStorage.getItem(match.id)) || {};
    const div = document.createElement("div");
    div.className = "match-card";
    
    let statusHtml = '<div class="status-indicator pending">Pending</div>';
    if (saved.status === "profit") {
      statusHtml = '<div class="status-indicator profit">Win</div>';
    } else if (saved.status === "loss") {
      statusHtml = '<div class="status-indicator loss">Loss</div>';
    }

    const fallbackLogo1 = `https://ui-avatars.com/api/?name=${match.t1}&background=1c1c1e&color=fff&rounded=true&font-size=0.4`;
    const fallbackLogo2 = `https://ui-avatars.com/api/?name=${match.t2}&background=1c1c1e&color=fff&rounded=true&font-size=0.4`;

    div.innerHTML = `
      <div class="match-card-header">
        <div class="match-date-badge">${match.date} &bull; Match ${match.id}</div>
        ${statusHtml}
      </div>

      <div class="vs-arena">
        <div class="team">
          <div class="logo-ring">
            <img src="${logos[match.t1]}" alt="${match.t1}" onerror="this.src='${fallbackLogo1}'">
          </div>
          <div class="team-name">${match.t1}</div>
        </div>
        
        <div class="vs-divider">VS</div>
        
        <div class="team">
          <div class="logo-ring">
             <img src="${logos[match.t2]}" alt="${match.t2}" onerror="this.src='${fallbackLogo2}'">
          </div>
          <div class="team-name">${match.t2}</div>
        </div>
      </div>

      <div class="interaction-zone">
        <div class="segmented-control">
          <input type="radio" class="segment-radio" name="status-${match.id}" id="profit-${match.id}" value="profit" ${saved.status === 'profit' ? 'checked' : ''}>
          <label class="segment-label profit-label" for="profit-${match.id}">Profit</label>

          <input type="radio" class="segment-radio" name="status-${match.id}" id="loss-${match.id}" value="loss" ${saved.status === 'loss' ? 'checked' : ''}>
          <label class="segment-label loss-label" for="loss-${match.id}">Loss</label>
        </div>

        <div class="input-container">
          <input type="number" class="glass-input" placeholder="Enter Amount" id="amt-${match.id}" value="${saved.amount || ''}">
        </div>

        <button class="save-action" onclick="save(${match.id}, '${match.t1} vs ${match.t2}')">
          Save Selection
        </button>
      </div>
    `;

    container.appendChild(div);
  });

  renderPagination();
}

function renderPagination() {
  const container = document.getElementById("pagination");
  const totalPages = Math.ceil(filteredMatches.length / ITEMS_PER_PAGE);

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(-1)">Previous</button>
    <span class="page-info">Page ${currentPage} of ${totalPages}</span>
    <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(1)">Next</button>
  `;
}

function changePage(direction) {
  currentPage += direction;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function save(id, matchTitle) {
  const amount = document.getElementById(`amt-${id}`).value;
  const statusElement = document.querySelector(`input[name="status-${id}"]:checked`);
  
  if (!amount || !statusElement) {
    alert("Please enter an amount and select Profit or Loss.");
    return;
  }
  
  const status = statusElement.value;
  localStorage.setItem(id, JSON.stringify({amount, status, timestamp: Date.now()}));
  
  showToast(`Saved ✅`);
  
  setTimeout(() => {
    render();
    renderRecentActivity();
  }, 100);
}

function renderRecentActivity() {
  const container = document.getElementById("recentActivityList");
  if (!container) return;
  
  let activities = [];
  matches.forEach(match => {
    const saved = JSON.parse(localStorage.getItem(match.id));
    if (saved && saved.amount && saved.status) {
      activities.push({
        match: match,
        amount: Number(saved.amount),
        status: saved.status,
        timestamp: saved.timestamp || 0
      });
    }
  });
  
  activities.sort((a, b) => b.timestamp - a.timestamp);
  const recent = activities.slice(0, 4);
  
  if (recent.length === 0) {
    container.innerHTML = `<div class="empty-state">No recent activity found. Save a bet to see it here.</div>`;
    return;
  }
  
  container.innerHTML = recent.map(act => {
    const isProfit = act.status === 'profit';
    const amountStr = (isProfit ? '+' : '-') + '₹' + act.amount;
    const timeStr = act.timestamp ? new Date(act.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Previous';
    
    return `
      <div class="activity-item">
        <div class="activity-details">
          <div class="activity-title">${act.match.t1} vs ${act.match.t2}</div>
          <div class="activity-time">${act.match.date} &bull; ${timeStr}</div>
        </div>
        <div class="activity-amount ${act.status}">
          ${amountStr}
        </div>
      </div>
    `;
  }).join('');
}

function clearAllData() {
  if (confirm("Are you sure you want to clear ALL saved betting data? This cannot be undone.")) {
    matches.forEach(m => localStorage.removeItem(m.id));
    localStorage.removeItem('baseWallet');
    if (document.getElementById('baseWallet')) {
      document.getElementById('baseWallet').value = "";
    }
    showToast("All data cleared successfully");
    render();
    renderRecentActivity();
  }
}

// Start app
window.onload = init;

// CALCULATOR LOGIC
function toggleCalculator() {
  const modal = document.getElementById('calcModal');
  modal.classList.toggle('show');
}

function calcBettingReturn() {
  const stake = parseFloat(document.getElementById('bcStake').value) || 0;
  const odds = parseFloat(document.getElementById('bcOdds').value) || 0;
  
  const returnAmt = stake * odds;
  const profitAmt = returnAmt - stake;
  
  document.getElementById('bcReturn').innerText = '₹' + returnAmt.toFixed(2);
  
  const profitEl = document.getElementById('bcProfit');
  profitEl.innerText = (profitAmt >= 0 ? '+₹' : '-₹') + Math.abs(profitAmt).toFixed(2);
  
  if (profitAmt >= 0) {
    profitEl.className = 'profit-highlight';
  } else {
    profitEl.className = 'loss-highlight';
  }
}
