const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');

const PORT = 7777;

app.use(express.json());
app.use(cors());

const saltRounds = 10;
const originalPassword = "T$3qR#p9xZ";

bcrypt.hash(originalPassword, saltRounds, (err, hashedPassword) => {
    if (err) {
        console.error(err);
    } else {
        const pass = hashedPassword;
        const users = [
            {
                username: "robbie@topnotchfence.com",
                password: pass
            }
        ];

        app.get('/users', (req, res) => {
            res.json(users);
        });

        app.listen(PORT, () => {
            console.log(`Listening on Port ${PORT}`);
        });
    }
});
