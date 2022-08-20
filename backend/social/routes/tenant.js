const express=require('express')
const router=express.Router()
const {createTenant,getsingletenant, getAlltenant, updateTenant, deleteTenant} =require('../controller/tenant')

// createTenat
router.post("/tenant",createTenant)
// getsingletenant
router.get("/tenant/:id",getsingletenant);
// getAllTenat
router.get("/tenant",getAlltenant)
// updateTenant
router.patch("/tenant/:id",updateTenant);
// deleteTenant
router.delete("/tenant/:id",deleteTenant);
module.exports=router