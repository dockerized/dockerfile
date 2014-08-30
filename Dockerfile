FROM google/golang

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN \
  echo "go get github.com/revel/cmd/revel" > /tmp/config && \
  echo "go get github.com/revel/cmd/revel" >> /tmp/config && \
  bash /tmp/config && \
  rm -f /tmp/config