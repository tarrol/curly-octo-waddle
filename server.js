const express = require('express');
const database = require('./connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

database.once('open', () => {
  app.listen(PORT, () => { console.log(`Server live on port ${PORT}!`); });
});
