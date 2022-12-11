# GitHub action - SFTP / FTP deployer

Simple SFTP / FTP deployment with NodeJS.

## Example

``` yml
- name: FTP Deployer
  uses: sand4rt/ftp-deployer@v1.7
  with:
    sftp: false # optional
    host: ${{ secrets.FTP_HOST }} # e.g. ftp.host.com or sftp.host.com (without ftp:// or ftps://)
    port: 21 # optional, default is: 21
    username: ${{ secrets.FTP_USERNAME }} # FTP username
    password: ${{ secrets.FTP_PASSWORD }} # FTP password
    remote_folder: ${{ secrets.FTP_REMOTE_FOLDER }} # optional, remote path of your FTP server
    local_folder: dist # optional, local path, default is: dist
    cleanup: false # optional, remove existing files inside FTP remote folder
    include: '[]' # optional, e.g. '['dist']'
    exclude: '[]' # optional, e.g. '['node_modules/**', '.git/**', '*.env']'
    passive: true # optional
```
