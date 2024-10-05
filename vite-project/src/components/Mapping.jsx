import styled from "styled-components";
import "./mappingstyle.css"
import aqi_index from "../assets/aqi_index.jpg"
import Searchbar from "./Searchbar.jsx";
import SearchResult from "./SearchResult.jsx";
function Mapping()
{
    const DIV=styled.div``;
   const IMG=styled.img``;
   const BUTTON=styled.button``;
    const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

    return(
        <>
            <DIV className={"block"}>
                <DIV>
                    <IMG src={aqi_index}>

                    </IMG>
                        <BUTTON className={"button"} id={"button1"}></BUTTON>
                        <Searchbar placeholder={"fruits"} data={data}></Searchbar>
                </DIV>
            </DIV>
            <DIV className={"block"}>
                <DIV>

                </DIV>
            </DIV>
        </>
    )
}

export default Mapping;


































