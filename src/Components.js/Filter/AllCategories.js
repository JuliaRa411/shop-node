import Filter from "./Filter"
 
const AllCategories = () =>{
    return (<div>
        
        <h1> What kid of food do you like ? </h1> 
     {[ "SEAFOOD", "ITALIAN","APETIZERS", "SALADS", "ALL"]
     
     .map((category,index) => <Filter key ={index} category ={category}/> 

     )}

    
        </div>)
 
}
export default AllCategories