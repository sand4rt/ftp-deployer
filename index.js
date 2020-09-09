const core = require('@actions/core');
const FtpDeploy = require('ftp-deploy');

core.info('Deploying...');

new FtpDeploy()
    .deploy({
        host: core.getInput('host', { required: true }),
        port: JSON.parse(core.getInput('port')) || 21,
        user: core.getInput('username', { required: true }),
        password: core.getInput('password', { required: true }),
        remoteRoot: core.getInput('remote_folder') || '',
        localRoot: core.getInput('local_folder') || 'dist', // __dirname + '/local-folder',
        deleteRemote: JSON.parse(core.getInput('cleanup')) || false, // If true, delete ALL existing files at destination before uploading
        include: JSON.parse(core.getInput('include')) || [], // this would upload everything except dot files
        exclude: JSON.parse(core.getInput('exclude')) || ['node_modules/**', 'node_modules/**/.*', '.git/**'], // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
        forcePasv: JSON.parse(core.getInput('pasive')) || true // Passive mode is forced (EPSV command is not sent)
    }) 
    .then(response => core.log('Deploy finished:', response))
    .catch(error => core.error(error));