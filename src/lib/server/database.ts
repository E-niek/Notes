import mysql from "mysql2/promise"

let mySQLConn = null;

export function mySQLConnFn() {
    const mySQLConn = mysql.createConnection({
        host: "localhost",
        user: "notes",
        password: "notesdb1234",
        database: "Notes",
    });

    return mySQLConn;
}