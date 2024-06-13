import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello there, this is gonna be lit someday.🔥️');
});

app.listen(PORT, () => {
    console.log(`App listenin' on localhost:${PORT}`)
})