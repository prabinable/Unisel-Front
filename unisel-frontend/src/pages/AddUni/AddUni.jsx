import {useState } from "react";
import { addUniversity } from "../../services/uniselService";
import { toast } from "react-toastify";

const AddUni = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    tuitionFee: "",
    ranking: "",
    deadline: "",
    costOfAttendance: "",
    scholarshipAvailable: "",
    minGPA: "",
    minIelts: "",
    weather: "",
    acceptanceRate: "",
  });


  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    
  e.preventDefault();

  try {
    await addUniversity(data);
    toast.success("Added Successfully!");
     setData({
        name: '',
        address: '',
        tuitionFee: '',
        ranking: '',
        deadline: '',
        costOfAttendance: '',
        scholarshipAvailable: '',
        minGPA: '',
        minIelts: '',
        weather: '',
        acceptanceRate: ''
      }
    );
  } catch (error) {
    toast.error("Error occured!")
  }
  
};


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">University Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    University Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter university name"
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter address"
                    onChange={onChangeHandler}
                    value={data.address}
                    name="address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tuitionFee" className="form-label">
                    Tuition Fee
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="tuitionFee"
                    placeholder="Enter tuition fee"
                    onChange={onChangeHandler}
                    value={data.tuitionFee}
                    name="tuitionFee"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ranking" className="form-label">
                    Ranking
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ranking"
                    placeholder="Enter ranking"
                    onChange={onChangeHandler}
                    value={data.ranking}
                    name="ranking"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="deadline" className="form-label">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="deadline"
                    onChange={onChangeHandler}
                    value={data.deadline}
                    name="deadline"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="costOfAttendance" className="form-label">
                    Cost of Attendance
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="costOfAttendance"
                    placeholder="Enter cost of attendance"
                    onChange={onChangeHandler}
                    value={data.costOfAttendance}
                    name="costOfAttendance"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Scholarship Available</label>
                  <select
                    name="scholarshipAvailable"
                    className="form-select"
                    id="scholarshipAvailable"
                    onChange={onChangeHandler}
                    value={data.scholarshipAvailable}
                  >
                    <option value="">Select...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="minGPA" className="form-label">
                    Minimum GPA
                  </label>
                  <input
                    name="minGPA"
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="minGPA"
                    placeholder="0.0 - 4.0"
                    onChange={onChangeHandler}
                    value={data.minGPA}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="minIelts" className="form-label">
                    Minimum IELTS
                  </label>
                  <input
                    name="minIelts"
                    type="number"
                    step="0.1"
                    className="form-control"
                    id="minIelts"
                    placeholder="0.0 - 9.0"
                    onChange={onChangeHandler}
                    value={data.minIelts}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="weather" className="form-label">
                    Weather
                  </label>
                  <input
                    name="weather"
                    type="text"
                    className="form-control"
                    id="weather"
                    placeholder="E.g., Cold, Rainy, Moderate"
                    onChange={onChangeHandler}
                    value={data.weather}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="acceptanceRate" className="form-label">
                    Acceptance Rate (%)
                  </label>
                  <input
                    name="acceptanceRate"
                    type="number"
                    step="0.1"
                    className="form-control"
                    id="acceptanceRate"
                    placeholder="0 - 100"
                    onChange={onChangeHandler}
                    value={data.acceptanceRate}
                  />
                  
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUni;
