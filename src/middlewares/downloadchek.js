module.exports = function downloadchek(req, res, next) {
  if (req.files && (req.files.audio || req.files.image)) {
    return next(); // Если хотя бы один из файлов загружен, вызываем следующую middleware функцию
  }
  res.redirect("/beats/new"); // Если ни один из файлов не был загружен, перенаправляем на страницу снова
};
