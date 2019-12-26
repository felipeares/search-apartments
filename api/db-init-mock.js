const cities = require("./db/cities");
const Apartment = require("./models/apartments");

module.exports = async () => {
  // check if apartments already saved (not first build)
  const count = await Apartment.countDocuments();
  if (count > 0) {
    console.log(
      `${count} apartments already saved: continuing without creating new ones`
    );
    return;
  }

  // create random apartments for each city
  console.log("creating new apartments");
  cities.forEach(city => {
    // create between 0-30 apartments for each city
    const n = Math.floor(Math.random() * 31);
    for (let i = 0; i <= n; i++) {
      const apartment = new Apartment({
        city: city,
        title: "Lorem ipsum donor et grantes os binolom hermos",
        price: 50000 + Math.floor(Math.random() * 1000000),
        size: 20 + Math.floor(Math.random() * 500),
        rooms: 1 + Math.floor(Math.random() * 8),
        bathrooms: 1 + Math.floor(Math.random() * 8),
        image: Math.floor(Math.random() * 4) + ".jpg"
      });
      const newApartment = apartment.save();
    }
  });
};
