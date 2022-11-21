function isShiftValid(shift) {
    if (shift.startTime == null) {
        return false;
    }
    if (shift.endTime == null) {
        return false;
    }
    if (shift.date == null) {
        return false;
    }
    if (shift.job == null) {
        return false;
    }
    if (shift.multiplier == null) {
        return false;
    }

    return true;
}

function calcLengthAndPay(shift) {
    return { pay: 0, length: 2 };
}

export { isShiftValid, calcLengthAndPay };
