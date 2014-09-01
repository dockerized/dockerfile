#
# MariaDB Dockerfile
#

# Pull base image.
FROM dockerfile/ubuntu

# Install MariaDB.
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0xcbcb082a1bb943db && \
  echo "deb http://mirrors.neusoft.edu.cn/mariadb/repo/10.0/ubuntu trusty main" > /etc/apt/sources.list.d/mariadb.list && \
  # ln -fs /bin/true /usr/bin/chfn && \
  apt-get update && \
  DEBIAN_FRONTEND=noninteractive apt-get install -y mariadb-server && \
  rm -rf /var/lib/apt/lists/* && \
  sed -i 's/^\(bind-address\s.*\)/# \1/' /etc/mysql/my.cnf && \
  echo "mysqld_safe &" > /tmp/config && \
  echo "mysqladmin --silent --wait=30 ping || exit 1" >> /tmp/config && \
  echo "mysql -e 'use mysql;update user set host=\'%\',password=password(\'jack1233\') where user=\'root\' and host=\'localhost\';delete from user where host!=\'%\';'" >> /tmp/config && \
  bash /tmp/config && \
  rm -f /tmp/config

# Define mountable directories.
VOLUME ["/etc/mysql", "/var/lib/mysql"]

# Define default command.
CMD ["mysqld_safe"]

# Expose ports.
EXPOSE 3306