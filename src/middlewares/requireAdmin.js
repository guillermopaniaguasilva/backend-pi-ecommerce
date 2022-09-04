module.exports = (req, res, next) => {
  const { isAdmin } = req.body;
  if (!isAdmin) {
    return res.status(401).json({
      error: 'Route only available to administrators.',
    });
  }
  next();
};
