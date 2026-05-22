class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

function validateAge(age) {
  if (typeof age !== "number")  throw new ValidationError("Age must be a number", "age");
  if (age < 0 || age > 150)    throw new ValidationError("Age out of range", "age");
  return true;
}

try {
  validateAge("old");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Validation failed on '${e.field}': ${e.message}`);
  } else {
    throw e; // re-throw unknown errors
  }
}