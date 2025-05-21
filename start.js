// const { spawn } = require('child_process');
const {spawn}=require("child_process")

const child = spawn('npx', ['next', 'start', '--port', '2001'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname,
  windowsHide: true // Add this line to hide the terminal window on Windows
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});




// pm2 start ecosystem.config.js
// pm2 status
// pm2 stop nextjs-app

// npm i swiper
// npm i slick-carousel
// npm i change-case
// npm i bootstrap
// npm i react-slick
// npm i he



