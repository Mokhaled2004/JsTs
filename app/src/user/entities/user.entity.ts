import { INTEGER, STRING } from 'sequelize';
import { db } from '../../database';

const User = db.define(
    'User',
    {
        id: {
            type: INTEGER,
            autoIncrement: true, // IDENTITY(1, 1)
            primaryKey: true,
        },
        firstName: {
            type: STRING(100),
            allowNull: false,
        },
        lastName: {
            type: STRING(100),
            allowNull: false,
        },
        email: {
            type: STRING(200),
            allowNull: false,
        },
        password: {
            type: STRING(500),
            allowNull: false,
        },
        createdAt: {
            type: 'date-time',
            allowNull: false,
            defaultValue: () => new Date().toJSON(),
        },
    },
    {
        tableName: 'Users',
        schema: 'dbo',
        timestamps: false,
    }
);

export default User;
