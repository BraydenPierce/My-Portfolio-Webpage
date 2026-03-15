const dbo = require("../db/conn");
const express = require("express");
const router = express.Router();

// GET all hobby items, optionally filtered by category
router.get("/hobbies", async (req, res) => {
    try {
        const db = dbo.getDb();
        const { category } = req.query; // e.g ?category=reading
        const query = category ? { category } : {};
        const result = await db.collection("hobbies").find(query).toArray();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch hobbies" });
    }
});

module.exports = router;