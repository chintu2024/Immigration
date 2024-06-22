module.exports = {
  apps : [
      {
        name: "immigration",
        script: 'node_modules/.bin/next',
	args: 'start',
        port: 3001,
autorestart: true,
      watch: false,
 env: {
        NODE_ENV: 'production',
        PORT: 3001,
},
 env_production: {
        NODE_ENV: 'production'
      }
      }
  ]
}