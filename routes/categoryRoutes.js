import express from 'express'
import { categoryController, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js'

const router = express.Router();

//routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);


//getALL category
router.get('/get-category',categoryController);


//get single category
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );
  
  
export default router