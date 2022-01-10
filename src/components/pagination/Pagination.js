



const Pagination = (props) => {
    
    let themeColor = props.themeColor;
    
    let paginationNext = () =>{

        let counter = props.pageNumber;
        if(counter < props.totalPagesCount)
        {
            props.getPageNumber(counter < props.totalPagesCount ? counter + 1 : null)
        }  
    }

    let paginationBack = () =>{
        
        let counter = props.pageNumber;
        if(counter > 1)
        {
            props.getPageNumber(counter - 1)
        }
    }

    return(
        <div className="pagination-container">
            <div className={`pagination  ${themeColor}`}>
                <span onClick={paginationBack}></span>
                {
                 props.pageNumber > 1 ? <span >{props.pageNumber - 1}</span> : null
                }
                <span className="active">{props.pageNumber}</span>
                {
                  props.pageNumber < props.totalPagesCount - 1 ?  <span >{props.pageNumber + 1}</span> : null
                }
                
                {
                 props.pageNumber < props.totalPagesCount - 2 ? <span>...</span> : null  
                }
                
                {
                    props.pageNumber < props.totalPagesCount ? <span>{props.totalPagesCount}</span> : null
                }
                

                <span onClick={paginationNext}></span>
            </div>
            
        </div>
    )
}
export default Pagination;