console.log("Address Book (Batch 10)");

const dataContacts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
  👤 ${contact.fullName}
  📞 ${contact.phone}
  📧 ${contact.email}
  `);
  }
}

showContacts(dataContacts);
