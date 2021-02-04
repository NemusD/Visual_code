const db = require('./connection');

const mongoose = require('mongoose');
const { Schema } = mongoose;
const mySchema = new Schema({}, {strict: false});

