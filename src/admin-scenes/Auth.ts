'use client'
import { getCookie } from 'cookies-next'
export let isAuthenticated = getCookie('isAuthenticated')
// export let isAuthenticated = localStorage.getItem('isAuthenticated')
