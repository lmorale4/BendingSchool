import React from 'react';
import { connect } from 'react-redux';
import StudentCard from './StudentCard';

const StudentList = props => {
  const { students } = props;
  return (
    <div className="row">
      <h2>All Students</h2>
      <div className="row">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

const mapState = state => ({
  students: state.students,
});

export default connect(mapState)(StudentList);
