import React, { Component } from "react";

class PersonCardComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.propLastName1} {this.props.propFirstName1} </h2>
                <p>{this.props.propAge1}</p>
                <p>{this.props.propHairColor1}</p>
                <div>
                    <h2>{this.props.propLastName2} {this.props.propFirstName2} </h2>
                    <p>{this.props.propAge2}</p>
                    <p>{this.props.propHairColor2}</p>
                </div>
                <div>
                    <h2>{this.props.propLastName3} {this.props.propFirstName3} </h2>
                    <p>{this.props.propAge3}</p>
                    <p>{this.props.propHairColor3}</p>
                </div>
                <div>
                    <h2>{this.props.propLastName4} {this.props.propFirstName4} </h2>
                    <p>{this.props.propAge4}</p>
                    <p>{this.props.propHairColor4}</p>
                </div>
            </div>

        );
    }
}
export default PersonCardComponent