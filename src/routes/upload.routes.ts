import { Router } from 'express';

import uploadModule from '../module/uploader';

import UploadController from '../controllers/UploadController';

const uploadController = new UploadController();

const uploadRouter = Router();

uploadRouter.post('/upload', uploadModule, uploadController.upload);

export default uploadRouter;
