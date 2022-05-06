import * as mongoose from 'mongoose';

export const DocumentSchema = new mongoose.Schema({
  link: String,
  type: String,
  providerID: String,
});
