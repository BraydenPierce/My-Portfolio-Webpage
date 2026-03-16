const dbo = require("../db/conn");
const express = require("express");
const { ObjectId } = require("mongodb");
const { requireAdmin } = require("../middleware/auth")
const router = express.Router();

// GET all hobby items, optionally filtered by category
router.get("/hobbies", async (req, res) => {
    try {
        const db = dbo.getDb();
        const { category } = req.query; // e.g ?category=reading
        const query = category ? { category } : {};
        const result = await db.collection("hobbies").find(query).toArray();
        res.json(result);
    } catch {
        res.status(500).json({ error: "Failed to fetch hobbies" });
    }
});

router.post("/hobbies", requireAdmin, async (req, res) => {
    try {
        const db = dbo.getDb();
        const { title, description, category, imageUrl } = req.body;
        const doc = { title, description, category, imageUrl };
        const result = await db.collection("hobbies").insertOne(doc);
        res.status(201).json({ _id: result.insertId, ...doc });
    } catch {
        res.status(500).json({ error: "Failed to create hobby" });
    }
})

router.put("/hobbies/:id", requireAdmin, async (req, res) => {
  try {
    const db = dbo.getDb();
    const { id } = req.params;
    const { title, description, category, imageUrl } = req.body;
    await db.collection("hobbies").updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, description, category, imageUrl } }
    );
    res.json({ status: "updated" });
  } catch {
    res.status(500).json({ error: "Failed to update hobby" });
  }
});

router.delete("/hobbies/:id", requireAdmin, async (req, res) => {
  try {
    const db = dbo.getDb();
    await db.collection("hobbies").deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ status: "deleted" });
  } catch {
    res.status(500).json({ error: "Failed to delete hobby" });
  }
});

module.exports = router;