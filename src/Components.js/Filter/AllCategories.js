import Filter from "./Filter"
 
const AllCategories = () =>{
    return (<div className="contaimer">
        
        <h1> What kind of food do you like ? </h1> 
     {[ "SEAFOOD", "ITALIAN","APETIZERS", "SALADS", "ALL"]
     
     .map((category,index) => <Filter key ={index} category ={category}/> 

     )}

    
        </div>)
 
}
export default AllCategories