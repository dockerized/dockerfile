#
# nodeclub Dockerfile
#

FROM dockerfile/mongodb

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN \
	curl -sL https://deb.nodesource.com/setup | sudo bash - && \
	apt-get install -y nodejs

# Define mountable directories.
VOLUME ["/node"]

# Define working directory.
WORKDIR /node

# Define default command.
CMD ["/bin/bash -c '`mongod >> mongod.log &` && node app.js'"]

# Expose ports.
EXPOSE 3000