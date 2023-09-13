// Получаем ссылки на элементы, в которые будем выводить результаты
const artistInput = document.getElementById("artistInput");
const resultElement = document.getElementById("result");

// Функция для выполнения запроса и обновления данных на странице
async function fetchData() {
  const artist = artistInput.value; // Получаем значение из инпута
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "112a2ba005mshd6a819d1b12f24cp194cb8jsnccc44dace5fa",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const searchResults = result.data;

    // Очищаем элемент от предыдущих результатов
    resultElement.innerHTML = "";

    // Создаем список для результатов
    const resultList = document.createElement("ul");

    // Добавляем каждый результат в список
    searchResults.forEach((item) => {
      const listItem = document.createElement("li");

      // Создаем элементы для вывода информации о треке
      const titleElement = document.createElement("strong");
      titleElement.textContent = "Name track: " + item.title;

      const artistElement = document.createElement("strong");
      artistElement.textContent = "Artist: " + item.artist.name;

      const durationElement = document.createElement("strong");
      durationElement.textContent = "duration: " + item.duration + "seconds";

      // Добавляем элементы к списку
      listItem.appendChild(titleElement);
      listItem.appendChild(document.createElement("br"));
      listItem.appendChild(artistElement);
      listItem.appendChild(document.createElement("br"));
      listItem.appendChild(durationElement);
      listItem.appendChild(document.createElement("hr"));

      // Добавляем элемент списка к списку результатов
      resultList.appendChild(listItem);
    });

    // Добавляем список результатов на страницу
    resultElement.appendChild(resultList);
  } catch (error) {
    console.error(error);
  }
}

// Получаем форму и добавляем обработчик для отправки
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем отправку формы по умолчанию
  fetchData(); // Вызываем функцию fetchData для выполнения запроса
});
