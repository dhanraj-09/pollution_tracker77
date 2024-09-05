import styled  from "styled-components";


const BUTTON=styled.button`
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
  font-family: "sans-serif";
  font-weight: bolder;
  font-size: larger;
  background-color: #007bff;
  cursor: pointer;
`;

function Report() {
  return (
    <span>
      <BUTTON>SUBMIT REPORT</BUTTON>
    </span>
  )
}

export default Report;

