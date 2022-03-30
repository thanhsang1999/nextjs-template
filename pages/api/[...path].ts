import Cookies from 'cookies';
import { createProxyServer } from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyServer();
export default function ApiPath(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    const cookie = new Cookies(req, res);
    const accessToken = cookie.get('access_token');
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.URL_API,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}
