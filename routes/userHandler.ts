import router from 'express';
import userController from "../controllers/userController";

let res: Response;
let req: Request;

router.get('/profile/id/:user_id', (req, res) => userController.get_user_profile_by_id(req, res));
router.put('/profile/id/:user_id', (req, res) => userController.update_user_profile_by_id(req, res));
router.get('/test', (req, res) => userController.test(req, res));

export default router;

