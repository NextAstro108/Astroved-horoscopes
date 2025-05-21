

module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: './start.js',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      // env: {
      //   NODE_ENV: 'production',
      //   PORT: 2001, // Ensure PM2 and Next.js run on the right port
      // },
    }
  ]
};