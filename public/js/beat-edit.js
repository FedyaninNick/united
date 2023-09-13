// Получаем ссылку на HTML-элемент с идентификатором "editForm" и сохраняем его в переменной editForm.
const editForm = document.getElementById("editForm");

// Добавляем слушатель события "submit" к форме.
editForm.addEventListener("submit", async (e) => {
  // Предотвращаем стандартное поведение формы (отправку и перезагрузку страницы).
  e.preventDefault();

  // Извлекаем значение "beatid" из атрибута "data" формы и сохраняем его в переменной beatid.
  const { beatid } = e.target.dataset;

  // Создаем объект FormData для получения данных формы.
  const formData = new FormData(e.target);

  // Выполняем асинхронный запрос к серверу с использованием Fetch.
  const response = await fetch(`/api/beats/${beatid}`, {
    method: "PUT", // Используем HTTP-метод PUT для обновления данных на сервере.
    headers: {
      "Content-Type": "application/json", // Устанавливаем заголовок Content-Type для указания формата данных (JSON).
    },
    // Преобразуем данные формы в объект и отправляем их в виде JSON.
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  // Если ответ от сервера имеет статус 200 (OK), перенаправляем пользователя на страницу с определенным beatid.
  if (response.status === 200) {
    window.location.href = `/beats/${beatid}`;
  }

  // Если ответ от сервера имеет статус 403 (Forbidden), выводим сообщение об ошибке на форме.
  if (response.status === 403) {
    const error = document.createElement("h5"); // Создаем элемент <h5>.
    error.innerText = "You don't have editing rights"; // Устанавливаем текст сообщения об ошибке.
    editForm.appendChild(error); // Добавляем сообщение об ошибке к форме.

    // Устанавливаем таймер для удаления сообщения об ошибке через 3 секунды.
    setTimeout(() => {
      editForm.removeChild(error); // Удаляем сообщение об ошибке после истечения таймера.
    }, 3000);
  }
});
