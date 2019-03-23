V01: การรัน WORDPRESS + MYSQL:5.7 + PHPMYADMIN แบบใช้ volume ที่สร้างขึ้นเอง

// PULL WORDPRESS + MYSQL:5.7 + PHPMYADMIN
    docker pull wordpress
    docker pull mysql:5.7
    docker pull phpmyadmin/phpmyadmin

// CREATE NETWORK WORDPRESS_V2
    docker network create wordpress_v2

// CREATE VOLUMES
    docker volume create mysql_v2
    docker volume create wordpress_v2

// RUN MYSQL:5.7 + CUSTOM VOLUME + CONNECT NETWORK 
    **volume path = /var/lib/mysql**
    docker run --name mysql_v2 -v wordpress_v2:/var/lib/mysql -p 3334:3306 --network=wordpress_v2 -e MYSQL_ROOT_PASSWORD=1111 -d mysql:5.7

// RUN PHPMYADMIN + CONNECT NETWORK 
    docker run --name pma_v2 -d --network=wordpress_v2 -e PMA_ARBITRARY=1 -p 8889:80 phpmyadmin/phpmyadmin

// RUN WORDPRESS  + CUSTOM VOLUME  + CONNECT NETWORK
    **volume path = /var/www/html**
    docker run --name wordpress_v2 -v wordpress_v2:/var/www/html -p 889:80 --network=wordpress_v2 -e WORDPRESS_DB_HOST=mysql_v2 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=1111 -d wordpress
