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

function renderContacts(contacts) {
  const appElement = document.getElementById("app");

  appElement.innerHTML = `<ul id="contacts" class="space-y-4">
    ${contacts.map((contact) => renderContact(contact)).join("")}
  </ul>`;
}

function renderContact(contact) {
  return `<li class="p-2 border border-black rounded">
  <h2 class="font-bold text-lg">👤 ${contact.fullName}</h2>
  <p>📞 ${contact.phone ?? "-"}</p>
  <p>📧 ${contact.email ?? "-"}</p>
  </li>`;
}

function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  return foundContacts;
}

function addContact(contacts, { fullName = null, email = null, phone = null }) {
  // Example to breakdown the solution to get the newId
  // const lastIndex = contacts.length - 1;
  // const lastContact = contacts[lastIndex];
  // const lastId = lastContact.id;
  // const newId = lastId + 1;

  const newId = contacts[contacts.length - 1].id + 1;

  const newContact = {
    id: newId,
    fullName,
    phone,
    email,
  };

  const updatedContacts = [...contacts, newContact];

  dataContacts = updatedContacts;
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);

  dataContacts = updatedContacts;
}

function editContact(contacts, id, { fullName, phone, email }) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === id)
      return {
        ...contact,
        fullName: fullName ?? contact.fullName,
        phone: phone ?? contact.phone,
        email: email ?? contact.email,
      };
    else return contact;
  });

  dataContacts = updatedContacts;
}

// ------------------------------------------------------------------

renderContacts(dataContacts);

// const searchResults = searchContacts(dataContacts, "steve");
// showContacts(searchResults);

// addContact(dataContacts, {
//   fullName: "Jensen Huang",
//   email: "jensen@nvidia.com",
// });

// deleteContact(dataContacts, 10);

// editContact(dataContacts, 10, {
//   email: "me@mhaidarhanif.dev",
// });
