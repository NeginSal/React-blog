const Home = () => {
   const handleClick = () => {
      console.log('hello')
   }
   const handleClickagain = (name ,e) => {
      console.log('hello' + name , e.target)
   }
    return (
        <div className="home">
           <h2> HomePage</h2>
           <button onClick={handleClick}>Click me</button>
           <button onClick={(e)=>handleClickagain('negin',e)}>Click me again</button>
        </div>
     );
}

export default Home;