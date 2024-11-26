import React, { useEffect } from 'react'

function Popular() {

    useEffect(()=>{
        getPopular();
    },[])
    const getPopular =async ()=> {
      const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=caeabd79cbf840618280bad7094b0029`);
      const data = await api.json();
      console.log(data)
      
    }
  
    return (
    
    <div>Popular</div>
  )
}

export default Popular