import { Box, Typography } from '@mui/material'
import { colors } from './theme'

const Header = ({ title, subtitle }) => {
	return (
		<Box mb='30px' mt='30px'>
			<Typography
				variant='h2'
				color={colors.grey[100]}
				fontWeight='bold'
				sx={{ mb: '10px', ml: '10px' }}
			>
				{title}
			</Typography>
			<Typography
				variant='h5'
				color={colors.greenAccent[400]}
				sx={{ ml: '10px' }}
			>
				{subtitle}
			</Typography>
		</Box>
	)
}
export default Header
