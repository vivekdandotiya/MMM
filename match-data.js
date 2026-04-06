// match-data.js

const venueData = {
  "CSK": { 
    name: "M.A. Chidambaram Stadium, Chennai", avg: 165, type: "Spin Friendly", paceOrSpin: "Spinners", batOrBowl: "Bowling", size: "Sq: 64-72m | St: 65-74m",
    prevMatches: [
      { t1: "CSK", s1: "190/6", t2: "PBKS", s2: "194/6", result: "PBKS won by 4 wkts" },
      { t1: "CSK", s1: "175/4", t2: "MI", s2: "171/8", result: "CSK won by 4 runs" },
      { t1: "CSK", s1: "158/5", t2: "DC", s2: "183/6", result: "DC won by 25 runs" }
    ]
  },
  "RCB": { 
    name: "M. Chinnaswamy Stadium, Bangalore", avg: 195, type: "Batter's Paradise", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 50-65m | St: 60-70m",
    prevMatches: [
      { t1: "RCB", s1: "213/5", t2: "CSK", s2: "211/5", result: "RCB won by 2 runs" },
      { t1: "RCB", s1: "169/8", t2: "GT", s2: "170/2", result: "GT won by 8 wkts" },
      { t1: "RCB", s1: "187/9", t2: "DC", s2: "140/10", result: "RCB won by 47 runs" }
    ]
  },
  "MI": { 
    name: "Wankhede Stadium, Mumbai", avg: 185, type: "Pacer Friendly, Dew Impact", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 63-68m | St: 68-72m",
    prevMatches: [
      { t1: "MI", s1: "215/7", t2: "LSG", s2: "161/10", result: "MI won by 54 runs" },
      { t1: "MI", s1: "196/3", t2: "RCB", s2: "199/3", result: "RCB won by 7 wkts" },
      { t1: "MI", s1: "180/5", t2: "DC", s2: "121/10", result: "MI won by 59 runs" }
    ]
  },
  "KKR": { 
    name: "Eden Gardens, Kolkata", avg: 175, type: "Fast Outfield, High Scoring", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 66-68m | St: 74-78m",
    prevMatches: [
      { t1: "KKR", s1: "200/6", t2: "SRH", s2: "120/10", result: "KKR won by 80 runs" },
      { t1: "KKR", s1: "174/8", t2: "RCB", s2: "177/3", result: "RCB won by 7 wkts" },
      { t1: "KKR", s1: "179/6", t2: "CSK", s2: "183/8", result: "CSK won by 2 wkts" }
    ]
  },
  "RR": { 
    name: "Sawai Mansingh Stadium, Jaipur", avg: 160, type: "Slow Track", paceOrSpin: "Spinners", batOrBowl: "Bowling", size: "Sq: 63-72m | St: 73-78m",
    prevMatches: [
      { t1: "RR", s1: "176/6", t2: "GT", s2: "179/7", result: "GT won by 3 wkts" },
      { t1: "RR", s1: "193/4", t2: "LSG", s2: "173/6", result: "RR won by 20 runs" },
      { t1: "RR", s1: "214/2", t2: "MI", s2: "212/8", result: "RR won by 2 runs" }
    ]
  },
  "SRH": { 
    name: "Rajiv Gandhi Intl Stadium, Hyderabad", avg: 170, type: "Balanced", paceOrSpin: "Pacers", batOrBowl: "Balanced", size: "Sq: 66-69m | St: 69-71m",
    prevMatches: [
      { t1: "SRH", s1: "277/3", t2: "MI", s2: "246/5", result: "SRH won by 31 runs" },
      { t1: "SRH", s1: "165/8", t2: "CSK", s2: "166/4", result: "CSK won by 6 wkts" },
      { t1: "SRH", s1: "201/5", t2: "RR", s2: "200/7", result: "SRH won by 1 run" }
    ]
  },
  "DC": { 
    name: "Arun Jaitley Stadium, Delhi", avg: 165, type: "Slow, Spin Friendly", paceOrSpin: "Spinners", batOrBowl: "Batting", size: "Sq: 63-67m | St: 68-75m",
    prevMatches: [
      { t1: "DC", s1: "183/6", t2: "CSK", s2: "158/5", result: "DC won by 25 runs" },
      { t1: "DC", s1: "257/4", t2: "MI", s2: "247/9", result: "DC won by 10 runs" },
      { t1: "DC", s1: "208/5", t2: "RR", s2: "188/8", result: "DC won by 20 runs" }
    ]
  },
  "PBKS": { 
    name: "Mullanpur Stadium, Chandigarh", avg: 170, type: "Pace & Bounce", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 64-67m | St: 75m",
    prevMatches: [
      { t1: "PBKS", s1: "192/7", t2: "MI", s2: "195/4", result: "MI won by 6 wkts" },
      { t1: "PBKS", s1: "142/10", t2: "GT", s2: "146/3", result: "GT won by 7 wkts" },
      { t1: "PBKS", s1: "214/3", t2: "SRH", s2: "212/6", result: "PBKS won by 2 runs" }
    ]
  },
  "GT": { 
    name: "Narendra Modi Stadium, Ahmedabad", avg: 175, type: "Pacer Friendly", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 65-70m | St: 75-80m",
    prevMatches: [
      { t1: "GT", s1: "170/2", t2: "RCB", s2: "169/8", result: "GT won by 8 wkts" },
      { t1: "GT", s1: "199/4", t2: "PBKS", s2: "200/7", result: "PBKS won by 3 wkts" },
      { t1: "GT", s1: "231/3", t2: "CSK", s2: "196/8", result: "GT won by 35 runs" }
    ]
  },
  "LSG": { 
    name: "Ekana Stadium, Lucknow", avg: 150, type: "Sluggish, Spin Friendly", paceOrSpin: "Spinners", batOrBowl: "Bowling", size: "Sq: 69-76m | St: 81m",
    prevMatches: [
      { t1: "LSG", s1: "163/5", t2: "GT", s2: "130/10", result: "LSG won by 33 runs" },
      { t1: "LSG", s1: "176/8", t2: "CSK", s2: "180/2", result: "CSK won by 8 wkts" },
      { t1: "LSG", s1: "199/8", t2: "PBKS", s2: "178/5", result: "LSG won by 21 runs" }
    ]
  }
};

// Player Roles: 🏏 Batter, ⚾ Bowler, ⚡ All-Rounder, 🧤 Wicketkeeper
const squadData = {
  "CSK": ["Ruturaj Gaikwad (c) 🏏", "Rachin Ravindra ⚡", "Prashant Veer 🏏", "Shivam Dube ⚡", "MS Dhoni (wk) 🧤", "Ravindra Jadeja ⚡", "Kartik Sharma ⚾", "Deepak Chahar ⚾", "Mustafizur Rahman ⚾", "Matheesha Pathirana ⚾", "Rahul Chahar ⚾"],
  "RCB": ["Virat Kohli (c) 🏏", "Faf du Plessis 🏏", "Will Jacks ⚡", "Rajat Patidar 🏏", "Glenn Maxwell ⚡", "Dinesh Karthik (wk) 🧤", "Venkatesh Iyer ⚡", "Mohammed Siraj ⚾", "Bhuvneshwar Kumar ⚾", "Jacob Duffy ⚾", "Yash Dayal ⚾"],
  "MI": ["Rohit Sharma 🏏", "Ishan Kishan (wk) 🧤", "Suryakumar Yadav 🏏", "Hardik Pandya (c) ⚡", "Tilak Varma 🏏", "Tim David 🏏", "Quinton de Kock 🧤", "Jasprit Bumrah ⚾", "Piyush Chawla ⚾", "Gerald Coetzee ⚾", "N. Thushara ⚾"],
  "KKR": ["Finn Allen 🏏", "Ajinkya Rahane 🏏", "Angkrish Raghuvanshi 🏏", "Shreyas Iyer (c) 🏏", "Rinku Singh 🏏", "Cameron Green ⚡", "Sunil Narine ⚡", "Varun Chakaravarthy ⚾", "Mitchell Starc ⚾", "Harshit Rana ⚾", "Vaibhav Arora ⚾"],
  "RR": ["Yashasvi Jaiswal 🏏", "Jos Buttler 🧤", "Sanju Samson (c)(wk) 🧤", "Riyan Parag ⚡", "Dhruv Jurel 🏏", "Rovman Powell 🏏", "Ravichandran Ashwin ⚡", "Yuzvendra Chahal ⚾", "Trent Boult ⚾", "Avesh Khan ⚾", "Jofra Archer ⚾"],
  "SRH": ["Travis Head 🏏", "Abhishek Sharma ⚡", "Pat Cummins (c) ⚡", "Heinrich Klaasen (wk) 🧤", "Aiden Markram ⚡", "Abdul Samad 🏏", "Liam Livingstone ⚡", "Washington Sundar ⚡", "Bhuvneshwar Kumar ⚾", "T Natarajan ⚾", "Mayank Markande ⚾"],
  "DC": ["David Warner 🏏", "Prithvi Shaw 🏏", "Mitchell Marsh ⚡", "Rishabh Pant (c)(wk) 🧤", "David Miller 🏏", "Axar Patel ⚡", "Lalit Yadav ⚡", "Kuldeep Yadav ⚾", "Khaleel Ahmed ⚾", "Anrich Nortje ⚾", "Mukesh Kumar ⚾"],
  "PBKS": ["Shikhar Dhawan (c) 🏏", "Prabhsimran Singh 🧤", "Liam Livingstone ⚡", "Sam Curran ⚡", "Jitesh Sharma (wk) 🧤", "Shashank Singh 🏏", "Ashutosh Sharma 🏏", "Harshal Patel ⚾", "Kagiso Rabada ⚾", "Arshdeep Singh ⚾", "Rahul Chahar ⚾"],
  "GT": ["Shubman Gill (c) 🏏", "Sai Sudharsan 🏏", "Shahrukh Khan ⚡", "David Miller 🏏", "Rahul Tewatia ⚡", "Rashid Khan ⚡", "Noor Ahmad ⚾", "Mohit Sharma ⚾", "Umesh Yadav ⚾", "Spencer Johnson ⚾", "Joshua Little ⚾"],
  "LSG": ["KL Rahul (c)(wk) 🧤", "Quinton de Kock 🧤", "Nicholas Pooran 🏏", "Marcus Stoinis ⚡", "Ayush Badoni 🏏", "Krunal Pandya ⚡", "Ravi Bishnoi ⚾", "Mohsin Khan ⚾", "Naveen-ul-Haq ⚾", "Yash Thakur ⚾", "Amit Mishra ⚾"]
};

// Simulated historical venue performance for players active in 2025
const historicalVenueStats = {
  "CSK": [{player: "MS Dhoni", stat: "Average SR 180 here in 2025"}, {player: "R. Jadeja", stat: "6 Wickets at Econ 6.2"}],
  "RCB": [{player: "V. Kohli", stat: "2 Centuries at this venue in 2025"}, {player: "M. Siraj", stat: "8 Wickets in Powerplays"}],
  "MI": [{player: "R. Sharma", stat: "Highest Score: 92 (2025)"}, {player: "J. Bumrah", stat: "Lowest Economy (5.4) at Wankhede"}],
  "KKR": [{player: "S. Narine", stat: "Most Economical Spinner 2025"}, {player: "Rinku Singh", stat: "Strike Rate 210 at Eden Gardens"}],
  "RR": [{player: "S. Samson", stat: "Defended 3 totals alone in 2025"}, {player: "Y. Chahal", stat: "Most Wickets (9) at Jaipur venue"}],
  "SRH": [{player: "T. Head", stat: "Scored 100 in 39 balls here"}, {player: "P. Cummins", stat: "Taken 5-fer in 2025 at venue"}],
  "DC": [{player: "R. Pant", stat: "Highest Chase Average (60.5)"}, {player: "K. Yadav", stat: "Spin dominance in middle overs"}],
  "PBKS": [{player: "S. Dhawan", stat: "Solid anchoring, Avg 45 at Mullanpur"}, {player: "S. Curran", stat: "Death overs specialist 2025"}],
  "GT": [{player: "S. Gill", stat: "Unbeaten 120 in 2025 at venue"}, {player: "R. Khan", stat: "Unplayable Googly at Ahmedabad"}],
  "LSG": [{player: "KL Rahul", stat: "Steady average 55.4"}, {player: "R. Bishnoi", stat: "Best figures 4/15 at Ekana"}]
};

function getMatchIntelligence(t1, t2) {
  return {
    venue: venueData[t1] || venueData["CSK"],
    team1Squad: squadData[t1] || squadData["CSK"],
    team2Squad: squadData[t2] || squadData["RCB"],
    historyT1: historicalVenueStats[t1] || [],
    historyT2: historicalVenueStats[t2] || []
  };
}
