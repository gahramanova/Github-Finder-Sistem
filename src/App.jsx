import Search from "./components/Search"
import Header from "./layout/Header"
import Users from "./components/Users"
import { useEffect, useState } from "react"
import axios from "axios"



const App = () => {
  const [users, setUsers] = useState([])

   const searchUser = (comingKeyword)=> {
    axios.get(`https://api.github.com/search/users?q=${comingKeyword}`)
    .then(res=>setUsers(res.data.items))
  }

  return (
    <>
    
    <Header/>
    <Search sendkeyword={searchUser}/>
    <Users senddata={users}/>
      
    </>
  )
}

export default App

