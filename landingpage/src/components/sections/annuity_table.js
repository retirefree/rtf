import React from 'react';
import querystring from 'querystring';
import ReactGA from 'react-ga';

import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table'

import styled from 'styled-components'


const Styles = styled.div`
  padding: 0 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    border: 0;
    text-align: left;

    th, td {
      margin: 0;
      padding: 1em 0.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  }

  .pagination {
    padding: 0.5rem;
    > span {
      width: 8em;
    }
    > button {
      width: 3em;
      background: #9A9ECB;
      color: white;
      border: none;
      border-radius: 4px;
      margin 0 1px;
    }

    > button:disabled {
      background: #dddfee;
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination d-flex justify-content-center">
        <button onClick={e => { e.preventDefault(); gotoPage(0); }} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={e => { e.preventDefault(); previousPage()}} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span>
          Page{' '}
          <strong>{pageIndex + 1}</strong>
          {' '}of{' '}
          <strong>{pageOptions.length}</strong>
        </span>
        <button onClick={e => { e.preventDefault(); nextPage()}} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={e => { e.preventDefault(); gotoPage(pageCount - 1)}} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
      </div>
    </>
  )
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

/*


  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
*/

class AnnuityTable extends React.Component {
  handleApply = (id) => {
    const { onApply } = this.props;
    if (!onApply) {
      return;
    }
    onApply(id);
  }

  columns = [
    {
      Header: 'INSURER',
      accessor: 'company',
    },
    {
      Header: 'RATING',
      accessor: 'rating',
    },
    {
      Header: 'RATE',
      accessor: 'rate',
      Cell: ({ cell: { value } }) => (
        <div className="rate-cell">{String((value || 0).toFixed(2)) + '%'}</div>
      ),
    },
    {
      Header: 'TERM',
      accessor: 'term',
      Cell: ({ cell: { value } }) => (
        <div>
          <span className="earnings-cell">{value}</span>{" year"}
        </div>
      )
    },
    {
      Header: 'EARNINGS',
      accessor: 'earnings',
      Cell: ({ cell: { value } }) => (
        <div className="earnings-cell">{formatter.format(value)}</div>
      ),
    },
    {
      Header: '',
      accessor: 'id',
      Cell: ({ cell: { value } }) => (
        <button 
          className="apply-button" 
          onClick={e => {
            e.preventDefault();
            ReactGA.event({
              category: "Apply Now",
              action: "User Clicked Apply Now Link"
            });
            this.handleApply(value)
            }}>
            Apply Now >
        </button>
      ),
    },
  ]

  render() {
    const items = this.props.items || [];
    return (
      <Styles>
        <Table columns={this.columns} data={items} />
      </Styles>
    )
  }
};

export default AnnuityTable;
