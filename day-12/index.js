console.log("Day 12");

// --------------------------------------------------------------------

const numbers = [1, 2, 3];

const continuedNumbers = [...numbers, 4, 5, 6];

console.log(continuedNumbers);

// --------------------------------------------------------------------

const contact = {
  name: "Haidar",
  email: "haidar@haidar.com",
};

const updatedContact = {
  ...contact,
  phone: "+6281234567890",
};

console.log(updatedContact);

// --------------------------------------------------------------------

const contacts = [
  {
    id: 1,
    name: "Haidar",
    email: "haidar@haidar.com",
  },
  {
    id: 2,
    name: "Hanif",
    email: "hanif@hanif.com",
  },
];

const newContactData = {
  id: 3,
  name: "Elon",
  email: "elon@elon.com",
};

const updatedContacts = [...contacts, newContactData];

console.log(updatedContacts);
