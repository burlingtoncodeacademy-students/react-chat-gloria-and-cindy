//importing use state and use effect from react
//importing css styles from styles folder
import {useState, useEffect} from "react"
import "../styles/App.css"

//component function
export default function ChatBox(props) {
//usestate to hold the result of the fetch
const [allUserMessages, setAllUserMessages] = useState ([]) 
useEffect (async function fetch(){
    //fetches info from local API route setup on server
    let response = await fetch ("http://localhost:27017/react-chat")
    //convert data to json   
    let responseData = response.json()
    return (responseData)
},[])

//conditionally render the component dependent on submit button
//const [lookChatBox, setLookChatBox] = useState(true);
if (props.lookChatBox === true) {
    return (
     <>
        
        {allUserMessages.map((messages) => {
                  return (
                     key={messages._id} 
                     {messages.postDate} 
                      {messages.user} 
                      {messages.currentRoom}
                      {messages.userMessages}
                  )})
                         
     </>
                 

    )} else {
                return null;
                
   }}


