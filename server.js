var PORT = process.env.PORT || 3030;
var path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/dist/index.html')
// });

app.listen(PORT, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening at http://localhost:${PORT}/`);
  }
};