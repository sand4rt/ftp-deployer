# GitHub action - FTP deployer

Fast nodejs ftp deployment with github actions.

## Example

``` yml
- name: FTP Deployer
  uses: sand4rt/ftp-deployer@v0.1
  with:
    # FTP host URL like: ftp.host.com
    host: ${{ secrets.FTP_HOST }}
    # FTP port
    port: # optional, default is 21
    # Ftp username
    username: ${{ secrets.FTP_USERNAME }}
    # Ftp password
    password: ${{ secrets.FTP_PASSWORD }}
    # The remote folder location of your FTP server
    remote_folder: ${{ secrets.FTP_REMOTE_FOLDER }}
    # The local folder location
    local_folder: # optional, default is dist
    # Remove existing files inside FTP remote folder
    cleanup: # optional
    # includes
    include: # optional
    # exclude
    exclude: # optional
    # passive
    pasive: # optional
```
