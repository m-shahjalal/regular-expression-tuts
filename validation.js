const inputs = document.querySelectorAll('input');

// validation script here
const pattern = {
  telephone: /^\d{11}$/,
  username: /^\w{5,12}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

// const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

// validate function
const validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
};
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, pattern[e.target.attributes.name.value]);
  });
});
