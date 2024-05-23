const Task = require('../models/taskModel');

exports.createTask = (req, res) => {
  const { title, description, status } = req.body;
  if (!title || !status) {
    return res.status(400).json({ error: 'Title and status are required' });
  }
  Task.create({ title, description, status }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, title, description, status });
  });
};

exports.getTasks = (req, res) => {
  Task.getAll((err, tasks) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(tasks);
  });
};

exports.getTaskById = (req, res) => {
  const id = req.params.id;
  Task.getById(id, (err, task) => {
    if (err) return res.status(500).json({ error: err.message });
    if (task.length === 0) return res.status(404).json({ error: 'Task not found' });
    res.json(task[0]);
  });
};

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description, status } = req.body;
  if (!title || !status) {
    return res.status(400).json({ error: 'Title and status are required' });
  }
  Task.update(id, { title, description, status }, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, title, description, status });
  });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
};
