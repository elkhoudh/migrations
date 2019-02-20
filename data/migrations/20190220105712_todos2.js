exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", tbl => {
    tbl.increments();
    tbl.string("task").notNullable();
    tbl.boolean("completed").notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("todos");
};
