import '../../../src/styles.css';
import logo from '../../assets/logo.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';


const Header = (props) => {

let themeColor = props.themeColor;

let onChangeSelectValue = (e) => {

    let usersOnPage = e.target.value;
    props.getActualUsers(usersOnPage)

}
    return (
        <div className={`header  ${themeColor}`}>
     
            <div className={`logo-container ${themeColor}`}>
                <img src={logo} alt='logo' />
                <span className={`logoTitle ${themeColor}`}></span> 
            </div>
            <div className={`selectedUserNameSurname ${themeColor}`}>
                <span>{props.clickedUserName}</span>
            </div>
            <div className='button-select-container'>
                <div className={`button-container ${themeColor}` }>
                    <button className='onTheme' onClick={() => props.setThemeColor('light')}>
                        <img src={sun} alt="sun logo" />
                    </button>
                    <button className='offTheme' onClick={() => props.setThemeColor('dark')}>
                        <img src={moon} alt="month logo" />
                    </button>
                </div>
                <div className='select-container'>
                    <select name="usersNumber" id="usersNumber" defaultValue="10" onChange={onChangeSelectValue}>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="18">18</option>
                        <option value="21">21</option>
                        <option value="24">24</option>
                        <option value="27">27</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>    
        </div>
    )
}
export default Header;