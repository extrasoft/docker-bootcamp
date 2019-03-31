# BASE IMAGE (fix version)
FROM mongo:3.4.7

################ Initial Environment Variables ##############
# https://hub.docker.com/_/mongo
# จะเหมือนกับ docker run -e=.....

# Root Username
ENV MONGO_INITDB_ROOT_USERNAME admin

# Root Password
ENV MONGO_INITDB_ROOT_PASSWORD 1111

# DATABASE เริ่มต้น
ENV MONGO_INITDB_DATABASE shoppers



################ Initial Data ##############
# ADD source destination

ADD ./data/shoppers.js /docker-entrypoint-initdb.d
