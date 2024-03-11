document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm();
})

function submitForm() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const favoriteFood = [];
  const favoriteTVSeries = '';

  const foodCheckbox = document.getElementsByName('favoriteFood');
  for(let i=0; i<foodCheckbox.length; i++){
    if(foodCheckbox[i].checked){
      favoriteFood.push(foodCheckbox[i].value);
    }
  }

  const tvSeriesRadio = document.getElementsByName('favoriteTVSeries');
  for(let i=0; i<tvSeriesRadio.length; i++){
    if(tvSeriesRadio[i].checked){
      favoriteTVSeries = tvSeriesRadio[i].value;
      break;
    }
  }

  const defaultText = "First Name: "+ firstName +"<br>Last Name: "+ lastName +"<br>Email: "+ email +"<br>Password: "+ password +"<br>Favorite Food :"+ favoriteFood +" " + "<br>Favorite TV Series: "+ favoriteTVSeries;
  document.getElementById('default-text').innerHTML = defaultText;

  document.getElementById('my-form').reset()
  document.getElementById('default-fieldset').style.display = 'block';

}

function resetForm() {
  document.getElementById('default-text').innerHTML = 'Please Enter Some Information in the Form Fields!';
  document.getElementById('my-form').reset();
}
