

const Search = (props) => {

    let newInputElement = props.searchInputText;

    let onChangePostValue = (e) => {
        let text = e.target.value;
        props.getSearchInputText(text)
        // props.updateSearchInputText(text);  
    }

    let findUsersByName = (e) => {
        if(e.key === 'Enter'){
           props.getUsersByName(newInputElement);
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