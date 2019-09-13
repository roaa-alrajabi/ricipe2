import React from 'react';


const SearchBar =(props)=> (

<div >
    <h3 style={{fontFamily:'Amaranth'}}>
    
    <img style={{maxWidth:'100px', maxHeight:'100px', textAlign: "center"}} src={require('./Assests/diet.svg')}></img>
    Find more recipe
    </h3>
        <form  onSubmit={props.get} style={{fontFamily:'Amaranth'}}> 
        <input style={{border:"2px solid",borderRadius:"5px", width:"30%",marginleft:"30px"}} type="text" name="item" />
      
        <button style={{border:"2px solid green",borderRadius:"5px" ,width:'5%',backgroundColor:'#e6ffb3'}} >Search</button>
         </form>

</div>
    
)

export default SearchBar;
