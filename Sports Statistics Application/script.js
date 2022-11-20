function storeGame() {
  const teams = JSON.parse(localStorage.getItem("teams"));

  let homeTeamId = parseInt(document.getElementById("homeTeam").value);
  let homeTeam = teams.find((team) => team.id === homeTeamId);
  let awayTeamId = parseInt(document.getElementById("awayTeam").value);
  let awayTeam = teams.find((team) => team.id === awayTeamId);

  let homeTeamScore = document.getElementById("homeTeamScore").value;
  let awayTeamScore = document.getElementById("awayTeamScore").value;

  const gameDate = new Date(document.getElementById("gameDate").value);

  if (homeTeamScore > awayTeamScore) {
    homeTeam.W++;
    awayTeam.L++;
  } else {
    homeTeam.L++;
    awayTeam.W++;
  }

  let homeGame = {
    home: true,
    date: gameDate,
    opp: awayTeam.name,
    score: [homeTeamScore, awayTeamScore],
  };
  homeTeam.games.push(homeGame);

  let awayGame = {
    home: false,
    date: gameDate,
    opp: homeTeam.name,
    score: [awayTeamScore, homeTeamScore],
  };
  awayTeam.games.push(awayGame);

  localStorage.setItem("teams", JSON.stringify(teams));
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

function chooseConference(dropdownId) {
  let dropdown = document.getElementById(dropdownId);

  while (dropdown.firstChild) {
    dropdown.removeChild(dropdown.firstChild);
  }

  let v = document.querySelectorAll("[name]");
  let conf = "";

  for (let i = 0; i < v.length; i++) {
    if (v[i].checked) conf = v[i].id;
  }

  let teams = localStorage.getItem("teams");

  teams = JSON.parse(teams);

  const confTeams = teams.filter((c) => {
    return c.conference == conf.split("-")[0];
  });

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
    link.classList.add("dropdown-item", "has-text-link-dark");
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
    link.classList.add("dropdown-item", "has-text-link-dark");
    link.textContent = team.name;
    link.href = "./teams.html?id=" + team.id;
    item.appendChild(link);
    Wnavbar.appendChild(item);
  });
}

function getGamesByDate(page) {
  const PAGE_SIZE = 3;
  const teams = JSON.parse(localStorage.getItem("teams"));

  let date = new Date(document.getElementById("date").value);
  let totalGames = 0
  let count = 0

  let allGames = document.getElementById("allGames")
  while (allGames.firstChild) {
    allGames.removeChild(allGames.firstChild);
  }

  teams.forEach((team) => {
    team.games.forEach((game) => {
      if (new Date(game.date).getTime() === date.getTime() && game.home) {
        totalGames++
      }
    });
  });

  teams.forEach((team) => {
    team.games.forEach((game) => {
      if (new Date(game.date).getTime() === date.getTime() && game.home) {
        const opp = teams.find((team) => team.name === game.opp);
        if (count >= (page - 1) * PAGE_SIZE && count < page * PAGE_SIZE) {
          displayGame(game, team, opp);
        }
        count++
      }
    });
  });
  displayButtonsByDate(totalGames, PAGE_SIZE, page)
}

function getGamesByTeam(page) {
  const PAGE_SIZE = 3;
  const dataString = localStorage.getItem("teams");
  const teams = JSON.parse(dataString);
  let params = new URL(document.location).searchParams;

  const id = parseInt(params.get("id"));
  const team = teams.find((team) => team.id === id);

  let totalGames = team.games.length
  let count = 0

  let allGames = document.getElementById("allGames")
  while (allGames.firstChild) {
    allGames.removeChild(allGames.firstChild);
  }



  team.games.forEach((game) => {
    const opp = teams.find((team) => team.name === game.opp);
    if (count >= (page - 1) * PAGE_SIZE && count < page * PAGE_SIZE) {
      displayGame(game, team, opp);
    }
    count++
  });

  displayButtonsByTeam(totalGames, PAGE_SIZE, page)
}

function displayButtonsByDate(gamesCount, pageSize, currentPage) {
  let numPages = gamesCount / pageSize;
  let nav = document.getElementById("paginator")

  while (nav.firstChild) {
    nav.removeChild(nav.firstChild);
  }

  let ul = document.createElement("ul")
  ul.classList.add("pagination-list")
  nav.append(ul)

  for (let i = 0; i < numPages; i++) {
    let li = document.createElement("li")
    ul.append(li)

    let button = document.createElement("a")
    if (i + 1 == currentPage) {
      button.classList.add("pagination-link", "is-current")
    } else {
      button.classList.add("pagination-link")
    }

    button.addEventListener('click', () => { getGamesByDate(i + 1) })
    button.textContent = i + 1
    li.append(button)
  }
}

function displayButtonsByTeam(gamesCount, pageSize, currentPage) {
  let numPages = gamesCount / pageSize;
  let nav = document.getElementById("paginator")

  while (nav.firstChild) {
    nav.removeChild(nav.firstChild);
  }

  let ul = document.createElement("ul")
  ul.classList.add("pagination-list")
  nav.append(ul)

  for (let i = 0; i < numPages; i++) {
    let li = document.createElement("li")
    ul.append(li)

    let button = document.createElement("a")
    if (i + 1 == currentPage) {
      button.classList.add("pagination-link", "is-current")
    } else {
      button.classList.add("pagination-link")
    }
    button.addEventListener('click', () => { getGamesByTeam(i + 1) })
    button.textContent = i + 1
    li.append(button)
  }
}

function displayGame(game, team, opp) {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  card.append(cardContent);
  let content = document.createElement("div");
  content.classList.add("content");
  cardContent.append(content);
  let cardContentPage = document.createElement("div");
  cardContentPage.classList.add("card-content");
  content.append(cardContentPage);
  let cardContentOpp = document.createElement("div");
  cardContentOpp.classList.add("card-content");
  content.append(cardContentOpp);

  let homeTeam = document.createElement("p");
  homeTeam.classList.add(
    "title",
    "is-4",
    "is-flex",
    "is-justify-content-space-between"
  );
  homeTeam.textContent = team.name;
  cardContentPage.append(homeTeam);
  let homeTeamPoints = document.createElement("p");
  homeTeamPoints.classList.add(
    "title",
    "is-4",
    "is-flex",
    "is-justify-content-space-between"
  );
  homeTeamPoints.textContent = game.score[0];
  homeTeam.append(homeTeamPoints);
  let homeTeamScore = document.createElement("p");
  homeTeamScore.classList.add("title", "is-6");
  homeTeamScore.textContent = `${team.W} - ${team.L}`;
  cardContentPage.append(homeTeamScore);

  let oppTeam = document.createElement("p");
  oppTeam.classList.add(
    "title",
    "is-4",
    "is-flex",
    "is-justify-content-space-between"
  );
  oppTeam.textContent = game.opp;
  cardContentOpp.append(oppTeam);
  let oppTeamPoints = document.createElement("p");
  oppTeamPoints.classList.add(
    "title",
    "is-4",
    "is-flex",
    "is-justify-content-space-between"
  );
  oppTeamPoints.textContent = game.score[1];
  oppTeam.append(oppTeamPoints);
  let oppTeamScore = document.createElement("p");
  oppTeamScore.classList.add("title", "is-6");
  oppTeamScore.textContent = `${opp.W} - ${opp.L}`;
  cardContentOpp.append(oppTeamScore);

  let games = document.getElementById("allGames");
  games.append(card);
}
