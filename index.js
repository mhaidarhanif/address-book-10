console.log("Address Book (Batch 10)");

let dataContacts = [
  {
    id: 10,
    fullName: "M Haidar Hanif",
    phone: "+62-812-345-678",
    email: "haidar@haidar.com",
    address: {
      street: "Jl. Permata Bumi Blok A-1",
      streetDetails: "Perumahan Bumi Asri",
      subDistrict: "Cisaranten",
      district: "Arcamanik",
      city: "Bandung",
      zipCode: "40200",
      country: "Indonesia",
      location: {
        latitude: -6.9185022,
        longitude: 107.6851417,
      },
    },
  },
  {
    id: 50,
    fullName: "Elon Musk",
    phone: "+1-2345-678",
    email: "elon@elon.com",
    address: {
      street: "1 Rocket Road",
      streetDetails: "SpaceX Headquarters",
      subDistrict: "Hawthorne",
      district: "Los Angeles County",
      city: "Hawthorne",
      zipCode: "90250",
      country: "USA",
      location: {
        latitude: 33.9206,
        longitude: -118.3279,
      },
    },
  },
  {
    id: 150,
    fullName: "Steve Jobs",
    phone: "+1-2345-678",
    email: "jobs@jobs.com",
    address: {
      street: "1 Infinite Loop",
      streetDetails: "Apple Campus",
      subDistrict: "Cupertino",
      district: "Santa Clara County",
      city: "Cupertino",
      zipCode: "95014",
      country: "USA",
      location: {
        latitude: 37.3318,
        longitude: -122.0312,
      },
    },
  },
];

function showContacts(contacts) {
  contacts.forEach((contact) => renderContact(contact));
}

function renderSeparatorLine() {
  console.log("---------------------------------------");
}

function renderContact(contact) {
  console.log(`
    👤 ${contact.fullName}
    📞 ${contact.phone}
    📧 ${contact.email}
    `);
}

function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  return foundContacts;
}

function addContact(
  contacts,
  fullName = "No Name",
  phone = null,
  email = null
) {
  // Example to breakdown the solution to get the newId
  // const lastIndex = contacts.length - 1;
  // const lastContact = contacts[lastIndex];
  // const lastId = lastContact.id;
  // const newId = lastId + 1;

  const newId = contacts[contacts.length - 1].id + 1;

  const newContact = {
    id: newId,
    fullName: fullName,
    phone: phone,
    email: email,
  };

  const updatedContacts = [...contacts, newContact];

  dataContacts = updatedContacts;
}

function deleteContact() {}

function editContact() {}

// ------------------------------------------------------------------

// showContacts(dataContacts);

// const searchResults = searchContacts(dataContacts, "steve");
// showContacts(searchResults);

addContact(dataContacts, "Jensen Huang", "+120304050", "jensen@nvidia.com");

showContacts(dataContacts);
