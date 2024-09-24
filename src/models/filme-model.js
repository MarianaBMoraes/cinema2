import db from "../config/db.js";

const filmeSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  ano: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    required: true
  },
});



