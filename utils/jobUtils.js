function isJobValid(job) {
    if (job.name == '') {
        return false;
    }
    if (job.color == null) {
        return false;
    }
    if (job.pay == '') {
        return false;
    }
    if (job.currency == null) {
        return false;
    }

    return true;
}

export { isJobValid };
