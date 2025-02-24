const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");


const request = sequelize.define("requests", {


    requestId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    noOfPeople:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message:{   
        type: DataTypes.TEXT,
        allowNull: false
    },
    
 }, {

});

(async () => {
    try {
      await request.sync();
      console.log("Request table has been created");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  })();

module.exports = request;