#!/bin/bash

set -ex

PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE:-$0}")/.." && pwd)
CDKTF_VERSION=$1

if [ -z "$CDKTF_VERSION" ]; then
  echo "Usage: $0 <cdktf-version>"
  exit 1
fi
echo "asd"

echo "Updating to cdktf version $CDKTF_VERSION"
cd $PROJECT_ROOT

yarn

sed -i "s/const cdktfVersion = \".*\";/const cdktfVersion = \">=$CDKTF_VERSION\";/" "$PROJECT_ROOT/.projenrc.ts"

npx projen
echo "Please update the peer dependencies in the .projenrc.ts file to match the new version of cdktf."
