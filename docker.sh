#!/usr/bin/bash
docker build -t jekyll-blog . && \
docker run --rm -e JEKYLL_ROOTLESS=1 --volume="$(pwd)/host:/srv/jekyll:Z" --publish 127.0.0.1:4000:4000 jekyll-blog
