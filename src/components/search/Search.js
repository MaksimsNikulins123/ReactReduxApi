

const Search = (props) => {

    let newInputElement = props.searchInputText;

    let onChangePostValue = (e) => {
        let text = e.target.value;
        props.updateSearchInputText(text);  
    }

    let findUsersByName = (e) => {
        // debugger
        if(e.key === 'Enter'){
            props.getUsersByName(newInputElement)
            // props.foundedUsers.length > 0 ? props.getActualFoundedUsers(usersOnPage) : props.getActualUsers(usersOnPage);  
        }
    }

    return (
        <div className="search-container">
            <div className="input">
                <label>
                    <input type="text"  
                    placeholder="Search for colleague" 
                    value={newInputElement}
                    onChange={onChangePostValue}
                    onKeyPress={findUsersByName}/>
                </label>
            </div>
        </div>
    )
}
export default Search;