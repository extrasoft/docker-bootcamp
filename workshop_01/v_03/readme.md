V03: การรัน WORDPRESS + MYSQL:5.7 + PHPMYADMIN แบบใช้ Bind Mount

// PULL WORDPRESS + MYSQL:5.7 + PHPMYADMIN
    docker pull wordpress
    docker pull mysql:5.7
    docker pull phpmyadmin/phpmyadmin

// CREATE NETWORK WORDPRESS_V3
    docker network create wordpress_V3

// RUN MYSQL:5.7 + CUSTOM VOLUME + CONNECT NETWORK 
    **volume path = /var/lib/mysql**
    docker run --name mysql_V3 -v /home/thanapon/Desktop/learning/docker-bootcamp/workshop_01/v_03/mysql:/var/lib/mysql -p 3335:3306 --network=wordpress_V3 -e MYSQL_ROOT_PASSWORD=1111 -d mysql:5.7

// RUN PHPMYADMIN + CONNECT NETWORK 
    docker run --name pma_V3 -d --network=wordpress_V3 -e PMA_ARBITRARY=1 -p 8890:80 phpmyadmin/phpmyadmin

// RUN WORDPRESS  + CUSTOM VOLUME  + CONNECT NETWORK
    **volume path = /var/www/html**
    docker run --name wordpress_V3 -v /home/thanapon/Desktop/learning/docker-bootcamp/workshop_01/v_03/wordpress:/var/www/html -p 890:80 --network=wordpress_V3 -e WORDPRESS_DB_HOST=mysql_V3 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=1111 -d wordpress
