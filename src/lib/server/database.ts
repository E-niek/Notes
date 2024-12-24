import mysql from "mysql2/promise"
import { env } from "$env/dynamic/private";

function dbConn() {
    const _dbConn = mysql.createConnection({
        host: env.DB_HOST,
        port: +env!.DB_PORT,
        database: env.DB_DATABASE,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
    });

    return _dbConn;
}

export async function query(query: string) {
    const _dbConn = await dbConn();

    return await _dbConn.query(query).then(([rows]) => {
        return rows;
    })
}