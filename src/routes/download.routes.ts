import { Router } from 'express';

import DownloadController from '../controllers/DownloadController';

const downloadController = new DownloadController();

const downloadRouter = Router();

downloadRouter.post('/download', downloadController.download);

export default downloadRouter;
