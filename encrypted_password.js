const readline = require('readline');

function encrypted_password() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a password: ", (password) => {
        password = password.replace(/e/g, "3");
        password = password.replace(/4/g, "a");
        password = password.replace(/b/g, "1");
        password = password.replace(/c/g, "6");
        password = password.replace(/ /g, "*");
        console.log(password);
        rl.close();
    });
}

encrypted_password();
