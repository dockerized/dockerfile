#
# MariaDB Dockerfile
#

# Pull base image.
FROM dockerfile/ubuntu

# Install MariaDB.
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0xcbcb082a1bb943db
RUN echo "deb http://mirrors.neusoft.edu.cn/mariadb/repo/10.0/ubuntu trusty main" > /etc/apt/sources.list.d/mariadb.list
  # ln -fs /bin/true /usr/bin/chfn && \
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y mariadb-server
RUN rm -rf /var/lib/apt/lists/*

RUN sed -i 's/^\(bind-address\s.*\)/# \1/' /etc/mysql/my.cnf
RUN mysqld_safe &
RUN mysqladmin --silent --wait=30 ping || exit 1
RUN mysql -e "use mysql;update user set host='%',password=password('jack1233') where user='root' and host='localhost';delete from user where host!='%';"

# Define mountable directories.
VOLUME ["/etc/mysql", "/var/lib/mysql"]

# Define default command.
CMD ["mysqld_safe"]

# Expose ports.
EXPOSE 3306