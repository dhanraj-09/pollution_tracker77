import styled  from "styled-components";
function Rough()
{
  const TEXTAREA=styled.textarea`
    padding: 0;
    border: 1px solid #1f43be;
    height: 200px;
    width: 500px;
  `;
  return(
    <div>
      <div className={"ABC"}>
        <LABEL className={"form-label"}>Example textArea</LABEL>
        <TEXTAREA className={"form-control"} id={"mybox"} rows={"1"}></TEXTAREA>
      </div>
    </div>
  )
}
 export default Rough;
