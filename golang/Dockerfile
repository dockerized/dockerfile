#
# revel Dockerfile
#

FROM google/golang

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN go get github.com/revel/revel
RUN go get github.com/revel/cmd/revel
RUN go get github.com/revel/revel/cache
RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/coopernurse/gorp
RUN go get github.com/bradfitz/gomemcache/memcache
RUN go get github.com/xiocode/glog
RUN go get github.com/dchest/captcha
RUN go get github.com/tools/godep
RUN go get github.com/gosexy/to
RUN go get github.com/sergi/go-diff/diffmatchpatch

# Define mountable directories.
VOLUME ["/data"]

# Define working directory.
WORKDIR /gopath/src