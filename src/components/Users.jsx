import React from "react";
import SingleUsers from "./SingleUsers";

const Users = ({senddata}) => {
  return (
    <>
      <div className="container ">
        <div className="row g-4">
           {senddata.map(item=>(
            <SingleUsers
            
            title = {item.login}
            img = {item.avatar_url}
            url= {item.html_url}
            />
           ))}
        </div>
      </div>
    </>
  );
};

export default Users;
