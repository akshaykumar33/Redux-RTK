import './App.css'
//import AddNewProduct from './components/AddNewProduct'
// import AllProducts from './components/AllProducts'
//import Counter from './components/Counter'
//import SpecificProduct from './components/SpecificProduct'
// import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct';
function App() {
  

  return (
    <>
      
      <div className="card">
      {/* <Counter/> */}
      {/* <AllProducts/> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct/> */}
      {/* <UpdateProduct productId={2}/> */}
      <DeleteProduct productId={3}/>
      </div>
      
    </>
  )
}

export default App
