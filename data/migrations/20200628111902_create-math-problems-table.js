
exports.up = function(knex) {
    return knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .createTable("users", (tbl) => {
            tbl
                .uuid("id")
                .notNullable()
                .unique()
                .primary()
                .defaultTo(knex.raw("uuid_generate_v4()"));
            tbl.string("email").notNullable();
            tbl.string("password").notNullable();
            tbl.string("api_key");
            })
        .createTable('track_api', tbl => {
            tbl 
                .string("email");
            tbl
                .string("usage_date");
        })
        .createTable('add_math_problems', tbl => {
            tbl
                .increments();
            tbl
                .string('left')
                .notNullable();
            tbl 
                .string('right')
                .notNullable();
            tbl
                .string('operator')
                .notNullable();            
            tbl 
                .string('answer')
                .notNullable();
        })
        .createTable('sub_math_problems', tbl => {
            tbl
                .increments();
            tbl
                .string('left')
                .notNullable();
            tbl 
                .string('right')
                .notNullable();
            tbl
                .string('operator')
                .notNullable();            
            tbl 
                .string('answer')
                .notNullable();
        })
        .createTable('mul_math_problems', tbl => {
            tbl
                .increments();
            tbl
                .string('left')
                .notNullable();
            tbl 
                .string('right')
                .notNullable();
            tbl
                .string('operator')
                .notNullable();            
            tbl 
                .string('answer')
                .notNullable();
        })
        .createTable('div_math_problems', tbl => {
            tbl
                .increments();
            tbl
                .string('left')
                .notNullable();
            tbl 
                .string('right')
                .notNullable();
            tbl
                .string('operator')
                .notNullable();            
            tbl 
                .string('answer')
                .notNullable();
        })
        .createTable('ran_math_problems', tbl => {
            tbl
                .increments();
            tbl
                .string('left')
                .notNullable();
            tbl 
                .string('right')
                .notNullable();
            tbl
                .string('operator')
                .notNullable();            
            tbl 
                .string('answer')
                .notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('users')
        .dropTableIfExists('add_math_problems')
        .dropTableIfExists('sub_math_problems')
        .dropTableIfExists('mul_math_problems')
        .dropTableIfExists('div_math_problems')
        .dropTableIfExists('ran_math_problems');
};
