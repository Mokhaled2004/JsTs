function find(array, callback) {
    var low = 0;
    var high = array.length - 1;

    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var midElement = array[mid];
        if (callback(midElement)) {
            return midElement;
        } else if (midElement) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}
