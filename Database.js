const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// this is where the database is created and filler data is entered
const sql = `
CREATE TABLE IF NOT EXISTS ESOtbl (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    Username TEXT,
    Email TEXT,
    Password TEXT,
    Preferences TEXT,
    University TEXT,
    Year INT,
    Team TEXT,
    Games TEXT,
    "T&C" INT
);

INSERT INTO ESOtbl (Username, Email, Password, Preferences, University, Year, Team, Games, "T&C") VALUES ('MRVN', 'Test@gmail.com', '12345678', '11', 'Reading', '1', 'Reading knight', 'Valorant', '1');

INSERT INTO ESOtbl (Username, Email, Password, Preferences, University, Year, Team, Games, "T&C") VALUES ('Tommy_T', 'tommy@gmail.com', 'qwertyuiop', '01', 'Reading', '1', 'Reading knight', 'Valorant', '1');

INSERT INTO ESOtbl (Username, Email, Password, Preferences, University, Year, Team, Games, "T&C") VALUES ('gabel', 'gabel@gmail.com', 'qwerty123', '14', 'Reading', '1', 'Reading Puggers', 'CS2', '1');
`;

const databaseFile = 'App.db';//Names of the database

//Deletes the database for testing purposes
if (fs.existsSync(databaseFile)) {
    fs.unlinkSync(databaseFile);
}

// Connect to the database
const db = new sqlite3.Database(databaseFile);

// Create the tables
db.exec(sql, function(err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Tables created successfully.');
    }

    db.close(); //Closes the database
});