const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/:text', (req, res) => {
  const logFilePath = 'logs/' + req.params.text + '.txt';

  try {
    fs.writeFileSync(path.join(process.cwd(), logFilePath), req.params.text);

    res.send('Param logged successfully!');

  } catch (err) {
    console.error('Error saving to file:', err);
    res.status(500).send('Error saving log');
  }
});

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
