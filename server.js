const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers',(req, res) => {
    // sample api to which can be  replaced by your own stuff
    const customers = [
        { id: 1, firstName: "John", lastName: 'Walker'},
        { id: 2, firstName: "Steve", lastName: 'Smith'},
        { id: 3, firstName: "Ron", lastName: 'Wisely'}
    ];
    res.json(customers);
});


app.listen(port, () => console.log("Server started on port " + port));

