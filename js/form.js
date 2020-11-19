let contactObject = {};
window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const nameError = document.querySelector('.name-error');
  name.addEventListener('input', function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }

    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}([\\s][A-Z]{1}[a-z]{2,}){0,2}$');
    if (nameRegex.test(name.value)) {
      nameError.textContent = "";
    } else nameError.textContent = "Invalid Name!";
  });

  const address = document.querySelector('#address');
  const addressError = document.querySelector('.address-error');
  address.addEventListener('input', function () {
    if (address.value.length == 0) {
      addressError.textContent = "";
      return;
    }
    let addressRegex = RegExp('^[A-Za-z0-9,\\.]{3,}([\\s][A-Za-z0-9,\\.]{3,}){0,}$');
    if (addressRegex.test(address.value)) {
      addressError.textContent = "";
    }
    else addressError.textContent = "Invalid Address!";
  });

  const phoneNumber = document.querySelector('#phoneNumber');
  const phoneNumberError = document.querySelector('.phoneNumber-error');
  phoneNumber.addEventListener('input', function () {
    if (phoneNumber.value.length == 0) {
      phoneNumberError.textContent = "";
      return;
    }

    let phoneNumberRegex = RegExp('^(([+])?[0-9]{2}[\\s]){0,1}[1-9]{1}[0-9]{9}$');
    if (phoneNumberRegex.test(phoneNumber.value)) {
      phoneNumberError.textContent = "";
    }
    else phoneNumberError.textContent = "Invalid Phone Number!";
  });
});

const save = (event) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    setContactObject();
  } catch (error) {
    alert(error);
  }
};

const setContactObject = () => {
  contactObject._name = getInputValueById('#name');
  contactObject._address = getInputValueById('#address');
  contactObject._city = getInputValueById('#city');
  contactObject._state = getInputValueById('#state');
  contactObject._zip = getInputValueById('#zip');
  contactObject._phoneNumber = getInputValueById('#phoneNumber');
  contactObject._email = getInputValueById('#email');
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}