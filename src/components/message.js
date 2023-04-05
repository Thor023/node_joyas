require('colors')

const message = (port) => {
    console.clear()
    console.log('============================'.yellow)
    console.log(`    SERVER ON PORT ${port}     `.bgRed.black)
    console.log('============================'.yellow)
    console.log(`Bienvenido al desafio`.blue)
}

module.exports = message