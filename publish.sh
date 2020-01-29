#!/usr/bin/env bash

function readJson {  
  UNAMESTR=`uname`
  if [[ "$UNAMESTR" == 'Linux' ]]; then
    SED_EXTENDED='-r'
  elif [[ "$UNAMESTR" == 'Darwin' ]]; then
    SED_EXTENDED='-E'
  fi; 

  VALUE=`grep -m 1 "\"${2}\"" ${1} | sed ${SED_EXTENDED} 's/^ *//;s/.*: *"//;s/",?//'`

  if [ ! "$VALUE" ]; then
    echo "Error: Cannot find \"${2}\" in ${1}" >&2;
    exit 1;
  else
    echo $VALUE ;
  fi; 
}

# echo "Compiling library..."
# npm run build:gs-forms
# echo "The library was successfully compiled"

cd library/gs-forms/

VERSION=`readJson package.json version` || exit 1;

echo $NAME

# echo "Initializing repository..."
# git init && git remote add origin git@bitbucket.org:rappinc/rpp-ngforms-lib.git

# echo "Preparing the commit..."
# git add .
# git commit -m ""

# echo "Sending to Bitbucket"
# git push -f --set-upstream origin master

# echo "The library was published successfully"

sleep 10