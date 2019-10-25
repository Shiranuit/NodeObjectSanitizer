function sanitizeObject(object) {
  return Object.setPrototypeOf(object, null);
}

module.exports = sanitizeObject;
