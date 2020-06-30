const db = require('../../data/dbConfig');
const knex = require('knex');

module.exports = {
    get,
    add,
}

function get() {
    return db("add_math_problems");
}

async function add(data) {
    let maxIdQuery = await db("add_math_problems").max('id as maxId').first();
    let updatedData = {
        ...data,
        id: maxIdQuery.maxId + 1
    }
    let [addMathProblem] = await db("add_math_problems").insert(updatedData, "*")
    return addMathProblem;
}