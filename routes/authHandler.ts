import router, { response } from "express";
import { authController } from "../controllers/authController";

//Type Adjustment to minimize Typing 
let res: Response;
let req: Request;

router.post('/register', (req, res) => authController.register_user(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.post('/test', (req, res) => authController.test(req, res));

export default router; 
