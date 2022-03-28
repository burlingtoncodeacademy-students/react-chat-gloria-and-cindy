//needed Imports
import { useState, useEffect } from "react";
import "../styles/App.css";

//---component function
export default function ChatBox(props) {
  //uses state to hold the result of the fetch
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    //fetches information from a local API route set up on the server
    fetch("http://localhost:8000/allentries")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllEntries(json);
      });
  }, []);

  //conditionally renders the component through the boolean of "submittedEntry" state attached to the "submit" button

  return (
    <section id="chat-box">
      {/* table used for chatbox layout */}
      <table>
        {/* CURRENT ROOM HEADING */}
        <thead>
          <tr>
            {/*need useState for room switch {currentRoom}*/}
            <th colspan="4">Lets Type HERE!</th>
          </tr>
        </thead>
        {/* MESSAGES AND USER NAME IN CHATBOX */}
        <tbody colspan="4" height='350px' id="table-body">
          {allEntries.map((entry) => {
            return (
              <tr key={entry._id}>
                <td id="userName">{entry.name}</td>
                <td id="message">{entry.message}</td>
                {""}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <form action={"/create"} method="POST">
                {/* USER NAME FORM */}
                <input type="text" name="name" placeholder="User Name" />
                {/* MESSAGE FORM */}
                <input type="text" name="message" placeholder="Message" />
                <input type="submit" value="Send" />
                <input type="submit" value="Refresh" />
              </form>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
