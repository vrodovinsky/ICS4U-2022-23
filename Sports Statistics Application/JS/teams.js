let teams = [];

let team = {};
team["logo"] = "AH.svg";
team["name"] = "Atlanta Hawks";
team["conference"] = "Eastern";
team["id"] = 1;
team["W"] = 5;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Houston Rockets",
    score: [117, 107],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Orlando Magic",
    score: [108, 98],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Charlotte Hornets",
    score: [109, 126],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Detriot Pistons",
    score: [118, 113],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Detriot Pistons",
    score: [136, 112],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Milwaukee Bucks",
    score: [115, 123],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Toronto Raptors",
    score: [109, 139],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "New York Knicks",
    score: [112, 99],
  },
];
teams.push(team);

team = {};
team["name"] = "Boston Celtics";
team["conference"] = "Eastern";
team["id"] = 2;
team["W"] = 4;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-18",
    opp: "Philadelphia 76ers",
    score: [126, 117],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Maimi Heat",
    score: [111, 104],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Orlando Magic",
    score: [126, 120],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Chicago Bulls",
    score: [102, 120],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Cleveland Cavaliers",
    score: [123, 132],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "Washington Wizards",
    score: [112, 94],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Cleveland Cavaliers",
    score: [113, 114],
  },
];
teams.push(team);

team = {};
team["name"] = "Chicago Bulls";
team["conference"] = "Eastern";
team["id"] = 3;
team["W"] = 5;
team["L"] = 4;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Maimi Heat",
    score: [116, 108],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Washington Wizards",
    score: [100, 102],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Cleveland Cavaliers",
    score: [96, 128],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Boston Celtics",
    score: [120, 102],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Indiana Pacers",
    score: [124, 109],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "San Antonio Spurs",
    score: [124, 129],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Philadelphia 76ers",
    score: [109, 114],
  },
  {
    home: false,
    date: "2022-11-01",
    opp: "Brooklyn Nets",
    score: [108, 99],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Charlotte Hornets",
    score: [106, 88],
  },
];
teams.push(team);

team = {};
team["name"] = "Golden State Warriors";
team["conference"] = "Western";
team["id"] = 4;
team["W"] = 3;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-18",
    opp: "Los Angeles Lakers",
    score: [123, 109],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Denver Nuggets",
    score: [123, 128],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Sacramento Kings",
    score: [130, 125],
  },
  {
    home: false,
    date: "2022-10-25",
    opp: "Phoenix Suns",
    score: [105, 135],
  },
  {
    home: true,
    date: "2022-10-27",
    opp: "Maimi Heat",
    score: [123, 110],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Charlotte Hornets",
    score: [113, 120],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Detriot Pistons",
    score: [114, 128],
  },
  {
    home: false,
    date: "2022-11-01",
    opp: "Maimi Heat",
    score: [109, 116],
  },
];
teams.push(team);

team = {};
team["name"] = "Los Angeles Clippers";
team["conference"] = "Western";
team["id"] = 5;
team["W"] = 4;
team["L"] = 4;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-20",
    opp: "Los Angeles Lakers",
    score: [103, 97],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Sacramento Kings",
    score: [111, 109],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Phoenix Suns",
    score: [95, 112],
  },
  {
    home: false,
    date: "2022-10-25",
    opp: "Oklahoma City Thunder",
    score: [94, 108],
  },
  {
    home: false,
    date: "2022-10-27",
    opp: "Oklahoma City Thunder",
    score: [110, 118],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "New Orleans Pelicans",
    score: [91, 112],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Houston Rockets",
    score: [95, 93],
  },
];
teams.push(team);

team = {};
team["name"] = "Maimi Heat";
team["conference"] = "Eastern";
team["id"] = 6;
team["W"] = 4;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Chicago Bulls",
    score: [108, 116],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Boston Celtics",
    score: [104, 111],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Toronto Raptors",
    score: [112, 109],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Toronto Raptors",
    score: [90, 98],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Portland Trail Blazers",
    score: [119, 98],
  },
  {
    home: false,
    date: "2022-10-27",
    opp: "Golden State Warriors",
    score: [110, 123],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Sacramento Kings",
    score: [113, 119],
  },
  {
    home: true,
    date: "2022-11-01",
    opp: "Phoenix Suns",
    score: [116, 109],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Sacramento Kings",
    score: [110, 107],
  },
];
teams.push(team);

team = {};
team["name"] = "Brooklyn Nets";
team["conference"] = "Eastern";
team["id"] = 7;
team["W"] = 2;
team["L"] = 6;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "New Orleans Pelicans",
    score: [108, 130],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Toronto Raptors",
    score: [109, 105],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Memphis Grizzlies",
    score: [124, 134],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Milkwaukee Bucks",
    score: [99, 110],
  },
  {
    home: true,
    date: "2022-10-27",
    opp: "Dallas Mavericks",
    score: [125, 129],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Indiana Pacers",
    score: [116, 125],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Indiana Pacers",
    score: [116, 109],
  },
  {
    home: true,
    date: "2022-11-01",
    opp: "Chicago Bulls",
    score: [99, 108],
  },
];
teams.push(team);

team = {};
team["name"] = "New York Knicks";
team["conference"] = "Eastern";
team["id"] = 8;
team["W"] = 3;
team["L"] = 4;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-19-22",
    opp: "Memphis Grizzlies",
    score: [112, 115],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Detriot Pistons",
    score: [130, 106],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Orlando Magic",
    score: [115, 102],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Charlotte Hornets",
    score: [134, 131],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Milwaukee Bucks",
    score: [108, 119],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Cleveland Cavaliers",
    score: [108, 121],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Atlanta Hawks",
    score: [99, 112],
  },
];
teams.push(team);

team = {};
team["name"] = "Toronto Raptors";
team["conference"] = "Eastern";
team["id"] = 9;
team["W"] = 5;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-19-22",
    opp: "Cleveland Cavaliers",
    score: [108, 105],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Brooklyn Nets",
    score: [105, 109],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Maimi Heat",
    score: [109, 112],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Maimi Heat",
    score: [98, 90],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Philadelphia 76ers",
    score: [119, 109],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Philadelphia 76ers",
    score: [90, 112],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Atlanta Hawks",
    score: [139, 109],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "San Antonio Spurs",
    score: [143, 100],
  },
];
teams.push(team);

team = {};
team["name"] = "Los Angeles Lakers";
team["conference"] = "Western";
team["id"] = 10;
team["W"] = 2;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-18",
    opp: "Golden State Warriors",
    score: [109, 123],
  },
  {
    home: true,
    date: "2022-10-20",
    opp: "Los Angeles Clippers",
    score: [97, 103],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Portland Trail Blazers",
    score: [104, 106],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Denver Nuggets",
    score: [99, 110],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Minnesota Timberwolves",
    score: [102, 111],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "Denver Nuggets",
    score: [121, 110],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "New Orleans Pelicans",
    score: [120, 117],
  },
];
teams.push(team);

team = {};
team["name"] = "Charlotte Hornets";
team["conference"] = "Eastern";
team["id"] = 11;
team["W"] = 3;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "San Antonio Spurs",
    score: [129, 102],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "New Orleans Pelicans",
    score: [112, 124],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "Atlanta Hawks",
    score: [126, 109],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "New York Knicks",
    score: [131, 134],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Orlando Magic",
    score: [93, 113],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Golden State Warriors",
    score: [120, 113],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Sacramento Kings",
    score: [108, 115],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Chicago Bulls",
    score: [88, 106],
  },
];
teams.push(team);

team = {};
team["name"] = "Cleveland Cavaliers";
team["conference"] = "Eastern";
team["id"] = 12;
team["W"] = 6;
team["L"] = 1;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Toronto Raptors",
    score: [105, 108],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Chicago Bulls",
    score: [128, 96],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Washington Wizards",
    score: [117, 107],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Orlando Magic",
    score: [105, 92],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Boston Celtics",
    score: [132, 123],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "New York Knicks",
    score: [121, 108],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Boston Celtics",
    score: [114, 113],
  },
];
teams.push(team);

team = {};
team["name"] = "Detriot Pistons";
team["conference"] = "Eastern";
team["id"] = 13;
team["W"] = 2;
team["L"] = 7;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Orlando Magic",
    score: [113, 109],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "New York Knicks",
    score: [106, 130],
  },
  {
    home: false,
    date: "12022-10-22",
    opp: "Indiana Pacers",
    score: [115, 124],
  },
  {
    home: false,
    date: "2022-10-25",
    opp: "Washington Wizards",
    score: [99, 120],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Atlanta Hawks",
    score: [113, 118],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Atlanta Hawks",
    score: [112, 136],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "Golden State Warriors",
    score: [128, 114],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Milwaukee Bucks",
    score: [108, 110],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Milwaukee Bucks",
    score: [91, 116],
  },
];
teams.push(team);

team = {};
team["name"] = "Orlando Magic";
team["conference"] = "Eastern";
team["id"] = 14;
team["W"] = 1;
team["L"] = 7;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-19-22",
    opp: "Detriot Pistons",
    score: [109, 113],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Atlanta Hawks",
    score: [98, 108],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Boston Celtics",
    score: [120, 126],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "New York Knicks",
    score: [102, 115],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Cleveland Cavaliers",
    score: [92, 103],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Charlotte Hornets",
    score: [113, 93],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Dallas Mavericks",
    score: [105, 114],
  },
  {
    home: false,
    date: "12022-11-01",
    opp: "Oklahoma City Thunder",
    score: [108, 116],
  },
];
teams.push(team);

team = {};
team["name"] = "Philadelphia 76ers";
team["conference"] = "Eastern";
team["id"] = 15;
team["W"] = 4;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-18",
    opp: "Boston Celtics",
    score: [117, 126],
  },
  {
    home: true,
    date: "2022-10-20",
    opp: "Milwaukee Bucks",
    score: [88, 90],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "San Antonio Spurs",
    score: [105, 114],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Indiana Pacers",
    score: [120, 106],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Toronto Raptors",
    score: [109, 119],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Toronto Raptors",
    score: [112, 90],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Chicago Bulls",
    score: [114, 109],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Washington Wizards",
    score: [118, 111],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Washington Wizards",
    score: [111, 121],
  },
];
teams.push(team);

team = {};
team["name"] = "Indiana Pacers";
team["conference"] = "Eastern";
team["id"] = 16;
team["W"] = 3;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Washington Wizards",
    score: [107, 114],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "San Antonio Spurs",
    score: [134, 137],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Detriot Pistons",
    score: [124, 115],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Philadelphia 76ers",
    score: [106, 120],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Chicago Bulls",
    score: [109, 124],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Washington Wizards",
    score: [127, 117],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Brooklyn Nets",
    score: [125, 116],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Brooklyn Nets",
    score: [109, 116],
  },
];
teams.push(team);

team = {};
team["name"] = "Washington Wizards";
team["conference"] = "Eastern";
team["id"] = 17;
team["W"] = 4;
team["L"] = 4;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Indiana Pacers",
    score: [114, 107],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Chicago Bulls",
    score: [102, 100],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "Cleveland Cavaliers",
    score: [107, 117],
  },
  {
    home: true,
    date: "2022-10-25",
    opp: "Detriot Pistons",
    score: [120, 99],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Indiana Pacers",
    score: [117, 127],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Boston Celtics",
    score: [94, 112],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Philadelphia 76ers",
    score: [111, 118],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Philadelphia 76ers",
    score: [121, 111],
  },
];
teams.push(team);

team = {};
team["name"] = "Milwaukee Bucks";
team["conference"] = "Eastern";
team["id"] = 18;
team["W"] = 7;
team["L"] = 0;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-20",
    opp: "Philadelphia 76ers",
    score: [90, 88],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Houston Rockets",
    score: [125, 105],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Brooklyn Nets",
    score: [110, 99],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "New York Knicks",
    score: [119, 108],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Atlanta Hawks",
    score: [123, 115],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Detriot Pistons",
    score: [110, 108],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Detriot Pistons",
    score: [116, 91],
  },
];
teams.push(team);

team = {};
team["name"] = "Dallas Mavericks";
team["conference"] = "Western";
team["id"] = 19;
team["W"] = 4;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Phoenix Suns",
    score: [105, 107],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Memphis Grizzlies",
    score: [137, 96],
  },
  {
    home: false,
    date: "2022-10-25",
    opp: "New Orleans Pelicans",
    score: [111, 113],
  },
  {
    home: false,
    date: "2022-10-27",
    opp: "Brooklyn Nets",
    score: [129, 125],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Oklahoma City Thunder",
    score: [111, 117],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "Orlando Magic",
    score: [114, 105],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Utah Jazz",
    score: [103, 100],
  },
];
teams.push(team);

team = {};
team["name"] = "Denver Nuggets";
team["conference"] = "Western";
team["id"] = 20;
team["W"] = 4;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Utah Jazz",
    score: [102, 123],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Golden State Warriors",
    score: [128, 123],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Oklahoma City Thunder",
    score: [122, 117],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Portland Trail Blazers",
    score: [110, 135],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Los Angeles Lakers",
    score: [110, 99],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Utah Jazz",
    score: [117, 101],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Los Angeles Lakers",
    score: [121, 110],
  },
];
teams.push(team);

team = {};
team["name"] = "Houston Rockets";
team["conference"] = "Western";
team["id"] = 21;
team["W"] = 1;
team["L"] = 8;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Atlanta Hawks",
    score: [107, 117],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Memphis Grizzlies",
    score: [122, 129],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Milwaukee Bucks",
    score: [105, 125],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Utah Jazz",
    score: [114, 108],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Utah Jazz",
    score: [101, 109],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Portland Trail Blazers",
    score: [111, 125],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Phoenix Suns",
    score: [109, 124],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Los Angeles Clippers",
    score: [93, 95],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Los Angeles Clippers",
    score: [101, 109],
  },
];
teams.push(team);

team = {};
team["name"] = "Minnesota Timberwolves";
team["conference"] = "Western";
team["id"] = 22;
team["W"] = 4;
team["L"] = 4;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Oklahoma City Thunder",
    score: [115, 108],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Utah Jazz",
    score: [126, 132],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "Oklahoma City Thunder",
    score: [116, 106],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "San Antonio Spurs",
    score: [106, 115],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "San Antonio Spurs",
    score: [134, 122],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Los Angeles Lakers",
    score: [111, 102],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "San Antonio Spurs",
    score: [98, 107],
  },
  {
    home: false,
    date: "2022-11-01",
    opp: "Oklahoma City Thunder",
    score: [107, 116],
  },
];
teams.push(team);

team = {};
team["name"] = "Memphis Grizzlies";
team["conference"] = "Western";
team["id"] = 23;
team["W"] = 5;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "New York Knicks",
    score: [115, 112],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Houston Rockets",
    score: [129, 122],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Dallas Mavericks",
    score: [96, 137],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Brooklyn Nets",
    score: [134, 124],
  },
  {
    home: false,
    date: "2022-10-27",
    opp: "Sacramento Kings",
    score: [125, 110],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Utah Jazz",
    score: [123, 124],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Utah Jazz",
    score: [105, 121],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Portland Trail Blazers",
    score: [111, 106],
  },
];
teams.push(team);

team = {};
team["name"] = "Oklahoma City Thunder";
team["conference"] = "Western";
team["id"] = 24;
team["W"] = 4;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Minnesota Timberwolves",
    score: [108, 115],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Denver Nuggets",
    score: [117, 122],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Minnesota Timberwolves",
    score: [106, 116],
  },
  {
    home: true,
    date: "2022-10-25",
    opp: "Los Angeles Clippers",
    score: [108, 94],
  },
  {
    home: true,
    date: "2022-10-27",
    opp: "Los Angeles Clippers",
    score: [118, 110],
  },
  {
    home: false,
    date: "2022-10-29",
    opp: "Dallas Mavericks",
    score: [117, 111],
  },
  {
    home: true,
    date: "2022-11-01",
    opp: "Orlando Magic",
    score: [116, 108],
  },
];
teams.push(team);

team = {};
team["name"] = "New Orleans Pelicans";
team["conference"] = "Western";
team["id"] = 25;
team["W"] = 4;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Brooklyn Nets",
    score: [130, 108],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Charlotte Hornets",
    score: [124, 112],
  },
  {
    home: true,
    date: "2022-10-23",
    opp: "Utah Jazz",
    score: [121, 122],
  },
  {
    home: true,
    date: "2022-10-25",
    opp: "Dallas Mavericks",
    score: [113, 111],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Phoenix Suns",
    score: [111, 124],
  },
  {
    home: false,
    date: "2022-10-30",
    opp: "Los Angeles Clippers",
    score: [112, 91],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Los Angeles Lakers",
    score: [117, 120],
  },
];
teams.push(team);

team = {};
team["name"] = "Portland Trail Blazers";
team["conference"] = "Western";
team["id"] = 26;
team["W"] = 5;
team["L"] = 2;
team["PCT"] = 0;
team["games"] = [
  {
    home: false,
    date: "2022-10-19",
    opp: "Sacramento Kings",
    score: [115, 108],
  },
  {
    home: true,
    date: "2022-10-21",
    opp: "Phoenix Suns",
    score: [113, 111],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "Los Angeles Lakers",
    score: [106, 104],
  },
  {
    home: true,
    date: "2022-10-24",
    opp: "Denver Nuggets",
    score: [135, 110],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Maimi Heat",
    score: [98, 119],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Houston Rockets",
    score: [125, 111],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Memphis Grizzlies",
    score: [106, 111],
  },
];
teams.push(team);

team = {};
team["name"] = "Phoenix Suns";
team["conference"] = "Western";
team["id"] = 27;
team["W"] = 6;
team["L"] = 1;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Dallas Mavericks",
    score: [107, 105],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Portland Trail Blazers",
    score: [111, 113],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "Los Angeles Clippers",
    score: [112, 95],
  },
  {
    home: true,
    date: "2022-10-25",
    opp: "Golden State Warriors",
    score: [134, 105],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "New Orleans Pelicans",
    score: [124, 111],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "Houston Rockets",
    score: [124, 109],
  },
  {
    home: true,
    date: "2022-11-01",
    opp: "Minnesota Timberwolves",
    score: [116, 107],
  },
];
teams.push(team);

team = {};
team["name"] = "San Antonio Spurs";
team["conference"] = "Western";
team["id"] = 28;
team["W"] = 5;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Charlotte Hornets",
    score: [102, 129],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Indiana Pacers",
    score: [137, 134],
  },
  {
    home: false,
    date: "2022-10-22",
    opp: "Philadelphia 76ers",
    score: [114, 105],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Minnesota Timberwolves",
    score: [115, 106],
  },
  {
    home: false,
    date: "2022-10-26",
    opp: "Minnesota Timberwolves",
    score: [122, 134],
  },
  {
    home: true,
    date: "2022-10-28",
    opp: "Chicago Bulls",
    score: [129, 124],
  },
  {
    home: true,
    date: "2022-10-30",
    opp: "Minnesota Timberwolves",
    score: [107, 98],
  },
  {
    home: true,
    date: "2022-11-02",
    opp: "Toronto Raptors",
    score: [100, 143],
  },
];
teams.push(team);

team = {};
team["name"] = "Utah Jazz";
team["conference"] = "Western";
team["id"] = 29;
team["W"] = 6;
team["L"] = 3;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Denver Nuggets",
    score: [123, 102],
  },
  {
    home: false,
    date: "2022-10-21",
    opp: "Minnesota Timberwolves",
    score: [132, 126],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "New Orleans Pelicans",
    score: [122, 121],
  },
  {
    home: false,
    date: "2022-10-24",
    opp: "Houston Rockets",
    score: [108, 114],
  },
  {
    home: true,
    date: "2022-10-26",
    opp: "Houston Rockets",
    score: [109, 101],
  },
  {
    home: false,
    date: "2022-10-28",
    opp: "Denver Nuggets",
    score: [101, 117],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Memphis Grizzlies",
    score: [124, 123],
  },
  {
    home: true,
    date: "2022-10-31",
    opp: "Memphis Grizzlies",
    score: [121, 105],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Dallas Mavericks",
    score: [100, 103],
  },
];
teams.push(team);

team = {};
team["name"] = "Sacramento Kings";
team["conference"] = "Western";
team["id"] = 30;
team["W"] = 2;
team["L"] = 5;
team["PCT"] = 0;
team["games"] = [
  {
    home: true,
    date: "2022-10-19",
    opp: "Portland Trail Blazers",
    score: [108, 115],
  },
  {
    home: true,
    date: "2022-10-22",
    opp: "Los Angeles Clippers",
    score: [109, 111],
  },
  {
    home: false,
    date: "2022-10-23",
    opp: "Golden State Warriors",
    score: [125, 130],
  },
  {
    home: true,
    date: "2022-10-27",
    opp: "Memphis Grizzlies",
    score: [110, 125],
  },
  {
    home: true,
    date: "2022-10-29",
    opp: "Maimi Heat",
    score: [119, 113],
  },
  {
    home: false,
    date: "2022-10-31",
    opp: "Charlotte Hornets",
    score: [115, 108],
  },
  {
    home: false,
    date: "2022-11-02",
    opp: "Maimi Heat",
    score: [107, 110],
  },
];
teams.push(team);

function calculatePCT() {
  teams.forEach((team) => {
    team.PCT = ((team.W / (team.W + team.L)) * 100).toFixed(1);
  });
}

calculatePCT();

function calculateRank(teams, conf) {
  let t = teams.filter((team) => team.conference === conf);
  t.sort((a, b) => {
    return b.PCT - a.PCT;
  });
  for (let i = 0; i < t.length; i++) {
    t[i].rank = i + 1;
  }
}

calculateRank(teams, "Western");
calculateRank(teams, "Eastern");

localStorage.setItem("teams", JSON.stringify(teams));
