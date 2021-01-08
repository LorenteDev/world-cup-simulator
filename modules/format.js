// Formato de titulo al texto
function title(text) {
    const margin = '='.repeat(5);
    console.log(`\n${margin} ${text.toUpperCase()} ${margin}`)
}

function bigTitle(text) {
    const cover = '='.repeat(50);
    const margin = '='.repeat((50 - text.length) / 2);

    console.log("\n" + cover)
    console.log(`${margin}${text.toUpperCase()}${margin}`)
    console.log(cover + "\n")
}

// Formato para el equipo campeon
function winnerFormat(name) {
    const cover = '='.repeat(50);

    console.log("\n" + cover)
    console.log(`¡${name} campeón del mundo!`)
    console.log(cover + "\n")
}

module.exports = { title, bigTitle, winnerFormat }