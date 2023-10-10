#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi
add-apt-repository ppa:ondrej/php
apt-get update
apt-get install python-software-properties
apt-get update
apt-get install php

#sudo apt-get update
#sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
#sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'
#sudo apt-get install -y vim curl python-software-properties
#sudo apt-get update
#sudo apt-get -y install mysql-server
#sed -i "s/^bind-address/#bind-address/" /etc/mysql/my.cnf
#mysql -u root -proot -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION; FLUSH PRIVILEGES;"
# sudo /etc/init.d/mysql restart

# Install PhpMyAdmin
#echo 'phpmyadmin phpmyadmin/dbconfig-install boolean true' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/app-password-confirm password root' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/mysql/admin-pass password root' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/mysql/app-pass password root' | debconf-set-selections
#echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections
#apt-get install phpmyadmin -y
## Install Composer
#curl -sS https://getcomposer.org/installer | php
#mv composer.phar /usr/local/bin/composer
# Restart Apache service
service apache2 restart