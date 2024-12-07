const { Request, Connection } = require('tedious');

const connection = new Connection({
    "server": "localhost",
    "authentication": {
        "type": "default",
        "options": {
            "userName": "sa",
            "password": "P@ssw0rd"
        }
    },
    "options": {
        "port": 1433,
        "database": "master",
        "trustServerCertificate": true
    }
});

function pascalToCamel(str) {
    return str[0].toLowerCase() + str.slice(1);
}

// mssql        -> Microsoft SQL Server --> mssql://username:password@hostname:port/database
// postgresql   -> Postgres             --> postgres://username:password@hostname:port/database
// mysql        -> MySQL                --> mysql://username:password@hostname:port/database
// sqlite       -> SQLite               --> sqlite://username:password@hostname:port/database

function query(queryStatement) {
    // insert, select, delete, update, create table, create database, alter table, alter database
    let rowsCountResult = null;
    let isSelectStatement = false;
    const rows = [];

    return new Promise((resolve, reject) => {
        const queryRequest = new Request(queryStatement, (error, rowsCount) => {
            if (error) {
                return reject(error);
            }

            rowsCountResult = rowsCount
        });
        queryRequest.on('row', (columns) => {
            isSelectStatement = true;
            const row = columns.reduce((state, item) => {
                state[pascalToCamel(item.metadata.colName)] = item.value;
                return state;
            }, {});
            rows.push(row);
        });

        queryRequest.on('requestCompleted', () => {
            if (isSelectStatement) {
                resolve(rows);
            } else {
                resolve(rowsCountResult);
            }
        });

        connection.execSql(queryRequest);
    });
}
// connection over mssql protocol

connection.on('connect', async (err) => {
    if (err) {
        console.error('Connection Failed', err);
        return process.exit(1);
    }
    console.log('CONNECTED SUCCESSFULLY');

    // const query = new Request("CREATE DATABASE test;", (error, rowsCount) => {
    //     if (error) {
    //         console.error('Error creating database', error);
    //     }

    //     console.log('Database created successfully');
    // });

    // connection.execSql(query);


    // const createTableResult = await createTable('CREATE TABLE test.dbo.Users2 (Id INT PRIMARY KEY, Name NVARCHAR(100) NOT NULL);')
    // console.log({ createTableResult });
    // const newTableQuery = new Request(`CREATE TABLE test.dbo.Users1 (Id INT PRIMARY KEY, Name NVARCHAR(100) NOT NULL);`, (error, rowsCount) => {
    //     if (error) {
    //         console.error('Error creating table', error);
    //     }

    //     console.log('Table created successfully');
    // });
    // connection.execSql(newTableQuery);

    // const insertQuery = new Request(`INSERT INTO test.dbo.Users (Id, Name) VALUES (1, 'John Doe'), (2, 'Ahmed Radwan');`, (error, rowsCount) => {
    //     if (error) {
    //         console.error('Error inserting data', error);
    //     }

    //     console.log('Data inserted successfully', { rowsCount });
    // });
    // connection.execSql(insertQuery);

    // const deleteQuery = new Request(`DELETE FROM test.dbo.Users WHERE Id = 1;`, (error, rowsCount) => {
    //     if (error) {
    //         console.error('Error deleting data', error);
    //     }

    //     console.log('Data deleted successfully', { rowsCount });
    // });
    // connection.execSql(deleteQuery);

    const createTableResult = await query('CREATE TABLE test.dbo.Test2 (Id INT PRIMARY KEY, Name NVARCHAR(100) NOT NULL);');
    const result = await query(`SELECT * FROM test.dbo.Users;`);
    console.log({ createTableResult, result });

});

// Pascal Case -> UpperCamelCase
// Camel Case -> lowerCamelCase
connection.connect();



// User class --> test.dbo.Users
// class User {
//   id: number;
//   name: string;
// }
// ORM
// Object Relational Mapping