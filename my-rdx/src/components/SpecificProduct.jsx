import {useGetProductByIdQuery} from '../app/service/dummyData'

export default function SpecificProduct() {
    const {isError,data,isLoading}=useGetProductByIdQuery(6);
   
    if(isError){
        return <h1>Ohh mygosh Error!!</h1>
    }
    if(isLoading){
        return <h1>Loading..........</h1>
    }
    
  return (
    <div><h1>{data?.brand}</h1></div>
  )
}
