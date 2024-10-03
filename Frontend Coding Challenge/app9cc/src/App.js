
import React from "react";
import './App.css';

import SRoutes from "./SRoutes";

const App = () =>
{


  return(<>
  
     <SRoutes/>
   

  
  </>)
}
export default App;









// import React, { useState , useEffect} from "react";
// import axios from 'axios';
// import './App.css';
// const  App= () =>
// {


//   let [roll, setRoll] = useState();
//   let [name, setName] = useState();

//   let [fee, setFee] = useState();
//   let [message, setMessage] = useState(); 
//   let [users, setUsers] = useState([]);
//   let [student, setStudent] = useState(null);


// const saveStudent = async () => {
  
//   let student = {
//     roll: roll,
//     name: name,
//     fee: fee
//   };

//     let res = await axios.post("http://localhost:9000/saveStudent", student);

//     if (res.status === 201) {
//       setMessage("Student saved successfully!");
//     } else {
//       setMessage("Failed to save the student.");
//     }

// };




//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
  
//       let res = await axios.get("http://localhost:9000/getStudents");
//       if (res.data) { 
//         setUsers(res.data);
        
//       } else {
//         setMessage("Failed to retrieve data.");
//       }
  
//   }




//   const getStudent = async () => {
  
//       let res = await axios.get(`http://localhost:9000/getStud/${roll}`);
//       if (res.status === 200) {
//         setStudent(res.data);
//         setMessage(`Student found: ${res.data.name}, Fee: ${res.data.fee}`);
//       } else {
//         setMessage("Student not found.");
//       }
  
//   };

//   const deleteStudent = async () => {
    
//       let res = await axios.delete(`http://localhost:9000/removeStud/${roll}`);
//       if (res.status === 200) {
//         setMessage("Student removed successfully!");
//       } else {
//         setMessage("Failed to remove the student.");
//       }
 
//   };

//   const updateStudentName = async () => {
  
//       let res = await axios.put(`http://localhost:9000/updateName/${roll}/${name}`);
//       if (res.status === 200) {
//         setMessage("Student name updated successfully!");
//       } else {
//         setMessage("Failed to update the student name.");
//       }
  
//   };




//   return (
//     <div>
//       <h1>Student Management</h1>


//       <div>
//         <h2>Save Student</h2>
//         <input
//           type="text"
//           placeholder="Roll Number"
//           value={roll}
//           onChange={(e) => setRoll(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Fee"
//           value={fee}
//           onChange={(e) => setFee(e.target.value)}
//         />
//         <br />
//         <button onClick={saveStudent}>Save Student</button>
//       </div>

     
//       <div>
        
//         <br />
//         <button onClick={getStudent}>Get Student by id</button>
//         {student && (
//           <div>
//             <h3>Student Found</h3>
//             <p>Roll: {student.roll}</p>
//             <p>Name: {student.name}</p>
//             <p>Fee: {student.fee}</p>
//           </div>
//         )}
//       </div>

      
//       <div>
        
      
//         <button onClick={updateStudentName}>Update Name</button>
//       </div>

//       <div>
        
//         <button onClick={deleteStudent}>Delete Student</button>
//       </div>

      
//       <div>
//         <h2>All Students</h2>
//         {users.length > 0 ? (
//           users.map((temp) => (
//             <h3 key={temp.roll}>
//               Roll: {temp.roll}, Name: {temp.name}, Fee: {temp.fee}
//             </h3>
//           ))
//         ) : (
//           <h3>No Students Data Available</h3>
//         )}
//       </div>

      
//       {message && <h3>{message}</h3>}
//     </div>
//   );
// }

// export default App;

// // import React, { useEffect, useState } from "react";
// // import axios from 'axios';

// // const App = () => {
// //   let [users, setUsers] = useState([]);
// //   let [message, setMessage] = useState(' ');

// //   // Automatically fetch data when component mounts
// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   const getData = async () => {
// //     try {
// //       let res = await axios.get("http://localhost:9000/getStudents");
// //       if (res.data && res.data.length > 0) { // Check if data is returned
// //         setUsers(res.data);
// //         setMessage("Data retrieved successfully!");
// //       } else {
// //         setMessage("No data available.");
// //       }
// //     } catch (error) {
// //       setMessage("Error occurred while fetching data.");
// //     }
// //   };

// //   return (
// //     <>
// //       <h1>Students List</h1>
// //       <p>{message}</p> {/* Show error or success message */}
// //       <button onClick={getData}>Fetch Data</button> {/* Optional: Manual fetch */}
      
// //       {users.length > 0 ? (
// //         users.map((temp) => (
// //           <h2 key={temp.roll}>
// //             {temp.name} - {temp.fee}
// //           </h2>
// //         ))
// //       ) : (
// //         <h3>No Students Data Available</h3>
// //       )}
// //     </>
// //   );
// // };

// // export default App;
