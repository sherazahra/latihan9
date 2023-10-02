const express = require('express')
const app = express()
const port = 3000

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

app.get('/', (req, res) => {
    res.send("Halo Shera!")
});

const pemilikRouter = require('./routes/pemilik');
app.use('/api/pemilik', pemilikRouter);

const dpiRouter = require('./routes/dpi');
app.use('/api/dpi', dpiRouter);

const alat_tangkapRouter = require('./routes/alat_tangkap');
app.use('/api/alat_tangkap', alat_tangkapRouter);

const kapalRouter = require('./routes/kapal');
app.use('/api/kapal', kapalRouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})
