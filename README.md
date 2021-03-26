# GitHub action - FTP deployer

Fast nodejs ftp deployment with github actions.

## Example

``` yml
- name: FTP Deployer
  uses: sand4rt/ftp-deployer@v1.2
  with:
    sftp: false
    # FTP host URL like: ftp.host.com or sftp.host.com
    host: ${{ secrets.FTP_HOST }}
    # FTP port default is: 21
    port: 21 # optional
    # Ftp username
    username: ${{ secrets.FTP_USERNAME }}
    # Ftp password
    password: ${{ secrets.FTP_PASSWORD }}
    # The remote folder location of your FTP server
    remote_folder: ${{ secrets.FTP_REMOTE_FOLDER }} # optional
    # The local folder location
    local_folder: dist # optional, default is dist
    # Remove existing files inside FTP remote folder
    cleanup: false # optional
    include: '' # optional
    exclude: # optional
      - node_modules/**
      - node_modules/**/.*
      - .git/**
      - *.env
    pasive: true # optional
```
