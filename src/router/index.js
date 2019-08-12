const router = require('express').Router();
const { version } = require('../version');

router.get('/', (req, res) => {
  res.status(200).set('content-type', 'text/plain').send('서버 정상작동 중');
});

router.get('/version', (req, res) => {
  res.status(200).set('content-type', 'text/plain').send(`서버 버전 ${version}`);
});

module.exports = router;
