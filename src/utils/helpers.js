export function commafy(num, delimiter) {
    if (!num) {
        return 0;
    }
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1" + delimiter || ",");
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(delimiter || ".");
}

export function strTrimmer(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
}