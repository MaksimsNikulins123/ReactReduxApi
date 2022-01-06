const SET_THEME_COLOR = 'SET-THEME-COLOR';
const SET_USERS_ON_PAGE = 'SET-USERS-ON-PAGE';
const UPDATE_SEARCH_INPUT_TEXT = 'UPDATE-SEARCH-INPUT-TEXT';
const SET_ALL_USERS = 'SET-ALL-USERS'
const SET_TOTAL_PAGES_COUNT = 'SET-TOTAL-PAGES-COUNT'
const SET_SEARCHED_USER = 'SET-SEARCHED-USER'
const SET_USER_NAME_BY_ID = 'SET-USER-NAME-BY-ID'
const SET_FOUNDED_USERS = 'SET-FOUNDED-USERS'
const SET_ACTUAL_USERS = 'SET-ACTUAL-USERS'
const SET_PAGE_NUMBER = 'SET-PAGE-NUMBER'

let initialState = {
    themeColor: 'light',
    usersOnPage: 10,
    clickedUserName: "",
    searchInputText: "",
    allUsers: [],
    actualUsers:[],
    searchedUser: "",
    foundedUsers: [],
    totalPagesCount: 0,
    clickedUserId: "",
    pageNumber: 1
}


const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_THEME_COLOR:
            return{
                ...state,
                themeColor: action.themeColor
            }
        case SET_USERS_ON_PAGE: 
            return{
                ...state,
                usersOnPage: action.usersOnPage
            }
        case UPDATE_SEARCH_INPUT_TEXT: 
            return{
                ...state,
                searchInputText: action.searchInputText
            }
        case SET_ACTUAL_USERS:
            return{
                ...state,
                actualUsers: action.actualUsers,
            }
        case SET_FOUNDED_USERS:
            return{
                ...state,
                foundedUsers: action.foundedUsers,
                searchInputText: ""
            }
        case SET_USER_NAME_BY_ID: 
            return{
                ...state,
                clickedUserName: action.clickedUserName
            }
        case SET_TOTAL_PAGES_COUNT: 
            return{
                ...state,
                totalPagesCount: action.totalPagesCount
            }       
        case SET_SEARCHED_USER: 
            return{
                ...state,
                searchedUser: action.searchedUser,
                searchInputText: ""
            }
        case SET_ALL_USERS:
            return{
                ...state,
                allUsers: action.allUsers
            }       
        case SET_PAGE_NUMBER:
            return{
                ...state,
                pageNumber: action.pageNumber
            }
        default:
            return state;
    }
}


export const setThemeColorActionCreator = (themeColor) => {
    return {
        type: SET_THEME_COLOR,
        themeColor: themeColor
    }
}
export const setUsersOnPageActionCreator = (selectValue) => {
    return {
        type: SET_USERS_ON_PAGE,
        usersOnPage: selectValue
    }
}
export const setTotalPagesCountActionCreator = (pages) => {
    return {
        type: SET_TOTAL_PAGES_COUNT,
        totalPagesCount: pages
    }
}
export const setUserNameByIdActionCreator = (userName) => {
    return {
        type: SET_USER_NAME_BY_ID,
        clickedUserName: userName
    }
}
export const updateSearchInputTextActionCreator = (searchInputText) => {
    return {
        type: UPDATE_SEARCH_INPUT_TEXT,
        searchInputText: searchInputText
    }
}
export const setSearchedUserActionCreator = (searchedUser) => {
    return {
        type: SET_SEARCHED_USER,
        searchedUser: searchedUser
    }
}
export const setAllUsersActionCreator = (allUsers) => {
    return {
        type: SET_ALL_USERS,
        allUsers: allUsers
    }
}
export const setFoundedUsersActionCreator = (data) => {
    return {
        type: SET_FOUNDED_USERS,
        foundedUsers: data
    }
}
export const setActualUsersActionCreator = (data) => {
    return {
        type: SET_ACTUAL_USERS,
        actualUsers: data
    }
}
export const setPageNumberActionCreator = (pageNumber) => {
    return {
        type: SET_PAGE_NUMBER,
        pageNumber: pageNumber
    }
}
export default usersReducer;