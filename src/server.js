const express = require('express');
const cors = require('cors');
const override = require('method-override');
const Http = require('http');
const router = require('./router');

const port = process.env.PORT || 8000

const app = express();
const server = Http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(override());

app.use('/', router);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
