const app = require('express')();

app.get('/', (req, res ) => 
    res.json('Hello world!') 
);

const port = 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
