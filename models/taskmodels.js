const db = require('../config/database');

const Task = {
  create: (task, callback) => {
    const sql = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
    db.query(sql, [task.title, task.description, task.status], callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  },

  update: (id, task, callback) => {
    const sql = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
    db.query(sql, [task.title, task.description, task.status, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Task;
