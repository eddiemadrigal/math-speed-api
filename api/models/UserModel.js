const db = require('../../data/dbConfig');

module.exports = {
    getUser,
    addUser
}

async function getUser(obj) {
    let user = await db('users').where({
        email: obj.email
    }).select('*').first();
    return user;
}

async function addUser(data) {
    let [user] = await db('users').insert(data, "*");
    return user;
}