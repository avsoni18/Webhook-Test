const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

const {verifyuser, updatedetails} = require('./webhook');

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/verifyuser', verifyuser);
app.use('/updatedetails', updatedetails);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});


app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});