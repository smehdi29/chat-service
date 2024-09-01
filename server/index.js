const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3001; // Choose a port different from your Vite dev server (typically 3000)

app.post('/name', (req, res) => {
//   res.json({ message: `Welcome ${req.name}!` });
    const { name } = req.body;
    console.log(`Received name: ${name}`);
    res.send({message:`Hello, ${name}`});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
