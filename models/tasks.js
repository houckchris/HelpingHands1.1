module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    taskTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    taskDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    taskDate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    taskTime: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    taskAddr: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    taskCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    taskState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },

    taskZip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5]
      }
    },

    taskDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    taskSlots: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    taskCat: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Task.associate = function(models) {
    // We're saying that an event should belong to an Org
    // An Event can't be created without an Org due to the foreign key constraint
    Task.belongsTo(models.Org, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};
