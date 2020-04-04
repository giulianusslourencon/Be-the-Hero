exports.up = function (knex) {
    return knex.schema.createTable('incidents', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ond_id').notNullable();
        table.foreign('ond_id').references('id').inTable('ongs');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents');
};
