const seedMathProblems = [
  {
    id: 1,
    left: "1",
    right: "1",
    operator: "-",
    answer: "0"
  },
  {
    id: 2,
    left: "2",
    right: "1",
    operator: "-",
    answer: "1"
  },{
    id: 3,
    left: "3",
    right: "1",
    operator: "-",
    answer: "2"
  },
];

exports.seed = function (knex) {
  return knex("sub_math_problems")
    .del()
    .then(function () {
      return knex("sub_math_problems").insert(seedMathProblems);
    });
};