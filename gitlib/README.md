## 安装步骤：

1. 安装zhangskills/mariadb
2. 执行mysql
```
CREATE USER 'gitlab'@'172.17.%.%' IDENTIFIED BY '123';
CREATE DATABASE IF NOT EXISTS `gitlabhq_production` DEFAULT CHARACTER SET `utf8` COLLATE `utf8_unicode_ci`;
GRANT SELECT,LOCK TABLES,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER ON `gitlabhq_production`.* TO 'gitlab'@'172.17.%.%';
FLUSH PRIVILEGES;
```
3. 安装zhangskills/gitlib，执行
```
docker run --name=gitlab -d --link zhang_mariadb:mysql \
  -p 1080:80 \
  -e 'DB_USER=gitlab' -e 'DB_PASS=123'\
  -e 'DB_NAME=gitlabhq_production'\
  sameersbn/gitlab
```

## 其它

打开http://localhost:1080
username: root
password: 5iveL!fe

进入gitlab的ssh

```
docker run --rm -v /usr/local/bin:/target jpetazzo/nsenter
sudo docker-enter gitlab
```