const path = require('path')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = {
    env: {
        baseURL: 'https://valkovdev.herokuapp.com'
    }
}


module.exports = withImages()


module.exports = withPlugins([
    [optimizedImages, {
    }],
]);