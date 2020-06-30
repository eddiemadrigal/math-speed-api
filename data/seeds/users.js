const seedLists = [
  {
    id: "fc85a964-eec3-42eb-a076-4d7d2634b321",
    email: "erikamail@mailer1.com",
    password: "$2b$10$gLA8ZFkZxNMsvyDy1MkKYeKALRo/cx7ATw9Bnjvhb37eh3g3Spjqy"
  },
  {
    id: "d2b3833d-08b3-4dd8-96fe-822e3a608d82",
    email: "edmail@mailer1.com",
    password: "$2b$10$gLAEeFkZxNMsvyDy1MkKYeKALRo/cx7ATw9Bnjvhb37eh3g3Spjqy"
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(seedLists);
    });
};