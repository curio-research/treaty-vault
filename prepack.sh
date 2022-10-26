cat package.json > package.temp.json # copy file

jq '.main = "dist/index.js" | .types = "dist/index.d.ts"' package.temp.json > package.json

# cat package.json.temp > package.json # copy original package.json back