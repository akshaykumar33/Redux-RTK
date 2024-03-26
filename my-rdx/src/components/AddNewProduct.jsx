
import { useAddNewProductMutation } from '../app/service/dummyData';

function AddNewProduct() {
    const[addNewProduct,{data,error,isLoading}]=useAddNewProductMutation();
    
    if(error)return<h1>Error</h1>
    if(isLoading) return <h1>Loading...</h1>

    const handleAddProduct=async ()=>{
        try{

           const newProductData={
            id:1,
            title:"Akp Boy",
            description:"This is me Girls and Boyss"
           }
           await addNewProduct(newProductData)
        }catch(err){
              
            console.error("Error adding new product",err);
        }
       
    }
  return (
    <div>
        <h2>{data?.id}</h2>
        <h2>{data?.title}</h2>
        <h2>{data?.description}</h2>
        <h1>AddNewProduct</h1>
        <button onClick={handleAddProduct} disabled={isLoading}>Add Product</button>
    </div>
  )
}

export default AddNewProduct