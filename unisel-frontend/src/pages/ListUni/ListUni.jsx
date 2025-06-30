import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './ListUni.css';


const ListUni = () => {
  const [list, setList] = useState([]);
  const fetchList = async()=>{
    const response = await axios.get('http://localhost:8848/unisel/university');
    console.log(response.data);
    if(response.status === 200){
      setList(response.data.data);
    }else{
      toast.error("Error occured while fetching data");
    }
    
  }

  useState(()=>{
    fetchList();
  }, []);

  return (
<div className="table-responsive">
  <table className="table table-striped table-hover table-bordered align-middle">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Address</th>
        <th>Tuition Fee</th>
        <th>Ranking</th>
        <th>Deadline</th>
        <th>Cost of Attendance</th>
        <th>Scholarship</th>
        <th>Min GPA</th>
        <th>Min IELTS</th>
        <th>Weather</th>
        <th>Acceptance Rate</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.tuitionFee}</td>
            <td>{item.ranking}</td>
            <td>{item.deadline}</td>
            <td>{item.costOfAttendance}</td>
            <td>{item.scholarshipAvailable ? 'Yes' : 'No'}</td>
            <td>{item.minGPA}</td>
            <td>{item.minIelts}</td>
            <td>{item.weather}</td>
            <td>{item.acceptanceRate}</td>
            <td> <i className='bi bi-trash' style={{ cursor: 'pointer' }}  onClick={()=>handleDelete(item.id)}></i></td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>

  )
}

export default ListUni;