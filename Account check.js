import React, { useState } from 'react';

function YourComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const sqlselect = `SELECT * FROM ESOtbl WHERE Username = '${Username}'`;
        queryDatabase(database_file, sqlselect)
            .then(rows => {
                if (rows.length === 0) {
                    alert("Account not Found Please Check Username and Password");
                } else {
                    const dbPassword = rows[0][2];
                    if (dbPassword === Password) {
                        alert("You have successfully logged in");
                    } else {
                        alert("Incorrect Password");
                    }
                }
            })
            .catch(error => {
                console.error("Error occurred while querying database:", error);
            });
    };
}