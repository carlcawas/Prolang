import json
from datetime import datetime, timezone


class SerializableMixin:
    def serialize(self):
        return json.dumps(self.__dict__)

    def deserialize(self, json_text):
        self.__dict__.update(json.loads(json_text))
        return self


class TimestampedMixin:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.created_at = datetime.now(timezone.utc).isoformat()


class User:
    def __init__(self, name):
        self.name = name


class EnhancedUser(SerializableMixin, TimestampedMixin, User):
    pass


u = EnhancedUser("Nina")
print(u.serialize())
