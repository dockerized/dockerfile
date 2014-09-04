#
# nodeclub Dockerfile
#

FROM dockerfile/mongodb

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN \
	curl -sL https://deb.nodesource.com/setup | sudo bash - && \
	apt-get install nodejs

# Define mountable directories.
VOLUME ["/data"]

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["node app.js"]

# Expose ports.
EXPOSE 3000