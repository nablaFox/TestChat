const path = require('path')

const aliases = {
    '@': 'src',
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@layouts': 'src/router/layouts',
    '@router': 'src/router',
    '@stores': 'src/stores',
    '@design': 'src/assets/styles/index.scss',
    '@plugins': 'node_modules',
    '@composables': 'src/composables',
    '@socket': 'src/socket.js'
}

Object.keys(aliases).forEach(key => {
    aliases[key] = path.resolve(__dirname, aliases[key])
})

module.exports = aliases;