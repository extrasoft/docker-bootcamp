// Build Dockerfile
**ต้องเข้ามาที่ path mongodb ก่อนจึงสามารถสั่ง build ได้**
    docker build . -t <repository>:<tag>

// Run Container + Initial Data
**path ของการกำหนดค่าเริ่มต้นให้ database คือ /home/thanapon/Desktop/learning/docker-bootcamp/workshop_02/application/mongodb/data/shoppers.js**
    docker run -d --name <container_name> <repository>:<tag>

// การเข้าไปตรวจสอบ container
    docker exec -it <container_name> bash
**เมื่อเข้ามาแล้วให้พิมพ์คำสั่งด้านล่าง --authenticationDatabase "admin" เพื่อบอกว่าเราจะเข้าไปในรูปแบบ admin นะ**
    mongo -u "admin" -p "1111" --authenticationDatabase "admin"
**แสดง database ที่มี**
    show databases
**เลือกใช้ database ที่มี**    
    use <database_name>
**แสดงใช้ collections ที่มี** 
    show collections
**แสดงข้อมูลใน collections**  
    db.<collection_name>.find().pretty()

// การ connect ระหว่าง node + mongodb
    docker network create shoppers
    docker network connect shoppers <mongodb_container_name>
**รัน node container จาก image ที่ได้ทำการ build ให้เชื่อมต่อกับ mongo แล้ว**
    docker run -d --name <node_container_name> -p <source_port>:<destination_port> -e DATABASE_USERNAME=<username_from_Dockerfile> -e DATABASE_PASSWORD=<password_from_Dockerfile> -e DATABASE_HOST=<host_from_mongodb_container_name> --network shoppers <repository>:<tag>
// การดูข้อมูลของ container ที่เราเขียน console.log() ไว้
    docker logs <container_namec>