FROM jekyll/jekyll

WORKDIR /srv/jekyll

RUN gem install webrick

COPY . .

CMD ["jekyll", "serve", "--host", "0.0.0.0"]
