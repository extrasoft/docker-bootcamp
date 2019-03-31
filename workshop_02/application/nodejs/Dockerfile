# BASE IMAGE
FROM node:alpine

# WORKING DIRECTORY
WORKDIR /usr/app
# ADD ENTRYPOINT

# COPY source(local) destination(container)
COPY ./package.json ./

# INSTALL PACKAGE
RUN npm install


COPY ./ ./



# Start up command ของ image
# คำสั่ง CMD มีได้แค่ 1 อัน ถ้ามีหลายอันมันจะรันอันล่างสุด
CMD [ "npm", "start" ]