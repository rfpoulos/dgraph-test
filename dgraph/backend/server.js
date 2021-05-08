const app = require('express')();

app.get('/', (req, resp) => {
    return resp.json({ message: 'Docker is easy' })
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
    console.log(`app listening on http://localhost:${port}`)
);