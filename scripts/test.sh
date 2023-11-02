#!/usr/bin/env sh

echo 'The following "npm" command (if executed) installs the "cross-env"'
echo 'dependency into the local "node_modules" directory, which will ultimately'
echo 'be stored in the Jenkins home directory. As described in'
echo 'https://docs.npmjs.com/cli/install, the "--save-dev" flag causes the'
echo '"cross-env" dependency to be installed as "devDependencies".'
echo 'For a comprehensive explanation about "devDependencies", see'
echo 'https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies.'
set -x
# npm install --save-dev cross-env
set +x

echo 'The following "npm" command tests whether our calculator application'
echo 'renders satisfactorily or not. This command actually invokes the test'
echo 'runner Jest (https://facebook.github.io/jest/).'
set -x
npm test