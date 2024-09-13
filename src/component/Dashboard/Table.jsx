import React, { useEffect, useMemo, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table'
import axios from 'axios'
import { Column } from '../Tables/columns';
import { Table as BootstrapTable } from 'react-bootstrap';
  // Assuming you have an external CSS file

const Table = () => {

  const [user, setUser] = useState([])
  const columns = useMemo(() => Column, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        if (response.data) {
          setUser(response.data)
        }
      } catch (error) {
        console.log("Error:", error)
      }
    }
    fetchData();
  }, [])
  console.log(user)

  const table = useReactTable({ columns, data:user, getCoreRowModel: getCoreRowModel() })
 
  if (!table) {
    return <div>Error: Table could not be created.</div>;
  }

  return (
    <div>
      <Card className='mt-3 content-table'>
        <Card.Title className='d-flex justify-content-center mt-4'>Table Data</Card.Title>
        <hr className='me-4' />
        
        {/* Scrollable table container */}
        <div className="table-container">
          <BootstrapTable striped bordered hover className='mx-4'>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </BootstrapTable>
        </div>
      </Card>
    </div>
  )
}

export default Table;
