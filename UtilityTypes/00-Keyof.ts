type TShirt = {
  white: string;
  black: string;
}

type T = keyof TShirt

function printPoint(t: T) {
  return t
}

printPoint('white')
printPoint('black')
printPoint('yellow')