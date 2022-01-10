

const Users = (props) => {
   
    let themeColor = props.themeColor;

    let actualUsersArray = props.actualUsers
  

    let getUserId = (e) => {
        let userId = e.target.id;
        
        props.getUserNameById(userId); 
    
    }
  
    
    return (

        <div className='users-container'>
            <div className='users'>
            {
                actualUsersArray.map(
                    (user) => 
                    <div key={user.id} id={user.id} className={`users-block  ${themeColor}`} onClick={getUserId}>
                        <div className='userAvatar'>
                            {
                            user.url === null 
                            ?
                            <span>{user.name[0]}</span>
                            :
                            <img src={user.url} alt='userAvatar' />
                            }
                            
                        </div>
                        <div className='userName'>
                            <span>{user.name}</span>  
                        </div>
                        
                    </div>
                )
               
                
            }
            </div>
            
        </div>
    )
}

export default Users; 
