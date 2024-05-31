'use client'
import Header from '@/admin-scenes/Header'
import { Box } from '@mui/material'
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid'
import { ruRU } from '@mui/x-data-grid/locales'
import { useState } from 'react'
import { colors } from '../theme'

const AdminContacts = () => {
	const colums = [
		{ field: 'id', headerName: 'ID', flex: 0.1 },
		{
			field: 'name',
			headerName: 'Имя',
			cellClassName: 'name-column--cell',
			flex: 1,
		},
		{ field: 'phone', headerName: 'Номер телефона', flex: 1 },
		{ field: 'date', headerName: 'Дата заявки', flex: 0.5 },
	]

	const [rows, setRows] = useState(null)
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios('/data/clientsz', {
	// 			headers: {
	// 				'Cache-Control': 'no-cache',
	// 				Pragma: 'no-cache',
	// 				Expires: '0',
	// 			},
	// 		})
	// 		setRows(result.data)
	// 	}
	// 	fetchData()
	// }, [])

	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarExport />
			</GridToolbarContainer>
		)
	}

	return (
		<Box>
			<Header title='Заявки' subtitle='Список оставленных заявок' />
			<Box
				m='40px 0 0 10px'
				height='75vh'
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBotton: 'none',
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.primary.gold,
						borderBotton: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.primary.gold,
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: colors.grey[100] + '!important',
					},
				}}
			>
				<DataGrid
					rows={rows ? rows : []}
					columns={colums}
					localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
					slots={{ toolbar: CustomToolbar }}
					initialState={{
						pagination: {
							paginationModel: { pageSize: 25, page: 0 },
						},
					}}
					pageSizeOptions={[10, 15, 25, 50]}
					disableColumnMenu
					disableColumnSelector
					disableRowSelectionOnClick
				/>
			</Box>
		</Box>
	)
}
export default AdminContacts
