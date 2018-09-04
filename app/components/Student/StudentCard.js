import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = props => {
  const { student } = props;
  return (
    <div className="col-4 my-3">
      <Link to={`/students/${student.id}`}>
        <div className="row">
          <div className="col-5 px-0">
            <img className="img-thumbnail student" src={student.imageUrl} />
          </div>
          <div className="col-7">
            <h6>{student.fullName}</h6>
            <p>
              {student.bending && (
                <img
                  className="bendingSymbol"
                  src={`/img/${student.bending}bending_emblem.png`}
                />
              )}{' '}
              {student.bending}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StudentCard;
