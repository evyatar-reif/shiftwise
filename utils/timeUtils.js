function getCurrent() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const hh = String(today.getHours());
    const mm = String(today.getMinutes());

    const date = MM + '/' + dd + '/' + yyyy;
    const time =
        (hh.length == 1 ? '0' + hh : hh) +
        ':' +
        (mm.length == 1 ? '0' + mm : mm);
    return {
        date: date,
        time: time,
    };
}

function parseTime(date) {
    const hh = String(date.getHours());
    const mm = String(date.getMinutes());

    const time =
        (hh.length == 1 ? '0' + hh : hh) +
        ':' +
        (mm.length == 1 ? '0' + mm : mm);
    return time;
}

function parseDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const MM = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();

    const resultDate = MM + '/' + dd + '/' + yyyy;
    return resultDate;
}

export { getCurrent, parseTime, parseDate };
