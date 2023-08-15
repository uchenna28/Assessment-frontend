import { React, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [surName, setSurName] = useState("");
  const [student, setStudent] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [teacherNum, setTeacherNum] = useState();
  const [studentNum, setStudentNum] = useState();
  const [title, setTitle] = useState("");
  const [nationId, setNationId] = useState();
  const [salary, setSalary] = useState();

const titleData = [{ name: "Mr" }, { name: "Mrs"} , {name:"Prof"},{name:"Dr"}];
  const studentTeacherData = [{ name: "Teacher" }, { name: "Student" }];

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleStudent(e) {
    setStudent(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student === "Teacher") {
      const user = {
        title,
        nationId,
        name,
        surName,
        dateOfBirth,
        teacherNum,
        salary,
      };
    } else {
      const user = {
        nationId,
        name,
        surName,
        dateOfBirth,
        studentNum,
      };;
    }

    // axios
    //   .post(`${server}/user/create-user`, user)
    //   .then((res) => {
    //     toast.success(res.data.message);
    //     setName("");
    //     setTeacherNum();
    //     setTitle("");
    //     setSalary();
    //     setSurName();
    //     setDob(""),
    //     setNationId()
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message);
    //   });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center  sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Register as a new user
        </h2>
      </div>
      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="w-full pb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Are you a Teacher or Students?
              </label>

              <select
                name=""
                id=""
                value={student}
                onChange={handleStudent}
                className="w-[95%] border h-[40px] rounded-[5px]"
              >
                <option>Choose your title</option>
                {studentTeacherData &&
                  studentTeacherData.map((item) => (
                    <option
                      className="block pb-2"
                      key={item.name}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            {student === "Teacher" ? (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setSurName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="w-full pb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Choose your title
              </label>

              <select
                name=""
                id=""
                value={title}
                onChange={handleTitle}
                className="w-[95%] border h-[40px] rounded-[5px]"
              >
                <option>Choose your title</option>
                {titleData &&
                  titleData.map((item) => (
                    <option
                      className="block pb-2"
                      key={item.name}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    National ID Number
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="text"
                      required
                      value={nationId}
                      onChange={(e) => setNationId(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <div className="">
                    <input
                      type="date"
                      name="text"
                      required
                      min="2023-08-13"
                      max="2001-01-01"
                      value={dateOfBirth}
                      onChange={(e) => setDob(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teacher Number
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="text"
                      required
                      value={teacherNum}
                      onChange={(e) => setTeacherNum(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Salary
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="text"
                      required
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setSurName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
               
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    National ID Number
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="text"
                      required
                      value={nationId}
                      onChange={(e) => setNationId(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <div className="">
                    <input
                      type="date"
                      name="text"
                      required
                      min="2023-08-13"
                      max="2001-01-01"
                      value={dateOfBirth}
                      onChange={(e) => setDob(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Number
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="text"
                      required
                      value={studentNum}
                      onChange={(e) => setStudentNum(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
