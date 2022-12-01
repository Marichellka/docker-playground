const app = require('express')();

app.get('/', (req, res ) => 
    res.json('Hello world!') 
);

const port = process.env.PORT || 80;

app.listen(port, '0.0.0.0', () => console.log(`app listening on http://localhost:${port}`) );
