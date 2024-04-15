"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/order:

const order = require('../controllers/order')
const { isLogin, isAdmin } = require('../middlewares/permissions');

// URL: /orders

router.route('/')
    .get(isLogin,order.list)
    .post(isLogin,order.create)

router.route('/:id')
    .get(isLogin,order.read)
    .put(isAdmin,order.update)
    .patch(isAdmin,order.update)
    .delete(isAdmin,order.delete)

/* ------------------------------------------------------- */
module.exports = router