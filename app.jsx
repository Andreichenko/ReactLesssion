function Hero() {
   return(
       <div className="container">
           <img src="https://facebook.github.io/img.svg"/>
           <h1>React</h1>
           <p>ReactJS is good</p>

       </div>
   )
}




    ReactDOM.render(<Hero />, document.getElementById('root'));