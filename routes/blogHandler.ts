import router from "./authHandler";
import blogController from "../controllers/blogController";

let res: Response;
let req: Request;

router.post('/', (req, res) => blogController.create_new_blog(req, res));
router.put('/id/:blog_id', (req, res) => blogController.update_blog_by_id(req, res));
router.delete('/id/:blog_id', (req, res) => blogController.delete_blog_by_id(req, res));
router.get('/id/:blog_id', (req, res) => blogController.get_blog_by_id(req, res));
router.get('/', (req, res) => blogController.get_all_blogs(req, res));
router.get('/test', (req, res) => blogController.test(req, res));

export default router;


