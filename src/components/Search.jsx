import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Search = ({sendkeyword, title}) => {


  const [keyword, setKeyword] = useState("")
  const [text, setText] = useState("")
  const [alert, setAlert] = useState("")
  const formSubmit = (e) => {
    e.preventDefault();
    sendkeyword(keyword)
   
  }


  return (
    <>

     <form onSubmit={formSubmit} className='container-fluid my-3 d-flex justify-content-center'>
    <div className='col-6 '>
    <div className="input-group mb-3">
            <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Search username" />
            <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
        </div>
    </div>
     </form>


    </>
  )
}

export default Search