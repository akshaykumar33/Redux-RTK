/* eslint-disable react/prop-types */

import { useDeleteProductMutation } from "../app/service/dummyData";

function DeleteProduct({productId}) {
    const[deleteProduct,{data,error,isLoading}]=useDeleteProductMutation();
   
    async function handleDeleteProduct(){
        try{
            await deleteProduct({id:productId})
        }
        catch(err){
         console.error("Error during Delete ",err)
        }
       
    }
    if(isLoading)return<h1>Loading...</h1>
    if(error)return<h1>Error</h1>

  return (
    <div>
        <h1>{data?.title?`${data.title}`+"Successfully Deleted":""}</h1>
        <h1>DeleteProduct</h1>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct