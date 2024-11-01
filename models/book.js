const { Sequelize, DataTypes } = require('sequelize');
// เชื่อมต่อกับฐานข้อมูล
const sequelize = require('../config/db');

// สร้าง Model สำหรับ Book
const Book = sequelize.define('Book', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING, // ปรับให้เป็น STRING ถ้าประเภทไม่ใช่ตัวเลข
    allowNull: false,
  },
  image: {  // ฟิลด์สำหรับเก็บ URL ของภาพ
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Book;
