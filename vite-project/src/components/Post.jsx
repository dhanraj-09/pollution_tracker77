import styled from "styled-components";
import {useState} from "react";

function Post()
{

  const TEXTAREA=styled.textarea`
  width: 500px`;
  const BUTTON=styled.button`
  border-radius: 10px;
    font-size: large;

  `;
  return(
    <div>
      <h1>DESCRIBE THE DISASTER</h1>
      <TEXTAREA rows={"10"}></TEXTAREA>
      <div>
        <BUTTON>submit</BUTTON>
      </div>
    </div>
  )
}


export default Post;
