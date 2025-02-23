
const Users = require("./userSchema");
const trek = require("./trekSchema");
// const days = require("./daySchema");
const trekRequest = require("./requestSchema");


// trek.hasMany(days, { foreignKey: "trekId" });
// days.belongsTo(trek, { foreignKey: "trekId" });

trekRequest.belongsTo(trek, { foreignKey: "trekId" });
trek.hasOne(trekRequest, { foreignKey: "trekId" });

trekRequest.belongsTo(Users, { foreignKey: "userId" });
Users.hasMany(trekRequest, { foreignKey: "userId" });



module.exports = {
  Users,
  trek,
  // days,
  trekRequest
};
