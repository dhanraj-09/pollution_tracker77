import styled  from "styled-components";

const BUTTON=styled.button`
  position: relative;
  left: 550px;
  top: 400px;
  margin: 0;
  padding: 10px;
  border-radius: 7px;
  border: none;
  height: 100px;
  width: 350px;
  font-family: "sans-serif";
  font-weight: bolder;
  font-size: larger;
  background-color: #007bff;
  cursor: pointer;
`;

function Seekinfo() {
  return (
    <span>
      <BUTTON>SEEK HELP</BUTTON>
    </span>
  )
}

export default Seekinfo;

