"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const user = require('../controllers/user')
const perms = require('../middlewares/permissions');
// URL: /users

router.route('/')
    .get(perms.isAdmin,user.list)
    .post(user.create)

router.route('/:id')
    .get(perms.isLogin,user.read)
    .put(perms.isLogin,user.update)
    .patch(perms.isLogin,user.update)
    .delete(perms.isAdmin,user.delete)

/* ------------------------------------------------------- */
module.exports = router