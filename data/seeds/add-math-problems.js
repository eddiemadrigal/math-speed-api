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
    right: "2",
    operator: "+",
    answer: "3"
  },{
    id: 3,
    left: "1",
    right: "3",
    operator: "+",
    answer: "4"
  },
];

exports.seed = function (knex) {
  return knex("add_math_problems")
    .del()
    .then(function () {
      return knex("add_math_problems").insert(seedMathProblems);
    });
};