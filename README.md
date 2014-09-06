dockerfile
==========

用来构建一些常用dockerfile

### nsenter：

运行：`docker run --rm -v /usr/local/bin:/target jpetazzo/nsenter`

使用：`docker-enter CONTAINER [COMMAND [ARG]...]`

### dnscrypt

运行：`docker run --name docker-dnscrypt -d -p 53:53 -p 53:53/udp mengbo/docker-dnscrypt`
使用：将本地dns服务器改为：127.0.0.1或docker-dnscrypt容器的ip

### mariadb

服务：`docker run --name mariadb -d -v /data:/data dockerfile/mariadb`
客户端：`docker run -it --rm --link mariadb:mariadb dockerfile/mariadb bash -c 'mysql -h mariadb'`

### mongodb

服务：`docker run --name mongodb -d dockerfile/mongodb`
客户端：`docker run -it --rm --link mongodb:mongodb dockerfile/mongodb bash -c 'mongo --host mongodb'`

### nginx

使用：`docker run --name nginx -d -p 10080:80 -v /data/nginx.conf:/etc/nginx.conf nginx`

### golang环境

正式环境：`docker run --name golang --link mariadb:mariadb -d zhangskills/golang revel run test`
调试环境：`docker run --name golang --link mariadb:mariadb -it -v /data:/gopath/src/data zhangskills/golang /bin/bash`