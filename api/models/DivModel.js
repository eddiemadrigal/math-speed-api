const db = require('../../data/dbConfig');
const knex = require('knex');

module.exports = {
    get,
    add,
}

async function get(api_key) {
    let user = await db('users').where({
        api_key,
        enabled: "true"
    }).select('*').first();
    if (user) {
        return db("div_math_problems");
    } else {
        return "Auth failed";
    }
}

async function add(data) {
    let maxIdQuery = await db("div_math_problems").max('id as maxId').first();
    let updatedData = {
        ...data,
        id: maxIdQuery.maxId + 1
    }
    let [addMathProblem] = await db("div_math_problems").insert(updatedData, "*")
    return addMathProblem;
}