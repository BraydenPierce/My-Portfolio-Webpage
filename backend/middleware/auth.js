function requireAuth(req, res, next) {
  if (!req.session?.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

function requireAdmin(req, res, next) {
  if (!req.session?.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (req.session.user.accType !== "Admin") {
    return res.status(403).json({ error: "Forbidden: Admin only" });
  }
  next();
}

module.exports = { requireAuth, requireAdmin };