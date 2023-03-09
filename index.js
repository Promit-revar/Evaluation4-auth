const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`auth app listening on port ${port}!`));