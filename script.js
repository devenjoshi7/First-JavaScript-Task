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

  const formDisplay = document.getElementById('form-display')
  formDisplay.innerHTML = `
    <h2>Form Data:</h2>
    <p>First Name: ${data.firstName ? data.firstName : 'NULL'}</p>
    <p>Last Name: ${data.lastName ? data.lastName : 'NULL'}</p>
    <p>Email: ${data.email ? data.email : 'NULL'}</p>
    <p>Password: ${data.password ? data.password : 'NULL'}</p>
    <p>Favorite Food(s): ${data.favoriteFood.length > 0 ? data.favoriteFood : 'NULL' }</p>
    <p>Favorite TV Series: ${data.favoriteTVSeries ? data.favoriteTVSeries : 'NULL'}</p>
    `

  const resetButton = document.createElement("button")
  resetButton.textContent = "Reset"
  resetButton.addEventListener("click", resetForm)
  resetButton.style.backgroundColor = '#1c49eb'
  resetButton.style.color = 'white'
  resetButton.style.padding = '10px 20px'
  resetButton.style.border = 'none'
  resetButton.style.borderRadius = '4px'
  resetButton.style.cursor = 'pointer'
  formDisplay.appendChild(resetButton)


}

function resetForm() {
  console.clear()
  document.getElementById("form-display").style.display = "none"
}
