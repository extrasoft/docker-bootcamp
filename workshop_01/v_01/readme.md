V01: การรัน WORDPRESS + MYSQL:5.7 + PHPMYADMIN แบบปกติ ใช้ volume ที่ docker สร้างให้เฉพาะ

// PULL WORDPRESS + MYSQL:5.7 + PHPMYADMIN
    docker pull wordpress
    docker pull mysql:5.7
    docker pull phpmyadmin/phpmyadmin

// CREATE NETWORK WORDPRESS_V1
    docker network create wordpress_v1

// RUN MYSQL:5.7
    docker run --name mysql_v1 -e MYSQL_ROOT_PASSWORD=1111 -d mysql:5.7

// CONNECT MYSQL TO NETWORK
    docker network connect wordpress_v1 mysql_v1


// RUN PHPMYADMIN + CONNECT NETWORK 
    docker run --name pma_v1 -d --network=wordpress_v1 -e PMA_ARBITRARY=1 -p 8080:80 phpmyadmin/phpmyadmin

// RUN WORDPRESS + CONNECT NETWORK
    docker run --name wordpress_v1 -p 888:80 --network=wordpress_v1 -e WORDPRESS_DB_HOST=mysql_v1 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=1111 -d wordpress
