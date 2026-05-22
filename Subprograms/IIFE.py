def _build_result():
    private_var = "I am private"

    def get_var():
        return private_var

    def set_var(val):
        nonlocal private_var
        private_var = val

    return {"get_var": get_var, "set_var": set_var}


result = _build_result()
print(result["get_var"]())
result["set_var"]("Updated")
print(result["get_var"]())
