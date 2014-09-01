## mariadb服务：

`docker run -d --name mariadb -p 3306:3306 zhangskills/mariadb`

## 客户端：

`docker run -it --rm zhangskills/mariadb mysql` 

## link方式，客户端：

`docker run -it --rm --link mariadb:mariadb zhangskills/mariadb mysql -h mariadb`