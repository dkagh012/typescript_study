function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 를 명시적으로 지정 할 수 있지만 타입 스크립트는 이 코드를 추론 할 수 있는 차이가 있다

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));
