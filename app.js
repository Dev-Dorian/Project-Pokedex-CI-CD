const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
const express = require("express");
const app = express();
const { version } = require('./package.json')
// get the port from env variable
const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
  res.send('ok!!')
})

app.get('/version', (req, res) => {
  res.send(version)
})

app.use(express.static("dist"));

// other app.use() options ...
app.use(expressCspHeader({
  policies: {
    'default-src': [expressCspHeader.NONE],
    'img-src': [expressCspHeader.SELF],
  }
}));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
