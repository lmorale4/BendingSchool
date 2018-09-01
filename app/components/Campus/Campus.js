import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampus } from '../../reducers/campus';
import StudentCard from '../Student/StudentCard';

class Campus extends Component {
  componentDidMount() {
    const { campusId } = this.props.match.params;
    this.props.getCampus(campusId);
  }
  render() {
    const { campus } = this.props;
    return (
      <div className="row mt-4">
        <div className="col-12">
          <div className="row">
            <div className="col-5">
              <img className="img" src={campus.imageUrl} />
            </div>
            <div className="col-7">
              <h1>{campus.name}</h1>
              <p>Address: {campus.address}</p>
              <p>Description: {campus.description}</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h4>Students</h4>
          <div className="row">
            {campus.students && campus.students.length ? (
              campus.students.map(student => (
                <StudentCard key={student.id} student={student} />
              ))
            ) : (
              <div className="col-12">
                <p>There are no students enrolled at this campus</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  campus: state.campus,
});

const mapDispatch = dispatch => ({
  getCampus: campusId => dispatch(getCampus(campusId)),
});
export default connect(
  mapState,
  mapDispatch
)(Campus);
