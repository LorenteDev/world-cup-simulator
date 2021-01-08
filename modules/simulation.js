const fs = require('fs');
const team = require('./team.js');
const format = require('./format.js');

// Genera la puntuacion
function getScore() {
    return Math.floor(Math.random() * 5);
}

// Juega el partido y guarda los ganadores
function playMatch(firstTeam, secondTeam, newTeamList) {
    let firstResult;
    let secondResult;
    let winnerName;

    do {
        firstResult = getScore();
        secondResult = getScore();
    } while (firstResult == secondResult);

    if (firstResult > secondResult) {
        newTeamList.push(firstTeam)
        winnerName = firstTeam.name;
    } else {
        newTeamList.push(secondTeam)
        winnerName = secondTeam.name;
    }

    console.log(`${firstTeam.name} ${firstResult} - ${secondResult} ${secondTeam.name} => ${winnerName}`)
}


// Juega todos los partidos de la jornada
function playRound(teamList, isSemifinals) {
    const newTeamList = []


    for (let i = 0; i < teamList.length; i += 2) {
        playMatch(teamList[i], teamList[i + 1], newTeamList);
    }

    if (isSemifinals) {
        let third = [];
        const semiFinalLosers = teamList.filter(team => team.name !== newTeamList[0].name && team.name !== newTeamList[1].name)

        format.title('Tercer y Cuarto puesto')
        playMatch(semiFinalLosers[0], semiFinalLosers[1], third) // Tercer y cuarto puesto
    }

    return newTeamList;
}

// Simula el torneo
function playTournament() {

    // Recoge los equipos del json al iniciar
    let teamList = JSON.parse(fs.readFileSync('./teams.json', 'utf8'));

    format.bigTitle('Comienzo del mundial')
    team.shuffle(teamList)

    format.title('Participantes')
    team.showTeams(teamList)

    format.bigTitle('Comienzo de la fase de eliminatorias')

    const titleList = ['Octavos de final', 'Cuartos de final', 'Semifinales', 'Final'];

    for (let i = 0; i < 4; i++) {
        format.title(titleList[i])

        teamList = playRound(teamList, teamList.length == 4)

    }

    format.winnerFormat(teamList[0].name)
}

module.exports = { getScore, playMatch, playRound, playTournament }