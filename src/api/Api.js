import axios from "axios"


const instance = axios.create(
    {
        baseURL: `http://localhost:5555`
    }
)

export const Api = {

    getAllUsers() {
        return(
            instance
            .get(`/characters`)
            .then(response => {
                return(
                    response.data
                ) 
            })
        ) 
    },

    getUser(userId){
        return(
            instance
            .get(`/characters/`+ userId)
            .then(response => {
                return(
                    response.data
                ) 
            })
        )
    },

    searchUserByName(userName){
        return(
            instance
            .get(`/characters?name_like=` + userName)
            .then(response => {
                return(
                    response.data
                ) 
            })
        )
    },

    getUsersByPageNumber(pageNumber, usersOnPage){
        return(
            instance
            .get(`/characters?_page=${pageNumber}&_limit=${usersOnPage}`)
            .then(response => {
                return(
                    response.data
                ) 
            })
        )
    }

}
