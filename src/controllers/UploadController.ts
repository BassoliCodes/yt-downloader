import { Request, Response } from 'express';

export default class UploadController {
  public upload(request: Request, response: Response): Response {
    const link = `${request.protocol}://${request.get('host')}/uploads/${request.file?.filename}`;

    return response.json({
      message: 'File uploaded successfully',
      link,
    });
  }
}
