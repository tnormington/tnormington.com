const { spawn } = require('child_process');
const path = require('path');

const child = spawn('node', [path.join(__dirname, 'node_modules', 'gatsby-cli', 'cli.js'), 'develop'], {
  cwd: __dirname,
  stdio: 'inherit',
  env: { ...process.env }
});

child.on('exit', (code) => process.exit(code));
