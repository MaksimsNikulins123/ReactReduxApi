import HeaderContainer from "../header/HeaderContainer";
import Pagination from "../pagination/Pagination";
import PaginationContainer from "../pagination/PaginationContainer";
import SearchContainer from "../search/SearchContainer";
import UsersContainer from "../Users/UsersContainer";


const Content = (props) => {

    return (
        <div className={`app-container  ${props.themeColor}`}>
                <HeaderContainer />
                <SearchContainer />
                <UsersContainer />
                <PaginationContainer />
        </div>
    )
}
export default Content;

