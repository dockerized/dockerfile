dockerfile
==========

用来构建一些常用dockerfile

```
//工具库
docker run --rm -v /usr/local/bin:/target jpetazzo/nsenter

//基础库
docker run --name docker-dnscrypt -d -p 53:53 -p 53:53/udp mengbo/docker-dnscrypt

docker run --name mariadb -d -v /data:/data dockerfile/mariadb

docker run --name mongodb -d dockerfile/mongodb
docker run -it --rm --link mongodb:mongodb dockerfile/mongodb bash -c 'mongo --host mongodb'

docker run --name nginx -d -p 10080:80 -v /data/nginx.conf:/etc/nginx.conf nginx

//自定义：
docker run --name golang --link mariadb:mariadb -d zhangskills/golang revel run test
docker run --name golang --link mariadb:mariadb -it -v /data:/gopath/src/data zhangskills/golang /bin/bash
```