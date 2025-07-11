const user = require("./Users");
const booking = require("./Bookings");
const bus = require("./Buses");

user.hasOne(booking);
booking.belongsTo(user);

bus.hasMany(booking);
booking.belongsTo(bus);

module.exports = {
  user,
  booking,
  bus,
};
