## 安装步骤：

1. 安装zhangskills/mariadb
2. 安装zhangskills/gitlib
3. 执行mysql

```
CREATE USER 'gitlab'@'172.17.%.%' IDENTIFIED BY '123';
CREATE DATABASE IF NOT EXISTS `gitlabhq_production` DEFAULT CHARACTER SET `utf8` COLLATE `utf8_unicode_ci`;
GRANT SELECT,LOCK TABLES,INSERT,UPDATE,DELETE,CREATE,DROP,INDEX,ALTER ON `gitlabhq_production`.* TO 'gitlab'@'172.17.%.%';
FLUSH PRIVILEGES;
```