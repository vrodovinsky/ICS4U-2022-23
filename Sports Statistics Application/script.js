function store() {
  let team1 = document.getElementById("team1");
  localStorage.setItem("team1", team1.value);
}
function calculateHomeWinsLosses(games) {
  let wins = 0;
  let losses = 0;

  games.forEach((game) => {
    if (game.score[0] > game.score[1] && game.home) {
      wins++;
    }
    if (game.score[0] < game.score[1] && game.home) {
      losses++;
    }
  });
  return `${wins} - ${losses}`;
}

function calculateRoadWinsLosses(games) {
  let wins = 0;
  let losses = 0;

  games.forEach((game) => {
    if (game.score[0] > game.score[1] && !game.home) {
      wins++;
    }
    if (game.score[0] < game.score[1] && !game.home) {
      losses++;
    }
  });
  return `${wins} - ${losses}`;
}

function createTable(teams, conference) {
  let tableBody =
    conference === "Eastern"
      ? document.querySelector("#Estandings tbody")
      : document.querySelector("#Wstandings tbody");
  tableBody.replaceChildren();

  teams.forEach((team) => {
    if (team.conference != conference) {
      return;
    }
    const row = document.createElement("tr");
    let coll = document.createElement("td");
    coll.textContent = team.rank;
    row.appendChild(coll);
    coll = document.createElement("td");
    link = document.createElement("a");
    link.textContent = team.name;
    link.href = "./teams.html?id=" + team.id;
    coll.appendChild(link);
    row.appendChild(coll);
    coll = document.createElement("td");
    coll.textContent = team.W;
    row.appendChild(coll);
    coll = document.createElement("td");
    coll.textContent = team.L;
    row.appendChild(coll);
    coll = document.createElement("td");
    coll.textContent = team.PCT;
    row.appendChild(coll);
    coll = document.createElement("td");
    coll.textContent = calculateHomeWinsLosses(team.games);
    row.appendChild(coll);
    coll = document.createElement("td");
    coll.textContent = calculateRoadWinsLosses(team.games);
    row.appendChild(coll);

    tableBody.appendChild(row);
  });
}

// Sort order: "", "ASC", "DESC"
const standingSortOrder = {
  name: "",
  W: "",
  L: "",
  PCT: "",
  rank: "",
};

function sort(field, conference) {
  if (standingSortOrder[field] === "") {
    standingSortOrder[field] = "ASC";
  } else if (standingSortOrder[field] === "ASC") {
    standingSortOrder[field] = "DESC";
  } else if (standingSortOrder[field] === "DESC") {
    standingSortOrder[field] = "ASC";
  }
  if (field === "name") {
    teams = teams.sort((teamA, teamB) => {
      if (standingSortOrder[field] === "ASC") {
        return teamA.name < teamB.name ? -1 : 1;
      } else if (standingSortOrder[field] === "DESC") {
        return teamA.name > teamB.name ? -1 : 1;
      } else return 0;
    });
  } else if (field === "W") {
    teams = teams.sort((teamA, teamB) => {
      if (standingSortOrder[field] === "ASC") {
        return teamA.W - teamB.W;
      } else if (standingSortOrder[field] === "DESC") {
        return teamB.W - teamA.W;
      } else return 0;
    });
  } else if (field === "L") {
    teams = teams.sort((teamA, teamB) => {
      if (standingSortOrder[field] === "ASC") {
        return teamA.L - teamB.L;
      } else if (standingSortOrder[field] === "DESC") {
        return teamB.L - teamA.L;
      } else return 0;
    });
  } else if (field === "PCT") {
    teams = teams.sort((teamA, teamB) => {
      if (standingSortOrder[field] === "ASC") {
        return teamA.PCT - teamB.PCT;
      } else if (standingSortOrder[field] === "DESC") {
        return teamB.PCT - teamA.PCT;
      } else return 0;
    });
  } else if (field === "rank") {
    teams = teams.sort((teamA, teamB) => {
      if (standingSortOrder[field] === "ASC") {
        return teamB.rank - teamA.rank;
      } else if (standingSortOrder[field] === "DESC") {
        return teamA.rank - teamB.rank;
      } else return 0;
    });
  }
  return teams;
}

createTable(teams, "Eastern");
createTable(teams, "Western");

function chooseConference(dropdownId) {
  let dropdown = document.getElementById(dropdownId);

  while (dropdown.firstChild) {
    dropdown.removeChild(dropdown.firstChild);
  }

  let v = document.getElementsByName("conference");
  let conf = "";

  for (let i = 0; i < v.length; i++) {
    if (v[i].checked) conf = v[i].id;
  }

  let teams = localStorage.getItem("teams");

  teams = JSON.parse(teams);

  const confTeams = teams.filter((c) => c.conference == conf);

  confTeams.forEach((team) => {
    let o = document.createElement("option");
    o.textContent = team.name;
    o.value = team.id;
    dropdown.appendChild(o);
  });
}

function navbarStart() {
  let teams = localStorage.getItem("teams");
  teams = JSON.parse(teams);

  let Enavbar = document.getElementById("eastern-menu");

  const Eteam = teams.filter((team) => team.conference === "Eastern");

  Eteam.forEach((team) => {
    let item = document.createElement("div");
    item.classList.add("dropdown-content");
    let link = document.createElement("a");
    link.textContent = team.name;
    link.href = "./teams.html?id=" + team.id;
    item.appendChild(link);
    Enavbar.appendChild(item);
  });

  let Wnavbar = document.getElementById("western-menu");

  const Wteam = teams.filter((team) => team.conference == "Western");

  Wteam.forEach((team) => {
    let item = document.createElement("div");
    item.classList.add("dropdown-content");
    let link = document.createElement("a");
    link.textContent = team.name;
    link.href = "./teams.html?id=" + team.id;
    item.appendChild(link);
    Wnavbar.appendChild(item);
  });
}
