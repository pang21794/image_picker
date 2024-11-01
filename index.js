const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/bookRoutes'); // เปลี่ยนเป็น bookRoutes
const app = express();
app.use(express.json());

// ระบุตำแหน่ง url สำหรับเรียกดูรูปภาพ
app.use(express.static('public'));
app.use('/images', express.static('public/images')); // เปลี่ยนเส้นทางให้ถูกต้อง

// ระบุตำแหน่ง url สำหรับเรียกใช้งาน api
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));
