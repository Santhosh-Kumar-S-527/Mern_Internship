function App() {
  const productList = [
    { name: "Laptop", price: 55000, description: "High performance"},
    { name: "Mobile", price: 25000, description: "Latest smartphone"}
    ];
  return (
    <>
    <h1>Product List: </h1>
    {
      productList.map((item, index) => (<div key = {index}><h2>{item.name}</h2><p>Price: &#8377;{item.price}</p><p>{item.description}</p><hr/></div>))
    }
    </>
  )
}
export default App