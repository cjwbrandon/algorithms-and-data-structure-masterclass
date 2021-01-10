function countDown(num) {
  // Base Case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;

  // Invokes itself
  countDown(num);
}

countDown(10);
