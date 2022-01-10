import React from "react";
import { connect } from "react-redux";
import { 
    getUsersByPageNumberAndUsersOnPageFromApiThunkCreator,
    getUsersByPageNumberAndUsersOnPageFromFoundedUsersThunkCreator,
    setPageNumberActionCreator,
    setThemeColorActionCreator, 
    setTotalPagesCountActionCreator, 
    setUsersOnPageActionCreator 
} from "../../redux/users-reducer";
import Header from "./Header";

class HeaderClass extends React.Component {

    getActualUsers = (usersOnPage) => {
    
        this.props.setUsersOnPage(usersOnPage);
        if(this.props.foundedUsers.length > 0 )
        {
            this.refreshPagesCount(this.props.foundedUsers.length, usersOnPage)
            this.props.getUsersByPageNumberAndUsersOnPageFromFoundedUsers(this.props.foundedUsers, 1 , usersOnPage)
        }
        else
        {
            this.refreshPagesCount(this.props.allUsers.length, usersOnPage)
            this.props.getUsersByPageNumberAndUsersOnPageFromApi(1 , usersOnPage)
        } 
    }
    refreshPagesCount = (users, usersOnPage) => {
        let pages = Math.ceil(users / usersOnPage)
        this.props.setTotalPagesCount(pages);
        this.props.setPageNumber(1);
    }

   
    
    render() {
   
        return(
            <Header 
                themeColor={this.props.themeColor}
                clickedUserName={this.props.clickedUserName}

                setThemeColor={this.props.setThemeColor}
                getActualUsers={this.getActualUsers}  
            />
        )

    }
}
    
let mapStateToProps = (state) => {
    return {
        themeColor: state.usersPage.themeColor,
        clickedUserName: state.usersPage.clickedUserName,
        foundedUsers: state.usersPage.foundedUsers,
        allUsers: state.usersPage.allUsers
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setThemeColor: (themeColor) => {dispatch(setThemeColorActionCreator(themeColor))},
        setUsersOnPage: (selectValue) => {dispatch(setUsersOnPageActionCreator(selectValue))},
        getUsersByPageNumberAndUsersOnPageFromFoundedUsers: (foundedUsers, pageNumber, usersOnPage) => 
            {dispatch(getUsersByPageNumberAndUsersOnPageFromFoundedUsersThunkCreator(foundedUsers, pageNumber, usersOnPage))},
        getUsersByPageNumberAndUsersOnPageFromApi: (pageNumber, usersOnPage) => 
            {dispatch(getUsersByPageNumberAndUsersOnPageFromApiThunkCreator(pageNumber, usersOnPage))},
        setPageNumber: (pageNumber) => {dispatch(setPageNumberActionCreator(pageNumber))},
        setTotalPagesCount: (pages) => {dispatch(setTotalPagesCountActionCreator(pages))},
        
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass); 

export default HeaderContainer;
