#
# MariaDB Dockerfile
#

# Pull base image.
FROM dockerfile/ubuntu

# Install MariaDB.

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0xcbcb082a1bb943db
RUN echo "deb http://mirrors.neusoft.edu.cn/mariadb/repo/10.0/ubuntu trusty main" > /etc/apt/sources.list.d/mariadb.list

RUN apt-get update
RUN apt-get install -y -q mariadb-server

RUN sed -i 's/^\(bind-address\s.*\)/# \1/' /etc/mysql/my.cnf
RUN mysqld_safe &
RUN sleep 5
run mysql -e 'GRANT ALL PRIVILEGES ON *.* TO \"root\"@\"%\";'

# Define mountable directories.
VOLUME ["/var/lib/mysql"]

# Define default command.
CMD ["mysqld_safe"]

# Expose ports.
EXPOSE 3306
