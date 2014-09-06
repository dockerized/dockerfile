## 用于生成golang项目的依赖环境

### 生产环境：
`docker run --name golang --link mariadb:mariadb -d zhangskills/golang revel run test`

### 本地调试：
`docker run --name golang --link mariadb:mariadb -it -v /data:/gopath/src/data zhangskills/golang /bin/bash`