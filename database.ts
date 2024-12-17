import sqlite3 from "sqlite3";
import path, { resolve } from "path";

type Note = {
    id: number;
    owner: string;
    data: string;
};

// CREATE TABLE note(id INTEGER NOT NULL PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES user(id), data TEXT);
const db = new sqlite3.Database(path.join("/home/eniek/Projects/Notes/src/lib/server", "notes.db"));

var id = 0;
export function AddNote(data: string) {
    db.run("INSERT INTO note (id, user_id, data) VALUES (?, ?, ?)", [id, "0", data]);
    id++;
}

// export function GetNote(id: number): Note {
//     const sql = `SELECT * FROM note WHERE id = 0;`;
//     const row = db.all<Note>(sql, (err, rows: Note) => {
//         resolve(rows);
//     });
//     // const row = stmnt.all() as unknown as Note;
//     const note: Note = {
//         id: row.id,
//         owner: row.owner,
//         data: row.data,
//     };
//     console.log("Data: " + row.data);
//     return note;
// }

export async function GetNote(id: number): Promise<Note> {
    const loadDataPromise = new Promise<Note>((resolve, reject) => {
        const query = "SELECT * FROM note WHERE id = 0;";
        db.all<Note>(query, (err: Error|null, rows: Note) => {
          if(err) {
            reject(err);
            return;
          }
          console.log("Rows: " + rows);
          resolve(rows)
        })
      })
      const rows = await loadDataPromise;
      console.log("Data: " + rows);
      return rows;
}