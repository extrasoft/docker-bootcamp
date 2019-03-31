## การรันบน docker
ลบ Folder node_modules ทิ้งเพราะจะไปรันบน docker แทนและถ้าตอนเราสั่ง docker build . ถ้ายังมีโฟล์เดอร์ node_modules มันจะ build นาน

## การ build images

docker build . -t <repository>:<tag>
**ตัวอย่าง**
docker build . -t myreactapp:1.0


## การรัน container
docker run -d -v /usr/app/node_modules -v <copy_path>:<working_dir_from_Dockerfile> --name <container_name> --network <network_name> -p 3000:3000 <repository>:<tag>
**ตัวอย่าง**
docker run -d --name myreactapp -v /usr/app/node_modules -v /home/thanapon/Desktop/learning/docker-bootcamp/workshop_02/application/frontend:/usr/app --network shoppers -p 3000:3000 myreactapp:1.0






## การ build images Production
docker build -f <dockerfile_production_name> . -t <repository>:<tag>
**ตัวอย่าง**
docker build -f Dockerfile.prod . -t myreactapp_prod:1.0

## การรัน container Production
docker run -d -p <source_port>:<expose_port_from_Dockerfile> --network <network_name> --name <container_name> <repository>:<tag>
**ตัวอย่าง**
docker run -d -p 3001:80 --network shoppers --name myreactapp_prod myreactapp_prod:1.0
