export default function bs_list(haystack: number[], needle: number): boolean {
    let lowest = 0;
    let highest = haystack.length;
    do {
        const middle = Math.floor(lowest + (highest - lowest) / 2);
        const value = haystack[middle];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            highest = middle;
        } else {
            lowest = middle + 1;
        }
    } while (lowest < highest);

    return false;
}
