const PaginatedList = (props) => {
    const {pageno, tableData} = props;
    const subArray = tableData.slice((pageno-1)*5, pageno*5);

    return (
        <tbody>
    {subArray.map((tableData) => {
    return(
        <tr>
        <td data-label='S No.'>{tableData['s.no']}</td>
        <td data-label='Percentage funded'>{tableData['percentage.funded']}</td>
        <td data-label='Amount pledged'>{tableData['amt.pledged']}</td>
        </tr>
    )})
    }
        </tbody>
)};

export default PaginatedList;