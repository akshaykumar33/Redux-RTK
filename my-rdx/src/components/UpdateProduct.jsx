/* eslint-disable react/prop-types */
import {useUpdateProductMutation} from '../app/service/dummyData'

function UpdateProduct({productId}) {
    const [updateProduct,{data,error,isLoading}]=useUpdateProductMutation();

    if(isLoading) return<h1>Loading...</h1>
    if(error) return<h1>Error...</h1>

    async function handleUpdateProduct(){
   try{
   const updatedProduct={
  title:"updated Product"
   }
await updateProduct({id:productId,updatedProduct:updatedProduct})
   }catch(err){
    console.error("Error for update",err)
   }
    }
  return (
    <div>
        <h1>{data?.title}</h1>
        <h1>UpdateProduct</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>    
    </div>
  )
}

export default UpdateProduct