// Muestra a los equipos
function showTeams(teamList) {
    teamList.forEach(team => {
        console.log(team.name)
    });
}

// Aleatoriza el orden de los equipos
function shuffle(teamList) {
    teamList.sort(() => 0.5 - Math.random());
}

module.exports = {showTeams, shuffle}