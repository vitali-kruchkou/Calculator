export function findFactorial(number) {
    if (number == 0 || number == 1) {
      return 1;
    } else {
      return number * findFactorial(number - 1);
    }
}
