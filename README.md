# Audius API Documentation

[https://audiusproject.github.io/api-docs](https://audiusproject.github.io/api-docs)


Getting started:

```bash
> gem install bundler
> bundle install
> bundle exec middleman server

# generate swagger docs
> npm install -g widdershins
> brew install jq
> ./swagger-import.sh http://docker.for.mac.localhost:5000/v1/swagger.json # or whatever swagger
```

Up & running @ localhost:4567

Deploy (github pages):

```bash
> ./deploy.sh
```
