function formData() {
    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      favoriteFood: [],
      favoriteTVSeries: ''
    };
  
    const favoriteFoods = document.getElementsByName("favoriteFood");
    for (let i = 0; i < favoriteFoods.length; i++) {
      if (favoriteFoods[i].checked) {
        data.favoriteFood.push(favoriteFoods[i].value);
      }
    }
  
    const favoriteTVSeries = document.getElementsByName("favoriteTVSeries");
    for (let i = 0; i < favoriteTVSeries.length; i++) {
      if (favoriteTVSeries[i].checked) {
        data.favoriteTVSeries = favoriteTVSeries[i].value;
        break;
      }
    }
    console.log(data);
}
  