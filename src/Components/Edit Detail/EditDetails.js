import React from "react";
import { useState } from "react";
import "./EditDetails.css";
const EditDetails = () => {
  const formData = JSON.parse(localStorage.getItem("savedData")) || [];
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  const handleEditClick = (index) => {
    setEditId(index);
    // localStorage.setItem("savedData", JSON.stringify(data));
  };
  const handleUpdateClick = (index, newData) => {
    const updatedData = formData.map((ele) => {
      if (ele.index === index) {
        return { ...ele, ...newData };
      }
      // localStorage.setItem("savedData", JSON.stringify(ele));
      return ele;
    });
    setData(updatedData);
    // localStorage.remove("savedData")

    // localStorage.setItem("savedData", JSON.stringify(updatedData))

    // formData.push(newData);
    setEditId(null);
    
  };

  const handleExitEditMode = () => {
    setEditId(null);
  };
  const handleDeleteData = (index, e) => {
    formData.splice(index, 1);
    localStorage.setItem("savedData", JSON.stringify(formData));
    window.location.reload()
  };

  return (
    <div>
      <div style={{ position: "relative", margin: "1rem 0rem" }}>
        <h1>Edit Details</h1>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Email ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {/* {ele.index}</td> */}
                      {/* <td> */}
                      <tr>
                        <input
                          type="text"
                          defaultValue={ele.name}
                          onChange={(e) =>
                            setData((prevState) =>
                              prevState.map((ele) =>
                                ele.index === ele.index
                                  ? { ...ele, name: e.target.value }
                                  : ele
                              )
                            )
                          }
                        />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        {" "}
                        <input
                          type="text"
                          defaultValue={ele.dob}
                          onChange={(e) =>
                            setData((prevState) =>
                              prevState.map((ele) =>
                                ele.index === ele.index
                                  ? { ...ele, name: e.target.value }
                                  : ele
                              )
                            )
                          }
                        />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        {" "}
                        <input
                          type="text"
                          defaultValue={ele.phone}
                          onChange={(e) =>
                            setData((prevState) =>
                              prevState.map((ele) =>
                                ele.index === ele.index
                                  ? { ...ele, name: e.target.value }
                                  : ele
                              )
                            )
                          }
                        />
                      </tr>
                    </td>
                    <td>
                      <tr>
                        <input
                          type="text"
                          defaultValue={ele.email}
                          onChange={(e) =>
                            setData((prevState) =>
                              prevState.map((ele) =>
                                ele.index === ele.index
                                  ? { ...ele, name: e.target.value }
                                  : ele
                              )
                            )
                          }
                        />
                      </tr>
                    </td>
                    <td>
                      {editId === ele.id ? (
                        <button onClick={()=>handleUpdateClick(index)}>Update</button>
                      ) : (
                        <button onClick={() => handleEditClick(ele.id)}>
                          Edit
                        </button>
                      )}
                      <button onClick={() => handleDeleteData(index)}>
                        Delete 
                      </button>
                    </td>
                    {/* Delete
                      </button> */}
                    {/* </td> */}
                    //{" "}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
