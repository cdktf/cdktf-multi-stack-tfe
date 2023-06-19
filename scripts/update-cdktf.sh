#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0


set -ex

PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE:-$0}")/.." && pwd)
CDKTF_VERSION=$1

if [ -z "$CDKTF_VERSION" ]; then
  echo "Usage: $0 <cdktf-version>"
  exit 1
fi
echo "asd"

echo "Updating to cdktf version $CDKTF_VERSION"
git checkout -b "cdktf-$CDKTF_VERSION"
cd $PROJECT_ROOT

yarn

sed -i "s/const cdktfVersion = \".*\";/const cdktfVersion = \">=$CDKTF_VERSION\";/" "$PROJECT_ROOT/.projenrc.ts"

npx projen

git add .
git commit -m "feat: update to cdktf $CDKTF_VERSION"
git push origin "cdktf-$CDKTF_VERSION"

BODY=$(cat <<EOF
- [ ] Update peer dependencies to cdktf $CDKTF_VERSION
EOF
)

gh pr create --fill --base main --head "cdktf-$CDKTF_VERSION" --title "feat: update to cdktf $CDKTF_VERSION" --body "$BODY" --label "cdktf-update-$CDKTF_VERSION"
