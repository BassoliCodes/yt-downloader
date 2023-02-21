import { Router } from "express";
import downloadRouter from "./download.routes";

const router = Router();

router.use(downloadRouter)

export default router;