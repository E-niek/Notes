CREATE TABLE IF NOT EXISTS notes(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, user ID INT, created DATETIME DEFAULT CURRENT_TIMESTAMP, title TEXT, text LONGTEXT);