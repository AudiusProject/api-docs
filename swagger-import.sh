# Run ./swagger-import.sh endpoint
# For example ./swagger-import.sh http://docker.for.mac.localhost:5000/v1/swagger.json

echo "$1"

# Pull swagger
curl "$1" > swagger/swagger.json

Reformat adding custom AUDIUS_API_HOST tag
basePath=$( jq '.basePath' swagger/swagger.json )
basePath=$( echo $basePath | sed "s/\"//g" )
newBasePath="AUDIUS_API_HOST${basePath}"

cat <<< $( jq --arg bp ${newBasePath} '.basePath = $bp' swagger/swagger.json ) > swagger/swagger.json

node swagger/examples/insert.js

widdershins \
  --omitHeader \
  --summary false \
  --user_templates swagger/templates \
  -v \
  swagger/swagger.json \
  -o source/includes/_docs.md