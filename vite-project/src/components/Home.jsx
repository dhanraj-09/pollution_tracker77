import "./Homestyle.css"
import free from "../assets/free.jpg"
import free1 from "../assets/free1.png"
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import _gsap from "gsap/gsap-core";
gsap.registerPlugin(CSSRulePlugin);


function Home()
{

    const IMG=styled.img``;
    const VIDEO=styled.video``;

    const SOURCE=styled.source``;
    return (
        <>
            <div id={"block1"}>
                <nav id={"nav"}>
                    <IMG src={free1}>
                    </IMG>
                    <button>HOME</button>
                    <button2>Data</button2>
                    <button3>About</button3>
                    <button4>Contact Us</button4>
                </nav>
                <div className={"video container"}><VIDEO width={"750px"} height={"500px"} autoPlay={true} loop={true}>
                    <SOURCE src={video2} type={"video/mp4"}></SOURCE>
                </VIDEO>
                    <div className={"header-overlay"}>
                        <h1>KNOW.YOUR.AIR</h1>
                        <h2>WELCOME TO BREATHE SAFE</h2>
                        <p>"Tracking Air Quality for a Healthier you"</p>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Home