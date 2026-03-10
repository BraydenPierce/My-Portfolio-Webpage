const express = require("express");
const router = express.Router();

// Route for fetching public repos
router.get("/api/github/repos", async (req, res) => {
    const response = await fetch(
        `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
        {
            headers: {
                Authorizaition: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    if (!response.ok) {
        return res.status(response.status).json({ error: "Github API error" });
    }

    const repos = await response.json();
    res.json(repos.filter((r) => !r.fork));
});

module.exports = router;