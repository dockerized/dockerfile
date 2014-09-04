#
# revel Dockerfile
#

FROM google/golang

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN go get github.com/revel/revel
RUN go get github.com/revel/cmd/revel

# Define mountable directories.
VOLUME ["/data"]

# Define working directory.
WORKDIR /data

CMD ["revel run lvxing"]