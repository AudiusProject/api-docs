# Run ./swagger-import.sh endpoint
# For example ./swagger-import.sh http://docker.for.mac.localhost:5000/v1/swagger.json

echo "$1"

curl "$1" > swagger/swagger.json
widdershins \
  --omitHeader \
  --summary false \
  -v \
  swagger/swagger.json \
  -o source/includes/_docs.md