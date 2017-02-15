var firstNameInput = document.getElementById('FIRST_NAME')
var lastNameInput = document.getElementById('LAST_NAME')
var describeInput = document.getElementById('DESCRIBE')
var emailInput = document.getElementById('EMAIL')
var phoneNumberInput = document.getElementById('PHONE')
var profile = document.getElementById('PROFILE')
var rawHTML = document.getElementById('RAW')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describe = describeInput.value
  var email = emailInput.value
  var phoneNumber = phoneNumberInput.value

  profile.innerHTML =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>\n' +
  '<p>' + describe + '</p>\n' +
  '<p> If you\'re interested in a date, you can email me at \n' +
  '  <a href="mailto:' + email + '"target="_blank">' + email + '</a>\n' +
  '  or give me a call at \n' +
  '  <a href="tel:' + phoneNumber + '" target="_blank">' + phoneNumber + '</a>.\n' +
  '</p>'

  rawHTML.textContent = profile.innerHTML
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
describeInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneNumberInput.addEventListener('input', updateProfile)
