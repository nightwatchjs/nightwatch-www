const http = require('http');
const {spawn} = require('child_process');

const {baseUrl} = require('../../postdoc.json');

let serverProcess;

const isServerActive = () => new Promise((resolve) => {
  http
    .get(baseUrl, (res) => {
      resolve(res.statusCode === 200);
    })
    .on('error', () => {
      resolve(false);
    });
});

module.exports = {
  // Start server before running tests
  before: async function (browser, done) {
    const active = await isServerActive();

    if (!active) {
      serverProcess = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', [
        'run',
        'start'
      ]);

      serverProcess.stdout.on('data', (data) => {
        // eslint-disable-next-line no-control-regex
        const dataResult = data.toString().replace(/\u001b\[\d+m/g, '');

        if (dataResult.includes(`Local:   ${baseUrl}/`)) {
          done();
        }
      });
    } else {
      done();
    }
  },

  // Kill server after running tests
  after: function (browser, done) {
    if (serverProcess) {
      if (/^win/.test(process.platform)) {
        spawn('taskkill', ['/pid', serverProcess.pid, '/f', '/t']);
      } else {
        serverProcess.kill('SIGINT');
      }
    }

    done();
  }
};