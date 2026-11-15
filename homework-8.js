// Задание 3. создаал обьекты с личными данными
const myProfile = {
  firstName: "Муслим",
  lastName: "Чекиев",
  email: "chekiev.mus@gmail.com",
  job: "Студент",
  position: "Frontend-developer",
  age: 20,
  country: "Россия",
  city: "Грозный",
  hobby: "Программирование"
}
  console.log("Мой профиль:", myProfile);

  //Задание 4. Обьект  данными об авто
  const myCar = {
    brand: "toyota",
    model: "Camry",
    year: 2021,
    color: "black",
    transmission: "автомат"
  }
  myCar.owner = myProfile;
  console.log("Данные об автомобиле:", myCar);

  // Задание 5. Функция проверки максимальной скорости
  function checkMaxSpeed(carObject) {
    if ("maxSpeeed" in carObject) {
      return
    }
    carObject.maxSpeed = 220;
  }
  checkMaxSpeed(myCar);
  console.log("Машина после доюавления скорости:", myCar);
  checkMaxSpeed(myCar);
  console.log("Машина после второй проверки:", myCar);

  //Задание 6. Функция для вывода значения св-во
  function showProperty(obj, propertyName) {
    console.log(`Значение свойства "${propertyName}":`, obj [propertyName]);
    showProrepty(myCar, "brand");
    showProperty(myCar, "year");
  }

  // Задание 7. Массив с названиями продуктов
  const productsList = ["молоко", "Хлеб", "Сыр", "яблоки", "кофе"];
  console.log("Список продуктов:", productsList);

  // Задание 8. Массив книг и добавление новой
  const books = [
    {
      title: "Гарри Поттер и философский камень",
      author: "Дж. К. Роулинг",
      year: 1997,
      coverColor: "Красный",
      genre: "Фэнтези"
    },
    {
      title: "Хоббит, или туда и обратно",
      author: "Дж. Р. Р. Толкин",
      year: 1937,
      coverColor: "Зеленый",
      genre: "Фэнтези"
    },
    {
      title: "1984",
      author: "Джордж Оруэлл",
      year: 1949,
      coverColor: "Синий",
      genre: "Антиутопия"
    }
  ];
  books.push({
    title: "Марсианин",
    author: "Энди Вейер",
    year: 2011,
    coverColor: "Оранжевый",
    genre: "Научная фантастика"
  });
  console.log("Массив книг после добавления:", books);

  // Задаание 9. Обьедениние массивов
  const harryPotterUniverse = [
    {
      title: "Гарри Поттер и тайная комната",
      author: "дж. К. роулинг",
      year: 1998,
      coverColor: "Зеленый",
      genre: "Фэентези"
    },
    {
      title: "Гарри Поттер и узник азкабана",
      author: "Дж. К. Роулинг",
      year: 1999,
      coverColor: "Фиолетовый",
      genre: "Фэнтези"
    }
  ];
  const allBooks = [...books, ...harryPotterUniverse];
  console.log("Обьединенный масив всеех книг:", allBooks);

  // Задание 10. Использовал метода мап

function checkRareBooks(booksArray) {
  return booksArray.map(book => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}
const booksWithRarity = checkRareBooks(allBooks);
console.log("Книги с отметкой редкости:", booksWithRarity);