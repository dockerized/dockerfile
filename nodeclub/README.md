
只是一个mongodb+nodejs的镜像

### 使用：

提前把nodeclub代码下载好，放到本地目录下，执行：

`docker run -d --name nodeclub -v 本地目录:/data -p 3000:3000 zhangskills/nodeclub`

或

`docker run -d --name nodeclub -v 本地目录:/data -p 3000:3000 zhangskills/nodeclub /bin/bash -c 'node app.js'`