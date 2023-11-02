#!/usr/bin/env sh

#Create temporary file with new line in place
cat ~/.docker/config.json | sed -e 's/"credsStore": "desktop",/"credStore": "desktop",/' > ./temp_file
#Copy the new file over the original file
mv ./temp_file ~/.docker/config.json