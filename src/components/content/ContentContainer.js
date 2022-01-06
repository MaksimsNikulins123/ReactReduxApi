import React from "react";
import { connect } from "react-redux";
import Content from "./Content";

class ContentClass extends React.Component {


    render() {
   
        return(
            <Content 
                themeColor={this.props.themeColor}
            />
        ) 
    }

}

let mapStateToProps = (state) => {
    return {
        themeColor: state.usersPage.themeColor,
    }
};


const ContentContainer = connect(mapStateToProps, {})(ContentClass);

export default ContentContainer;