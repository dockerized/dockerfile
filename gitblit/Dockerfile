#
# gitblit Dockerfile
#

FROM tutum/tomcat

MAINTAINER jack.zhang <zhangskills@gmail.com>

RUN \
	wget http://dl.bintray.com/gitblit/releases/gitblit-1.6.0.war && \
	mv gitblit-1.6.0.war ${CATALINA_HOME}/webapps/

VOLUME [/tomcat]

EXPOSE 29418