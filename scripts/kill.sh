#!/usr/bin/env sh

echo 'This script stops the docker container in which we were running our app,'
echo 'thereby shutting down our calculator application running on localhost:3000'
set -x
/usr/local/bin/docker stop $(cat ~/container_id.txt)
rm ~/container_id.txt