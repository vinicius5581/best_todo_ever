const express = require('express');
const app = express();
const db = require('./models');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`)
    })
});