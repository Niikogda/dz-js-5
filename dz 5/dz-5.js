// Task 1 Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
// який виводить на екран список фільмів у вибраному жанрі.

const movies = {
  action: ["Die Hard", "John Wick", "The Matrix"],
  comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
  drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
  horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],

  // Метод, який виводить список фільмів в заданому жанрі
  listMoviesByGenre: function (genre) {
    return this[genre];
  },
};

// Вивести список комедій

console.log(movies.listMoviesByGenre("comedy"));

// Вивести список фільмів в жанрі "sci-fi"

console.log(movies.listMoviesByGenre("sci-fi"));

let student = {
  subjects: [],

  addSubject: function (subject) {
    if (this.subjects.includes(subject)) {
      console.log(`Ви вже вивчаєте предмет ${subject}.`);
    } else {
      this.subjects.push(subject);
      console.log(`Предмет ${subject} додано.`);
    }
  },

  removeSubject: function (subject) {
    const index = this.subjects.indexOf(subject);

    if (index > -1) {
      this.subjects.splice(index, 1);
      console.log(`Предмет ${subject} видалено.`);
    } else {
      console.log(`Ви не вивчаєте предмет ${subject}.`);
    }
  },
};

student.addSubject("Математика");
student.addSubject("Історія");
student.addSubject("Математика");
console.log(student.subjects);
student.removeSubject("Історія");
console.log(student.subjects);
student.removeSubject("Англійська");
