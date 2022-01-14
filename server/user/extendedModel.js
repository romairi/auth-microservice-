module.exports = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
    default: "not specified",
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  languages: [
    {
      type: String,
      required: false,
    },
  ],
  education: [
    {
      type: String,
      required: false,
    },
  ],
};
