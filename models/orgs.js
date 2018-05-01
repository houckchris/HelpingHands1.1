module.exports = function(sequelize, DataTypes) {
    var Org = sequelize.define("Org", {
        orgName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
    
        orgImage: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        }
      });

      return Org;
    };