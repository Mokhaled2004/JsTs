import { Sequelize } from 'sequelize';

// URI: protocol://username:password@host:port/databaseName
// SQL Server: mssql://sa:P@ssw0rd@localhost:1433/test
export const db = new Sequelize('mssql://sa:P@ssw0rd@localhost:1433/test');

