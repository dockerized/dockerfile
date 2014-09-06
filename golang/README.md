## 用于生成golang项目的依赖环境

针对国内golang被墙，可以采用这种方式把需要的环境提交到远程服务器上，然后直接运行镜像。

### 生产环境：
`docker run --name golang --link mariadb:mariadb -d zhangskills/golang revel run test`

### 本地调试：
`docker run --name golang --link mariadb:mariadb -it -v /data:/gopath/src/data zhangskills/golang /bin/bash`