const EMAIL = 'admin@admin.com'
const PASSWORD = 'admin1234'
let is_email_validated = false;
let is_password_validated = false;


function show_error(errors) {

  const error_container = document.getElementById('errors')

  let error_lis = errors.map((er) => `<li>${er}</li>`).join('');

  if (errors.length > 0) {
    error_container.style.display = 'block';
    error_container.classList.add('alert');
    error_container.classList.add('alert-danger');
    let error_text = `<ul> ${error_lis} </ul>`;
    error_container.innerHTML = error_text;
    return false;
  }


  error_container.style.display = 'none';
  error_container.classList.remove('alert');
  error_container.classList.remove('alert-danger');
  let error_text = '';
  error_container.innerHTML = error_text;

  return true;


}
function validate_email(e) {
  let value = e.value;
  console.log(value);
  if (value === EMAIL && value != '') {
    makevalid(e)

    is_email_validated = true;
  }
  else {

    makeinvalid(e)
    is_email_validated = false;
  }
}

function validate_password(e) {

  let value = e.value;
  let Earray = [];
  if (value === PASSWORD && value.length > 8) {
    show_error([])
    makevalid(e)

    is_password_validated = true;

    if (is_email_validated && is_password_validated) {
      document.getElementById('submit_button').disabled = false;
    }
  }
  else {
    if (value.length < 8) {

      Earray.push('Password should have at least 8 charecter .')
    }
    
    show_error(Earray)
    makeinvalid(e)
    is_password_validated = false;

  }
}

function makevalid(e) {
  e.classList.remove('is-invalid')
  e.classList.add('is-valid')
}

function makeinvalid(e) {
  e.classList.remove('is-valid')
  e.classList.add('is-invalid')
}