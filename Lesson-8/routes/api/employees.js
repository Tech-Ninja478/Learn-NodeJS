const express = require('express');
const router = express.Router();
const path = require('path');

const data = {};
data.employees = require('../../data/employees.json');

router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })
    .put((req, res) => {
    const employee = data.employees.find(
        emp => emp.id == req.body.id
    );

    employee.firstname = req.body.firstname;
    employee.lastname = req.body.lastname;

    res.json(employee);
    })
    .delete((req, res) => {
        res.json({
            "id": req.body.id
        })
    })

router.route('/:id')
    .get((req, res) => {
        res.json({
            "id": req.params.id
        })
    })

module.exports = router;