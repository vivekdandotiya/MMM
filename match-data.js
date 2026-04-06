// match-data.js

const venueData = {
  "CSK": { 
    name: "M.A. Chidambaram Stadium, Chennai", avg: 165, type: "Spin Friendly", paceOrSpin: "Spinners", batOrBowl: "Bowling", size: "Sq: 64-72m | St: 65-74m",
    prevMatch: { t1: "CSK", s1: "190/6", t2: "PBKS", s2: "194/6", result: "PBKS won by 4 wickets" }
  },
  "RCB": { 
    name: "M. Chinnaswamy Stadium, Bangalore", avg: 195, type: "Batter's Paradise", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 50-65m | St: 60-70m",
    prevMatch: { t1: "RCB", s1: "213/5", t2: "CSK", s2: "211/5", result: "RCB won by 2 runs" }
  },
  "MI": { 
    name: "Wankhede Stadium, Mumbai", avg: 185, type: "Pacer Friendly, Dew Impact", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 63-68m | St: 68-72m",
    prevMatch: { t1: "MI", s1: "215/7", t2: "LSG", s2: "161/10", result: "MI won by 54 runs" }
  },
  "KKR": { 
    name: "Eden Gardens, Kolkata", avg: 175, type: "Fast Outfield, High Scoring", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 66-68m | St: 74-78m",
    prevMatch: { t1: "KKR", s1: "200/6", t2: "SRH", s2: "120/10", result: "KKR won by 80 runs" }
  },
  "RR": { 
    name: "Sawai Mansingh Stadium, Jaipur", avg: 160, type: "Slow Track", paceOrSpin: "Spinners", batOrBowl: "Bowling", size: "Sq: 63-72m | St: 73-78m",
    prevMatch: { t1: "RR", s1: "176/6", t2: "GT", s2: "179/7", result: "GT won by 3 wickets" }
  },
  "SRH": { 
    name: "Rajiv Gandhi Intl Stadium, Hyderabad", avg: 170, type: "Balanced", paceOrSpin: "Pacers", batOrBowl: "Balanced", size: "Sq: 66-69m | St: 69-71m",
    prevMatch: { t1: "SRH", s1: "277/3", t2: "MI", s2: "246/5", result: "SRH won by 31 runs" }
  },
  "DC": { 
    name: "Arun Jaitley Stadium, Delhi", avg: 165, type: "Slow, Spin Friendly", paceOrSpin: "Spinners", batOrBowl: "Batting", size: "Sq: 63-67m | St: 68-75m",
    prevMatch: { t1: "DC", s1: "183/6", t2: "CSK", s2: "158/5", result: "DC won by 25 runs" }
  },
  "PBKS": { 
    name: "Mullanpur Stadium, Chandigarh", avg: 170, type: "Pace & Bounce", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 64-67m | St: 75m",
    prevMatch: { t1: "PBKS", s1: "192/7", t2: "MI", s2: "195/4", result: "MI won by 6 wickets" }
  },
  "GT": { 
    name: "Narendra Modi Stadium, Ahmedabad", avg: 175, type: "Pacer Friendly", paceOrSpin: "Pacers", batOrBowl: "Batting", size: "Sq: 65-70m | St: 75-80m",
    prevMatch: { t1: "GT", s1: "170/2", t2: "RCB", s2: "169/8", result: "GT won by 8 wickets" }
  },
  "LSG": { 
    name: "Ekana Stadium, Lucknow", avg: 150, type: "Sluggish, Spin Friendly", paceOrSpin: "Spinners", batOrBowl: "Bowling", size: "Sq: 69-76m | St: 81m",
    prevMatch: { t1: "LSG", s1: "165/5", t2: "KKR", s2: "160/8", result: "LSG won by 5 runs" }
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
