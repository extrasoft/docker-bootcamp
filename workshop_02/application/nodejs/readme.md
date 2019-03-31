// Build Dockerfile
**ต้องเข้ามาที่ path nodejs ก่อนจึงสามารถสั่ง build ได้**
    docker build . -t <repository>:<tag>

// Run Container + Bookmark volumes + Bind Mount
**-v /usr/app/node_modules คือการ Bookmark volumes เพื่อจะทำให้ เราใช้โฟลเดอร์ node_modules ของ container แทน(เครื่อง local เราไม่ได้ลง nodemon ไว้)**
**-v ตัวที่สองคือการ Bind Mount ทำให้เราสามารถแก้ไขโค้ดแบบ realtime ไม่ต้องนั่ง build ใหม่มันจะส่งผลไปยังข้างใน container ด้วย**
    docker run -d -p <source_port>:<destination_port> -v /usr/app/node_modules -v /home/thanapon/Desktop/learning/docker-bootcamp/workshop_02/application/nodejs:/usr/app  <repository>:<tag>
