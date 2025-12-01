  // import { Navbar } from "./conponents/Navbar"
  // import { Button } from "./conponents/Button/Button"
  // import { use, useState } from "react"
  // import Button from 'react-bootstrap/Button';
//   import { Button, Container, Nav, Navbar } from 'react-bootstrap';

//   function App() {
//     // const [count, setcount] = useState(ligth)
//     return (
//       <>
//       <Navbar>
//         <Container>
//       <Navbar.Brand href="#home">E-comerse</Navbar.Brand>
//       <Navbar.Toggle aria-controls='nav'></Navbar.Toggle>
//       <Navbar.Collapse id='nav'>
//         <Nav>
//   <Nav.Link as={Link} href='#home'>Home</Nav.Link>
//   <Nav.Link  as={Link} href='#features'>Features</Nav.Link>
//   <Nav.Link  as={Link} href='#pricing'>Pricing</Nav.Link>
//   {/* <Button onClick={()=>{()}}></Button> */}
// </Nav>
//       </Navbar.Collapse>

//         </Container>
//       </Navbar>
//       </>
//     )
//   }
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbar bg="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">E-commerce</Navbar.Brand>

//           <Navbar.Toggle aria-controls="nav" />

//           <Navbar.Collapse id="nav">
//             <Nav className="me-auto">
//               <Nav.Link  to="/home">Home</Nav.Link>
//               <Nav.Link  to="/features">Features</Nav.Link>
//               <Nav.Link  to="/pricing">Pricing</Nav.Link>
//             </Nav> 
      
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }
// export default App;
  import  Timer  from "./conponents/Timer"

  function App() {
    return (
      <>
      <Timer></Timer>
      <h1>hello</h1>
      </>
    )
  }













  // function App() {
  //  let x=0
  //   const[count,setcount]=useState(x)

    
  //   const [user,setuser]=useState({name:"mohamed",age:19})

  //   const [products,setproducts]=useState([{"title":"apple","price":100},{"title":"orange","price":100},{"title":"banana","price":100}])
  
  //     function changeName(){
  //     setuser({...user,age:user.age+1})
  //   }
  //   function handlelogin(){
  //     alert("login")
  //   }
  //   function handleregister(){
  //     alert("register")
  //   }
  
  //   return (
  //     <>
  //     {/* <Navbar id="1" value="button1"></Navbar>
  //     <Navbar id="2" value="button2"></Navbar>
  //     <Navbar></Navbar> */}

    
  //     {/* {/* <div>{isactive&&<h1>active</h1>}</div> */}
      
  //     <Button handleclick={handlelogin} className="Login"><h1>login</h1></Button>
  //     <Button handleclick={handleregister} className="Register"><h1>register</h1></Button>
  //    <div className="count">
  //       <h1>{count}</h1>
  //      <button onClick={()=>{setcount((count)=>count-1)}}>decrement</button>
  //     <button onClick={()=>{setcount(count+1)}}>increment</button>
  //     </div>
  //    <div>
  //      {/* <h1></h1>
  //      <h1></h1>
  //     <button onClick={}>is active is{isactive}</button> */}
  //     </div>
  //     <div>
  //       <ul>
  //         { products.map((function(item,index){
  //           return<> <li key={index}>{item.title}-{item.price}</li>
  //           <button onClick={function(){
  //           item.price++
  //             setproducts([...products])
  //           }}>+price</button>
  //           </>
  //         }))}
          
  //       </ul>
  //     </div>
  //     </>
  //   )
  // }

export default App
