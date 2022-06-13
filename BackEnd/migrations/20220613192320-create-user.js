module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.INTEGER,
      }
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Users');
  }
};