// Создаем миддлвар-функцию для проверки, что инпуты при регистрации не пусты
module.exports = function register(req, res, next) {
  const { userName, password } = req.body;

  // Проверяем, что и userName, и password не пусты
  if (!userName || !password) {
    return res.redirect("/register"); // Перенаправляем обратно на страницу регистрации
  }

  next(); // Если оба поля заполнены, вызываем следующую миддлвар-функцию
};
