const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT ?? 5000;

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
