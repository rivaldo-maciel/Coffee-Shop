import { DataTypes, Model } from 'sequelize';
import config from '.';

class User extends Model {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  role!: string;
  address!: string;
}

User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    address: DataTypes.STRING,
  },
  {
    sequelize: config,
    modelName: 'User',
    underscored: true,
    timestamps: false,
  }
);

export default User;
