const main = (input) => {
  const [A, B, C, D] = input.split(" ").map(Number);

  if (A * 60 + B <= C * 60 + D) {
    console.log("Takahashi");
  } else {
    console.log("Aoki");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
