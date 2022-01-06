import React from "react";
import { connect } from "react-redux";
import { Api } from "../../api/Api";
import { 
    setActualUsersActionCreator,
    setThemeColorActionCreator, 
    setTotalPagesCountActionCreator, 
    setUsersOnPageActionCreator 
} from "../../redux/users-reducer";
import Header from "./Header";

class HeaderClass extends React.Component {

    getActualUsers = (usersOnPage) => {
  
        return(
            Api
            .getUsersByPageNumber(this.props.pageNumber, usersOnPage)
            .then(data => {
                this.props.setActualUsers(data)
                this.getTotalPagesCount(this.props.allUsers.length, usersOnPage)

            })
        )
    }

    getActualFoundedUsers = (usersOnPage ) =>{
    
        let pageNumber = this.props.pageNumber
        let foundedUsers = this.props.foundedUsers
        let sortedFoundedUsersByUsersOnPage = [];

        if(usersOnPage > foundedUsers.length)
        {
            usersOnPage = foundedUsers.length

            for (let index = ((pageNumber * usersOnPage) - usersOnPage) ; index < (pageNumber * usersOnPage); index++) {
                sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            }
            
        }
        else
        {
            for (let index = ((pageNumber * usersOnPage) - usersOnPage) ; index < (pageNumber * usersOnPage); index++) {
                sortedFoundedUsersByUsersOnPage.push(foundedUsers[index]);   
            }
        }
        this.props.setActualUsers(sortedFoundedUsersByUsersOnPage)
        this.getTotalPagesCount(this.props.foundedUsers.length, usersOnPage)
    }

    getTotalPagesCount = (allUsers, usersOnPage ) => {
      
            let pages = Math.ceil(allUsers / usersOnPage);
            this.props.setTotalPagesCount(pages);
        }
   

    render() {
   
        return(
            <Header 
                themeColor={this.props.themeColor}
                clickedUserName={this.props.clickedUserName}
                foundedUsers={this.props.foundedUsers}

                setThemeColor={this.props.setThemeColor}
                setUsersOnPage={this.props.setUsersOnPage}
                getActualUsers={this.getActualUsers}  
                getActualFoundedUsers={this.getActualFoundedUsers}
            />
        )

    }
}
    
let mapStateToProps = (state) => {
    return {
        themeColor: state.usersPage.themeColor,
        clickedUserName: state.usersPage.clickedUserName,
        usersOnPage: state.usersPage.usersOnPage,
        pageNumber: state.usersPage.pageNumber,
        foundedUsers: state.usersPage.foundedUsers,
        allUsers: state.usersPage.allUsers
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setThemeColor: (themeColor) => {dispatch(setThemeColorActionCreator(themeColor))},
        setUsersOnPage: (selectValue) => {dispatch(setUsersOnPageActionCreator(selectValue))},
        setActualUsers: (data) => {dispatch(setActualUsersActionCreator(data))},
        setTotalPagesCount: (pages) => {dispatch(setTotalPagesCountActionCreator(pages))}
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass); 

export default HeaderContainer;