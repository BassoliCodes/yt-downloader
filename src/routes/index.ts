import { Router } from 'express';

import downloadRouter from './download.routes';
import uploadRouter from './upload.routes';

const router = Router();

router.use(downloadRouter);
router.use(uploadRouter);

export default router;
