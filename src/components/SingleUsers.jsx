import React from "react";

const SingleUsers = ({title,img,url}) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card">
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a href={url} className="btn btn-dark" target="_blank">
              Go profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUsers;
