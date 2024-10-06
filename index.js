//1 
const bankAccount = {

    ownerName: "Dave",
    accountNumber: "123456789",
    balance: 1000,
    deposit(amount) {
      this.balance += amount;
      return;
    },
    withdraw(amount) {
      this.balance -= amount;
      return;
    },

  };
  bankAccount.deposit(Number(prompt("Скільки грошей ви бажаєте покласти на депозит?")));
  alert(`Залишок ${bankAccount.balance}`);

  console.log(`Залишок ${bankAccount.balance}`);
  bankAccount.withdraw(Number(prompt("Скільки грошей ви бажаєте зняти з рахунку?")));
  alert(`Залишок ${bankAccount.balance}`);

  console.log(`Залишок ${bankAccount.balance}`);
  
  //2 
  const temperature = Number(prompt("Яка наразі температура?"));

  const weather = {
    temperature,
    humidity: 80,
    windSpeed: 3,
    isWeatherBeneath0() {
      let message;
      if (this.temperature < 0) {
        message = true;
      } else {
        message = false;
      }
      return message;
    },
  };
  if (weather.isWeatherBeneath0() === true) {
  alert("Температура менше 0 градусів цельсія")
  } else {
      alert("Температура більша або дорівнює 0 градусів цельсія")
  }
  
  //3 
  const user = {
    name: "Dave",
    email: "davel4@gmail.com",
    password: "7777",
    login(email, password) {
      let message;
      if (email === this.email && password === this.password) {
        message = true;
      } else {
        message = false;
      }
      return message;
    },
  };
  if (user.login(prompt("Введіть вашу пошту:"), prompt("Введіть ваш пароль:")) === true) {
    alert("Все добре");
  } else {
    alert("Щось не так");
  }
  
  //4 
  const movie = {
    title: "I love potato",
    director: "carrot wiliam",
    year: "1109",
    rating: 9,
    isRateGood() {
      let message;
      if (this.rating > 8) {
        message = true;
      } else {
        message = false;
      }
      return message;
    },
  };
  console.log(movie)
  if (movie.isRateGood() === true) {
      console.log("Рейтинг високий")
  } 