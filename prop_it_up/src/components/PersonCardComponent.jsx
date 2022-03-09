// import React, {Component} from "react";

// class PersonCardComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.propLastName1} {this.props.propFirstName1} 
//                 {this.props.propLastName2} {this.props.propFirstName2} 
//                 {this.props.propLastName3} {this.props.propFirstName3} 
//                 {this.props.propLastName4} {this.props.propFirstName4}
//                 </h2>
//                 <p>{this.props.propAge1}{this.props.propAge2}{this.props.propAge3}{this.props.propAge4}</p>
//                 <p>{this.props.propHairColor1}
//                 {this.props.propHairColor2}
//                 {this.props.propHairColor3}
//                 {this.props.propHairColor4}
//                 </p>
//             </div>

//         );
//     }
// }
// export default PersonCardComponent;




// platform solution with personal mods to now incorporate birthday button//


import React, { Component } from 'react';

class PersonCardComponent extends Component {
    constructor(props){
        super(props);
        this.state= {
            age: this.props.age
        }
    }

    buttonClick = () =>{
        this.setState({age: this.state.age+1})
    }
    render() {
        const {firstName, lastName, hairColor} = this.props
        
        return (

            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.buttonClick}>
                    {firstName}'s Birthday button!
                </button>
            </div>

        );

    }
}

export default PersonCardComponent;