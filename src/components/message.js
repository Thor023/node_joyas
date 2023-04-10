require('colors')

const message = (port) => {
    console.clear()
    console.log('============================'.yellow)
    console.log(`    Servidor en PUERTO ${port}     `.bgRed.black)
    console.log('============================'.yellow)
    console.log(`Bienvenido al desafio`.blue)
}

module.exports = message