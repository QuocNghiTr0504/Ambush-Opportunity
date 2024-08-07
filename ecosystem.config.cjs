const path = require('path')

const nextEXE = path.normalize('node_modules/next/dist/bin/next')
// pm2 start ecosystem.config.cjs --env development --attach
// pm2 start ecosystem.config.cjs --env production --attach

module.exports = {
  apps: [
    {
      name: 'sFinance',
      script: nextEXE,
      env_development: {
        NODE_ENV: 'development',
        args: 'dev',
        PORT: 3083,
      },
      env: {
        NODE_ENV: 'production',
        args: 'start',
        PORT: 3084,
      },
    },

  ],

  deploy: {
    production: {
      user: 'dls',
      host: '192.168.10.124',
      ref: 'origin/sFinance',
      repo: 'http://220.135.67.240:8880/ben_peng/cutyuanprofit.git',
      path: '/var/www/bee/sFinance/',
      'pre-setup': 'yarn && yarn build && pm2 reload ecosystem.config.cjs --env production',
      'post-deploy': 'sudo nginx -s reload',
    },
  },
};
