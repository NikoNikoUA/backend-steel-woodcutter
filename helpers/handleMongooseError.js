const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === "MongooseServerError" && code === 11000 ? 409 : 400;
  next();
};

export default handleMongooseError;
