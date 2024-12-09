let userData= [
    {
        username:'Emmanuel',
        email:'emmanuel@gmail.com',
    },
    {
        username:'Getange',
        email:'getange@gmail.com',
    }
];

function getUsers() {
    return userData
}

function getUser(username){
    const users = getUsers();
    const user =users.find((user) =>user.username === username);
    return user.email;
}

console.log(getUser('Emmanuel'));
console.log(getUser('Getange'));