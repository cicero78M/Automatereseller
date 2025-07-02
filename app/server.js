const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Automate Reseller API' });
});

app.post('/products', (req, res) => {
  const keyword = req.query.keyword || '';
  const sample = {
    name: `Sample ${keyword}`,
    price: 10000.0,
    url: 'https://shopee.example/item'
  };
  res.json([sample]);
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
