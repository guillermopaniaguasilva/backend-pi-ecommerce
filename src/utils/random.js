const createRandomCode = () => Math.random().toString(36).slice(2);

module.exports = {
  createRandomCode,
};
