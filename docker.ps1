docker build -t jekyll-blog . && \
docker run --rm --volume="$PWD/host:/srv/jekyll:Z" --publish 127.0.0.1:4000:4000 jekyll-blog
