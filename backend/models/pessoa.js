const mongoose = require('mongoose');

const pessoaSchema = mongoose.Schema({
  nome: {type: String, required: true},
  telefone: {type: String, required: false, default: '00000000'},
  email: {type: String, required: true},
  peso: {type: String, required: true},
  celular: {type: String, required: true},
  endereco: {type: String, required: true},
  logradouro: {type: String, required: true},
  numero: {type: String, required: true},
  complemento: {type: String, required: true},
  cep: {type: String, required: true},
  bairro: {type: String, required: true},
  cidade: {type: String, required: true},
  estado: {type: String, required: true}
});

module.exports = mongoose.model('Pessoa', pessoaSchema);
