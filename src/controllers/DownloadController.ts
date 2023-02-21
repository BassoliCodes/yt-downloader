import { Request, Response } from 'express';
import ytdl from 'ytdl-core';

export default class DownloadController {
  public async download(request: Request, response: Response) {
    const { url } = request.body;

    if (!url) return response.status(400).json({ error: 'URL is required' });

    const videoInfo = await ytdl.getInfo(url);

    const format = ytdl.chooseFormat(videoInfo.formats, { quality: 'highestaudio' });
    const video = ytdl(url, { format });

    response.header(
      'Content-Disposition',
      `attachment; filename="${videoInfo.videoDetails.title}.mp3"`,
    );
    response.header('Content-Type', 'audio/mpeg');

    video.pipe(response);
  }
}
