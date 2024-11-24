
import axios from "axios";
import React, { useState, useEffect } from 'react';
import PaginatedList from "./PaginatedList";
import Pagination from "./Pagination";
const  MainContainer = () => {
    const [tableData, setTableData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const changePage =(newpage) => {
        setPage(newpage);
    }
    useEffect(()=>{
        const apiUrl = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';
        axios.get(apiUrl)
        .then(response => {
            setTableData(response.data);
          })
          .catch(error => {
           setIsError(true);
          });
    },[]);

    if (isError) {
        return (
            <div data-testid="error">
                <p>Something went wrong please try again later.....</p>
            </div>
        )
    }

    if (!tableData) {
        return(
            <div className="loading" data-testid="loading">
                Loading...
            </div>
        )
    }

  return (
    <>
    <section className="dataTable">
        <table class="table" data-testid="table">
            <thead>
                <th>S No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
            </thead>
        <PaginatedList pageno={page} tableData = {tableData}/>
        </table>
    </section>
    <Pagination page={page} totalPages={Math.ceil(tableData.length/5)} clickChangePage={changePage}/>
    </>
  );
}

export default MainContainer;