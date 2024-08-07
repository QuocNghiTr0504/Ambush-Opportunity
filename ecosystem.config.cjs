const path = require('path')

const nextEXE = path.normalize('node_modules/next/dist/bin/next')
// pm2 start ecosystem.config.cjs --env production --attach
// pm2 deploy production setup

module.exports = {
  apps: [
    {
      name: 'ambushopportunity.uk',
      script: nextEXE,
      env_development: {
        NODE_ENV: 'development',
        args: 'dev',
        PORT: 3081,
      },
      env: {
        NODE_ENV: 'production',
        args: 'start',
        PORT: 3082,
      },
    },

  ],

  deploy: {
    production: {
      user: 'user',
      host: '192.168.10.124',
      ref: 'origin/main',
      repo: 'http://220.135.67.240:8880/ben_peng/landingpage_seo/-/tree/main.git',
      path: '/var/www/bee/rush_profit/',
      'pre-setup': 'yarn && yarn build && pm2 reload ecosystem.config.cjs --env production',
      'post-deploy': 'sudo nginx -s reload',
    },
  },
};
