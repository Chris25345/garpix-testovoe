const express = require('express');
const cors = require('cors');
const xssClean = require('xss-clean');

const app = express();
const PORT = process.env.PORT ?? 5000;

const indexRouter = require('./routes/index.router')

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(xssClean());
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
