let addressBook;
window.addEventListener('DOMContentLoaded', (event) => {
  addressBook = getContactsFromJSONArray();
  document.querySelector(".person-count").textContent = addressBook.length;
  createInnerHTML();
});

const createInnerHTML = () => {
  const headerHtml = `
    <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
        <th>Phonenumber</th>
        <th>Email</th>
        <th></th>`;
  let innerHtml = `${headerHtml}`;
  if (addressBook.length != 0) {
    for (const contact of addressBook) {
      innerHtml = `${innerHtml}
      <tr>
        <td>${contact._name}</td>
        <td>${contact._address}</td>
        <td>${contact._city}</td>
        <td>${contact._state}</td>
        <td>${contact._zip}</td>
        <td>${contact._phoneNumber}</td>
        <td>${contact._email}</td>
        <td>
          <img id="${contact._id}" onclick="remove(this)" alt="delete" 
                    src="../assets/delete-black-18dp.svg">
          <img id="${contact._id}" onclick="update(this)" alt="edit" 
                    src="../assets/create-black-18dp.svg">
        </td>
      </tr>`;
    }
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
};

const getContactsFromJSONArray = () => {
  let contacts = [
    {
      _id: 1,
      _name: "Vaishali Sharma",
      _address: "Santa Cruz",
      _city: "Mumbai",
      _state: "Maharashtra",
      _zip: 200134,
      _phoneNumber: "+91 9089671234",
      _email: "vaishali.sharma@gmail.com"
    },
    {
      _id: 2,
      _name: "Vishal Gupta",
      _address: "Malta Road",
      _city: "Jaipur",
      _state: "Rajasthan",
      _zip: 300134,
      _phoneNumber: "+91 9089671232",
      _email: "vishal.gupta@gmail.com"
    }
  ]
  return contacts;
}