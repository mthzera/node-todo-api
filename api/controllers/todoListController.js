'use strict';

const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.list_all_task = (req, res) => {
    Task.find({}, (err, task) => {
        if(err) {
            console.log('aa');
            res.send(err);
        }
            res.json(task);
    });
};

exports.create_a_task = (req, res) => {

    const new_task = new Task(req.body);
    new_task.save((err, task) => {
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};

exports.read_a_task = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

exports.delete_a_task = (req, res) => {
    Task.remove({
        _id: req.params.taskId
    }, (err, task) => {
        if(err)
            res.send(err);
        res.json({
            message: 'Task succesfully deleted'
        });
    });
};