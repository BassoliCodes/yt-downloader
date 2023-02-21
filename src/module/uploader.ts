import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request, Response } from 'express';

const storage = multer.diskStorage({
  destination: (
    _request: Request,
    _file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void,
  ) => {
    callback(null, './uploads');
  },
  filename: (
    _request: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void,
  ) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadModule = multer({
  storage: storage,
  fileFilter: (_request: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const allowedMimes = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac'];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type.'));
    }
  },
}).single('file');

export default uploadModule;
