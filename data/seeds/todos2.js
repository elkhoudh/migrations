exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos2")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos2").insert([
        { id: 10, task: "rowValue1", completed: false },
        { id: 11, task: "rowValue2", completed: false },
        { id: 12, task: "rowValue3", completed: false }
      ]);
    });
};
