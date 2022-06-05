const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/customers', (req, res) => {
    const customers = ['Agus, Budi, Caca, Dedi, Edi, Fafa, Gede, Hadi, Igi, Jadi, Kiki, Lala, Mimi, Nana, Ogi, Pupu, Qora, Rara, Sasa, Tati, Ugi, Vada, Wafa, Xxi, Yaya, Zaza'];
    res.json(customers);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));