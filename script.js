function formData() {
    const data = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
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

    displayForm(data)
}

function displayForm(data){
  
  console.log(data);

  /* document.getElementById('form-display').innerHTML = `
  <h2>Form Data:</h2>
  <p>First Name: ${data.firstName}</p>
  <p>Last Name: ${data.lastName}</p>
  <p>Email: ${data.email}</p>
  <p>Password: ${data.password}</p>
  <p>Favorite Food(s): ${data.favoriteFood}</p>
  <p>Favorite TV Series: ${data.favoriteTVSeries}</p>
  ` */

}

function resetForm() {
  console.clear()
}

  