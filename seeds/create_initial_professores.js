/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('professores').del()
  await knex('professores').insert([
    {nome: 'Chico', email: 'chico@gmail.com', telefone:'(84)999998888', nascimento:'1980-02-20'},
    {nome: 'Bode', email: 'bode@gmail.com', telefone:'(84)988889999', nascimento:'1988-11-13'},
    {nome: 'Jaime', email: 'jaime@gmail.com', telefone:'(84)988887777', nascimento:'1977-04-01'},
  ]);
};