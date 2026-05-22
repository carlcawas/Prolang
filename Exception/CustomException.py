class ValidationError(Exception):
    def __init__(self, message, field):
        super().__init__(message)
        self.field = field


class NetworkError(Exception):
    def __init__(self, message, status_code):
        super().__init__(message)
        self.status_code = status_code


def validate_age(age):
    if not isinstance(age, (int, float)):
        raise ValidationError("Age must be a number", "age")
    if age < 0 or age > 150:
        raise ValidationError("Age out of range", "age")
    return True


try:
    validate_age("old")
except Exception as e:
    if isinstance(e, ValidationError):
        print(f"Validation failed on '{e.field}': {e}")
    else:
        raise
