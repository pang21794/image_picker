const Book = require('../models/book'); // เปลี่ยนไปใช้โมเดล Book

// ฟังก์ชันสำหรับเพิ่มข้อมูลหนังสือใหม่
exports.createBook = async (req, res) => {
  try {
    // รับข้อมูล title, type และ image
    const { title, type } = req.body;
    const image_file_name = req.file ? req.file.filename : null;

    const book = await Book.create({
      title: title,
      type: type,
      image: image_file_name,
    });
    res.status(200).json({ message: 'Add new book successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add new book', error });
  }
};

// แสดงข้อมูลหนังสือทั้งหมด
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ลบข้อมูลหนังสือ
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    await book.destroy();
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// แก้ไขข้อมูลหนังสือ
exports.updateBook = async (req, res) => {
  try {
    // รับข้อมูล title, type และ image
    const { title, type } = req.body;
    const image_file_name = req.file ? req.file.filename : null;

    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    await book.update({
      title: title,
      type: type,
      image: image_file_name,
    });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
