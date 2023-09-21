import express from "express";
import authenticatieToken from "../middlewares/authMiddleware.js";
import listEmissonTypes from "../api/EmissionType/listEmissonTypes.js";
import listDirectEmissonTypes from "../api/EmissionType/listDirectEmissonTypes.js";



const router = express.Router();

router.route('/list').post(listEmissonTypes)
router.route('/direct/list').post(listDirectEmissonTypes)


export default router;