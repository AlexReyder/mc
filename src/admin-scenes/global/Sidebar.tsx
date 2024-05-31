'use client'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Box, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import { ReactNode, useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { colors } from '../theme'

import Link from 'next/link'
import './sidebar.css'

interface ItemPropsI {
	ftg: any
	title: string
	to: string
	icon: ReactNode
	selected: string
	setSelected: (title: any) => void
}

const Item = ({ title, to, icon, selected, ftg, setSelected }: ItemPropsI) => {
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => {
				setSelected(title)
				ftg()
			}}
			icon={icon}
			component={<Link href={to} />}
		>
			<Typography variant='h5'>{title}</Typography>
		</MenuItem>
	)
}

const SidebarEl = () => {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [selected, setSelected] = useState('Продукция')
	const [broken, setBroken] = useState(
		window.matchMedia('(max-width: 900px)').matches
	)
	const [toggled, setToggled] = useState(false)

	const handleCloseToggle = () => {
		setToggled(false)
	}

	const handleLogOut = () => {
		axios('/auth/logout').then(res => {
			window.location.replace('https://simter-st.ru/')
		})
	}

	return (
		<Box
			className={`sidebar__wrapper ${
				isCollapsed ? 'sidebar--collapsed' : null
			}`}
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colors.primary[400]}!important`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
			}}
		>
			<button className='toggle-button' onClick={() => setToggled(true)}>
				Меню
			</button>
			<Sidebar
				collapsed={isCollapsed}
				width='300px'
				className={`sidebar ${isCollapsed ? 'sidebar--collapsed' : null}`}
				customBreakPoint='800px'
				onBreakPoint={setBroken}
				toggled={toggled}
				onBackdropClick={() => setToggled(false)}
			>
				<Menu className='sidebar--exit'>
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100],
						}}
						className={`${isCollapsed ? 'sidebar__icon' : ''}`}
					>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'
							>
								<Typography variant='h3' color={colors.grey[100]}>
									Микроцемент
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{!isCollapsed && (
						<Box mb='25px' className='sidebar__admin-title'>
							<Box textAlign='center'>
								<Typography
									variant='h3'
									color={colors.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}
								>
									Администратор
								</Typography>
							</Box>
						</Box>
					)}

					<Box
						paddingLeft={isCollapsed ? undefined : '10%'}
						className='sidebar__items'
					>
						<Item
							title='Стены'
							to='/admin/walls'
							icon={<DashboardCustomizeIcon />}
							selected={selected}
							setSelected={setSelected}
							ftg={handleCloseToggle}
						/>

						<Item
							title='Полы'
							to='/admin/floors'
							icon={<DashboardCustomizeIcon />}
							selected={selected}
							setSelected={setSelected}
							ftg={handleCloseToggle}
						/>

						<Item
							title='Мокрые зоны'
							to='/admin/wet-areas'
							icon={<DashboardCustomizeIcon />}
							selected={selected}
							setSelected={setSelected}
							ftg={handleCloseToggle}
						/>

						<Item
							title='Профиль'
							to='/admin/profile'
							icon={<VpnKeyIcon />}
							selected={selected}
							setSelected={setSelected}
							ftg={handleCloseToggle}
						/>

						<Item
							title='Выйти из панели'
							to='/'
							icon={<LogoutIcon />}
							selected={selected}
							setSelected={setSelected}
							ftg={handleCloseToggle}
						/>
					</Box>
				</Menu>
			</Sidebar>
		</Box>
	)
}
export default SidebarEl
