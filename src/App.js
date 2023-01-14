import React from 'react';
import './style.css';
import TableData from './mainData.json';

export default function App() {
  const data = [...TableData.data];
  const [user, setUser] = React.useState(data);
  const [show, setShow] = React.useState(false);
  function handleUnSort() {
    setShow(!show);
    setUser(data);
  }
  function handleASCSort() {
    setShow(!show);
    user.sort((a, b) => {
      if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
        setUser(user);
        return -1;
      }
    });
  }
  function handleDESESort() {
    setShow(!show);
    user.sort((a, b) => {
      if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
        setUser(user);
        return -1;
      }
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr className="table100-head">
            <th>ID</th>
            <th>
              Frist name
              <svg
                onClick={() => setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              {show && (
                <ul>
                  <li onClick={handleUnSort}>Unsort</li>
                  <li onClick={handleASCSort}>sort by ASC</li>
                  <li onClick={handleDESESort}>sort by DESC</li>
                </ul>
              )}
            </th>
            <th>Last name</th>
            <th>email</th>
            {/* <th>mobile</th> */}
          </tr>
        </thead>
        <tbody>
          {user.map((user, idx) => {
            return (
              <tr key={user.id}>
                <td>{idx + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                {/* <td>{user.mobile}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
