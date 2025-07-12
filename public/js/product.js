const onSubmitHandler = (event) => {
  event.preventDefault();
  console.log("Submit function called");
  const product = event.target.productName.value;

  const obj = {
    productName: product,
  };

  axios.post("http://localhost:4000" + "/api/products", obj).then((res) => {
    console.log("value returned :", res.data.value);
  });
};
