#
# nodeclub Dockerfile
#

FROM dockerfile/nodejs

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN \
  git clone https://github.com/cnodejs/nodeclub.git && \
  cd nodeclub/ && npm install

ADD config.js /data/nodeclub

# Define working directory.
WORKDIR /data/nodeclub

# Define default command.
CMD ["/usr/local/bin/node app.js"]

# Expose ports.
EXPOSE 3000