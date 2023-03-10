const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const neo4j = require("neo4j-driver");
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "shivadharma_temp_editions"));
const router = express.Router();
router.use(bodyParser.json({ limit: "50mb" }));
router.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

const users = [];

router.get("/register", async (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    try {
        /* crypt the password */
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        /* insert user in the db */
        const session = driver.session();
        try {
            await session.writeTransaction(tx => tx
                .run(
                    `
                    MERGE (editor:Editor {name: "${req.body.name}", email: "${req.body.email}", password: "${hashedPassword}"})
                    RETURN id(editor), editor.name, editor.email, editor.password
                    `
                )
                .subscribe({
                    onNext: record => {
                        /* user id */
                        var ids = [];
                        var id;
                        if (!ids.includes(record.get("id(editor)"))) {
                            ids.push(record.get("id(editor)"));
                        };
                        ids.forEach(el => {
                            id = el["low"];
                        });
                        /* save the user */
                        users.push({
                            id: id,
                            name: record.get("editor.name"),
                            email: record.get("editor.email"),
                            password: record.get("editor.password")
                        });
                    },
                    onCompleted: () => {
                        console.log("Data added to the database")
                    },
                    onError: err => {
                        console.log(err)
                    }
                })
            );
        } catch (err) {
            console.log(err);
        } finally {
            await session.close();
        };
    } catch (err) {
        console.log(err);
    } finally {
        res.redirect("/login");
    };
});

module.exports = router;