const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    return result * 2;
    console.log(result);
  })
  .then((result) => {
    return result * 2;
    console.log(result);
  })
  .then((result) => {
    console.log(result);
  });

  
