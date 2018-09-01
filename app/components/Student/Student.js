import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudent } from '../../reducers/student';
import CampusCard from '../Campus/CampusCard';

class Student extends Component {
  componentDidMount() {
    const { studentId } = this.props.match.params;
    this.props.getStudent(studentId);
  }

  render() {
    const { student } = this.props;
    return (
      <div className="row my-4">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <img className="img" src={student.imageUrl} />
            </div>
            <div className="col-6">
              <h1>{student.fullName}</h1>
              <p>Email: {student.email}</p>
              <p>GPA: {student.gpa && student.gpa.toFixed(1)}</p>
            </div>
          </div>
        </div>
        <div className="col-12 my-4">
          <h4>Campus</h4>
          <div className="row">
            {student.campus ? (
              <CampusCard campus={student.campus} />
            ) : (
              <div className="col-12">
                <p>There are no students enrolled at this student</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  student: state.student,
});
const mapDispatch = dispatch => ({
  getStudent: campusId => dispatch(getStudent(campusId)),
});

export default connect(
  mapState,
  mapDispatch
)(Student);
