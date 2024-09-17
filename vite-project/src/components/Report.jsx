import styled  from "styled-components";
import {useState} from "react";
import {StrictMode} from "react";
import Post from "./Post.jsx";
import {createRoot} from "react-dom/client";

let BUTTON=styled.button`
  color: white;
  display: inline-block;
  position: fixed;
  left: 430px;
  top: 240px;
  margin: 0;
  padding: 10px;
  border-radius: 7px;
  border: none;
  height: 100px;
  width: 600px;
  font-family: "Times New Roman";
  font-weight: bolder;
  font-size: larger;
  background-color: #007bff;
  cursor: pointer;
`;

const posthelper=(BUTTON)=>{
  const root10=createRoot(document.getElementById('root10'));
  root10.render(
    <StrictMode>
      <Post></Post>
    </StrictMode>
  )
}

function Report() {
  return (
    <span>
     <form action={"http://localhost:63342/untitled/HackX/vite-project/chatpage.html?_ijt=t2cibb3tvoscd3199o5ll6hv9l"}>
        <BUTTON type={"submit"} onClick={posthelper}>SUBMIT REPORT</BUTTON>
     </form>
    </span>
  )
}

export default Report;

