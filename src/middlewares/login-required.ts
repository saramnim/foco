const loginRequired = (req, res, next) => {
  if (!req.user) {
    res.redirect('/');
    return;
  }

  next();
};

export { loginRequired };
