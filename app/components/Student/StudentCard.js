import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = props => {
  const { student } = props;
  return (
    <div className="col-4 my-3">
      <Link to={`/students/${student.id}`}>
        <div className="row">
          <div className="col-4">
            <img className="img-thumbnail student" src={student.imageUrl} />
          </div>
          <div className="col-8 align-content-center">
            <h6>{student.fullName}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StudentCard;
