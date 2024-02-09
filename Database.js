// Require necessary modules
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// Database file name
const databaseFile = 'SES.db';

// SQL commands for table creation and data insertion
const sql = `
CREATE TABLE IF NOT EXISTS ESOtbl (
    UserID INTEGER PRIMARY KEY,
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

// Delete the database file if it exists
if (fs.existsSync(databaseFile)) {
    fs.unlinkSync(databaseFile);
}

// Connect to the database
const db = new sqlite3.Database(databaseFile, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error opening database connection:', err.message);
    } else {
        console.log('Connected to the database.');

        // Execute SQL commands
        db.exec(sql, function(err) {
            if (err) {
                console.error('Error executing SQL commands:', err.message);
            } else {
                console.log('Tables created and data inserted successfully.');
            }

            // Close the database connection
            db.close((err) => {
                if (err) {
                    console.error('Error closing database connection:', err.message);
                } else {
                    console.log('Database connection closed.');
                }
            });
        });
    }
});
