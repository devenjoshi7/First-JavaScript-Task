document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm();
})

function submitForm() {
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let favoriteFood = [];
  let favoriteTVSeries = '';

  let foodCheckbox = document.getElementsByName('favoriteFood');
  for(let i=0; i<foodCheckbox.length; i++){
    if(foodCheckbox[i].checked){
      favoriteFood.push(foodCheckbox[i].value);
    }
  }

  let tvSeriesRadio = document.getElementsByName('favoriteTVSeries');
  for(let i=0; i<tvSeriesRadio.length; i++){
    if(tvSeriesRadio[i].checked){
      favoriteTVSeries = tvSeriesRadio[i].value;
      break;
    }
  }

  let defaultText = "First Name: "+ firstName +"<br>Last Name: "+ lastName +"<br>Email: "+ email +"<br>Password: "+ password +"<br>Favorite Food :"+ favoriteFood +" " + "<br>Favorite TV Series: "+ favoriteTVSeries;
  document.getElementById('default-text').innerHTML = defaultText;

  document.getElementById('my-form').reset()
  document.getElementById('default-fieldset').style.display = 'block';

}

function resetForm() {
  document.getElementById('default-text').innerHTML = 'Please Enter Some Information in the Form Fields!';
  document.getElementById('my-form').reset();
}
