const express = require('express'),
  serveStatic = require('serve-static'),
  app = express(),
  port = process.env.PORT || 3000,
  path = require('path');

app.use(serveStatic(path.join(__dirname, '/dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}`))