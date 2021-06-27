const applyDiscount = (value, discount) => {
    if (typeof (value) != "number" || typeof (discount) != "number") return false
    if (discount >= value) return 0
    if (discount < 0 || value < 0) return 0

    return value - discount
}

module.exports = applyDiscount