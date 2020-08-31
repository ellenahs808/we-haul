const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
  // type is vehicle
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  type: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  startAddress: {
    type: String,
    required: true,
  },
  endAddress: {
    type: String,
    required: true,
  },
  startLatLong: {
    type: Array,
    required: true,
  },
  endLatLong: {
    type: Array,
    required: true,
  },

  requester: {
    type: Schema.Types.Mixed,
    ref: "users",
    required: true,
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: "users",
    default: null,
  },
  status: {
    type: Number,
    default: 0,
    enum: [0, 1, 2],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const Job = mongoose.model('Job', JobSchema);
module.exports = Job;