import NumberPages from "./NumberPages";

const Pagination = (props) => {
    const {page, totalPages, clickChangePage} = props
    return (
        <div class="pagination">
            <span className="extremes" onClick={()=>{clickChangePage(1)}}>{'<<'}</span>
            <button class="arrow" id="nextPage" data-testid="prevButton" onClick={()=>{clickChangePage(Math.max(1,page-1))}}><span class="nav-text">{'<PREV'}</span></button>
            <div class="pages">
                <NumberPages page={page} totalPages={totalPages} clickChangePage={clickChangePage}/>
            </div>
            <button class="arrow" id="nextPage" data-testid="nextButton" onClick={()=>{clickChangePage(Math.min(totalPages,page+1))}}><span class="nav-text">{'NEXT>'}</span></button>
            <span className="extremes" onClick={()=>{clickChangePage(totalPages)}}>{'>>'}</span>
        </div>
    )
}

export default Pagination;