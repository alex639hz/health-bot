import * as mongoose from 'mongoose';

export const BotSchema = new mongoose.Schema({
  chatId: {
    type: String,
    required: [true, 'CHAT_ID_IS_BLANK'],
  },
}, {
  versionKey: false,
  timestamps: true,
});
