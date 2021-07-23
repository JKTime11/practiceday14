const mariadb = require('mariadb');

const pool=mariadb.createPool({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: 'root',
    database: 'userdb',
    connectionLimit: 5
});

pool.getConnection()
    .then (conn => {
        console.log('connected...');
            return conn.query('INSERT INTO Users value (?, ?)', [user.id, user.firstname])
            .then(res => {
                console.log(res);
                conn.end();
            }).catch(err => {
                console.log("Error", err);
                conn.end();
            })
    }).catch(err => {
        console.error('connection problem ', err);
    })

