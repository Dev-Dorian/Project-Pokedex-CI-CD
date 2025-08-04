const express = require("express");
const app = express();
const { version } = require('./package.json')
// get the port from env variable
const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send(version)
  console.log(`server started on port ${PORT}`);
})

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
