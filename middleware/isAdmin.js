module.exports = (req, res, next) => {
  if (req.user?.rol !== "admin") {
    return res.status(403).json({ msg: "Acceso denegado. Solo admins." });
  }
  next();
};
