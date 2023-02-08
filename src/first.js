import React from "react";
import { WithRouter } from "./routingWrapper";

class FirstComp extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(<section className="flex flex-col justify-center items-center">
        <div id="logo" className="pt-20 mb-10 mt-4">
            <img src={require("./images/VITTAE.png")} alt="Vittae official logo" className="h-28"/>
        </div>
    
        <div id="image" style={{width: "fit-content"}} className="pt-10 items-center justify-center flex-col flex">
            <img src={require("./images/sampleavatar.png")} alt="Vittae official logo"/>
            <p id="p1" className="text-center text-text_blue mb-6">If we can look at something with words and sentences, explore it. VITTAE X</p>
        </div>
    
        <div id="getstarted" className="mb-12">
            <button id="button" value='./login' onClick={this.props.navigate} className="bg-gradient-to-r text-white font-bold text-xl text-center p-2 from-Vittae_Blue to-Vittae_Red via-Vittae_Violet w-64 h-12 rounded-xl">
                Get Started
            </button>
        </div>
    </section>
    )
    }
}

export default WithRouter(FirstComp)