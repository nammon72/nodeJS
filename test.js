const arr = [1, 4, 5, 6, 7];
const len = arr.length;
let count = 0;
for (let i = 0; i <= len; i++) {
  if (arr[i] === arr[i + 1] - 1) {
    console.log("current", arr[i]);
    count++;
    console.log(count);
    //   console.log("previous", arr[i - 1]);
  }
}
