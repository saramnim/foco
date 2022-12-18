const loginRequired = (req, res, next) => {
  if (!req.cookies.token) {
    res.redirect("/");
    return;
  }

  next();
};

export { loginRequired };
