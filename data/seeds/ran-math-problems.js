const seedMathProblems = [
  {
    id: 1,
    left: "1",
    right: "1",
    operator: "+",
    answer: "2"
  },
  {
    id: 2,
    left: "1",
    right: "1",
    operator: "-",
    answer: "0"
  },{
    id: 3,
    left: "1",
    right: "1",
    operator: "*",
    answer: "1"
  },{
    id: 4,
    left: "1",
    right: "1",
    operator: "/",
    answer: "1"
  },
];

exports.seed = function (knex) {
  return knex("ran_math_problems")
    .del()
    .then(function () {
      return knex("ran_math_problems").insert(seedMathProblems);
    });
};