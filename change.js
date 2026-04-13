import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/products.json', async (req, res) => {
  // 这里替换成你的飞书表格分享链接
  const url = 'https://wcng10x1dv83.feishu.cn/wiki/HbvFwM1bUicUYYksYipcqkYcnCh?from=from_copylink';

  // 抓取飞书表格页面内容
  const response = await fetch(url);
  const html = await response.text();
  
app.listen(3000, () => console.log('Server running on port 3000'));
