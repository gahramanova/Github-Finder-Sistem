import Search from "./components/Search"
import Header from "./layout/Header"
import Users from "./components/Users"
import { useEffect, useState } from "react"
import axios from "axios"



const App = () => {
  const [users, setUsers] = useState([])
  const [text, setText] = useState()
  const [alert, setAlert] = useState()

   const searchUser = (comingKeyword)=> {
    axios.get(`https://api.github.com/search/users?q=${comingKeyword}`)
    .then((res)=> {
      if (res.data.items == 0) {
      setText("User not found")
      setAlert("warning")
      } else {
      setUsers(res.data.items)
      };
    })
  }

  return (
    <>
    
    <Header/>
    <Search sendkeyword={searchUser}/>
   <div className="container-fluid my-3 d-flex justify-content-center">
   <div className="col-6 ">
   <div className="mb-3">
              <div class={`alert alert-${alert}`} role="alert">
              {text}
          </div>
        </div>
   </div>
   </div>
    <Users senddata={users}/>
      
    </>
  )
}

export default App

