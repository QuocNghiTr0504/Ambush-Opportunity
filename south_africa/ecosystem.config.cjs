const path = require('path')

const nextEXE = path.normalize('node_modules/next/dist/bin/next')
// pm2 start ecosystem.config.cjs --env production --attach

module.exports = {
  apps: [
    {
      name: 'ambushopportunity.S',
      script: nextEXE,
      env_development: {
        NODE_ENV: 'development',
        args: 'dev',
        PORT: 3081,
      },
      env: {
        NODE_ENV: 'production',
        args: 'start',
        PORT: 3083,
      },
    },

  ],

};
