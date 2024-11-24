const NumberPages = (props) => {
    const {page, totalPages, clickChangePage} = props;
    let startIndex;
    if(page === 1){
        startIndex = 1;
    }
    else if(page === totalPages) {
        startIndex = page - 2;
    }
    else{
        startIndex = page - 1;
    }

    return (
<>
{ [startIndex, startIndex+1, startIndex+2].map((index)=>{
   return <div  className={`page-number ${index === page ? 'active': ''}`}  onClick={()=>{clickChangePage(index)}}>{index}</div>
})}
</>  )};

export default NumberPages;