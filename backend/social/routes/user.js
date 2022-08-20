const express=require('express')
const router=express.Router()

const {createUser,getSingleuser,getAlluser,updateUser,deleteUser}=require('../controller/user')
router.post('/users',createUser)
router.get('/users/:id',getSingleuser)
router.get('/users',getAlluser)
router.patch('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)

module.exports=router;