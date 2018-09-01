import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = props => {
  const { campus } = props;
  return (
    <div className="col-4 my-2">
      <Link to={`/campuses/${campus.id}`}>
        <div className="card">
          <img
            className="card-img-top img-thumbnail"
            src={campus.imageUrl || '/img/defaultCampus.jpg'}
          />
          <div className="card-body">
            <h6 className="card-title">{campus.name}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CampusCard;
