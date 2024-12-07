import express from 'express';

const router = express.Router();
import * as userController from '../controllers/user-controller.js';
import * as blogController from '../controllers/blog-controller.js';
import * as contactController from '../controllers/contact-controller.js';
import * as serviceController from '../controllers/service-controller.js';
import * as teamController from '../controllers/team-controller.js';
import {authMiddleware, isAdmin} from "../middleware/authMiddleware.js";
import {uploadFile} from "../middleware/upload-image.js";


// user api
router.post("/register", userController.userRegister);
router.post("/login", userController.userLogin);
router.get("/users", authMiddleware,isAdmin, userController.getAllUsers);



// common api
router.get("/common-blog", blogController.commonBlog);
router.get("/common-service", serviceController.commonService);
router.get("/common-team", teamController.commonTeam);


// blog api
router.post("/create-blog", authMiddleware,uploadFile, blogController.createBlog);
router.get("/blogs", authMiddleware, isAdmin, blogController.getBlogs);
router.get("/blog/:id", authMiddleware, blogController.getBlog);
router.post("/delete-blog/:id", authMiddleware, isAdmin, blogController.deleteBlog);
router.post("/update-blog", authMiddleware,uploadFile, isAdmin, blogController.updateBlog);


// contact api

router.post("/create-contact",  contactController.createContact);
router.get("/contacts", authMiddleware,isAdmin, contactController.getContacts);
router.post("/delete-contact/:id",authMiddleware ,isAdmin,  contactController.deleteContact);


//service api
router.post("/create-service", authMiddleware, isAdmin, serviceController.createService);
router.get("/services", authMiddleware,isAdmin, serviceController.getService);
router.get("/service/:id", authMiddleware,isAdmin, serviceController.getOneService);
router.post("/delete-service/:id", authMiddleware,isAdmin, serviceController.deleteService);
router.post("/update-service", authMiddleware, isAdmin, serviceController.updateService);


//Team api
router.post("/create-team", authMiddleware, uploadFile,isAdmin, teamController.createTeam);
router.get("/teams", authMiddleware,isAdmin, teamController.getTeams);
router.get("/team/:id", authMiddleware,isAdmin, teamController.getTeam);
router.post("/delete-team/:id", authMiddleware,isAdmin, teamController.deleteTeam);
router.post("/update-team", authMiddleware, uploadFile,isAdmin, teamController.updateTeam);


export default router;