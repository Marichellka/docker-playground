const app = require('express')();

app.get('/', (req, res ) => 
    res.json('Hello world!') 
);

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
