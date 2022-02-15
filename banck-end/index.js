const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http').createServer(app);

const router = require('./router');
const error = require('./middlewares/error');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
  },
});

const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(error);

require('./sockets/plays')(io);

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`);
});

module.exports = app;
