import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

function LogOut() {
    const [authUser, SetAuthUser] = useAuth()
    const handleLogOut = () => {
        try {
            SetAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")

            toast.success("Logout successfully")

            window.location.reload();
        } catch (error) {
            toast.error("Error : " + error.message)
        }
    }
    return (
        <button
            onClick={handleLogOut}
            className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>logout</button>
    )
}


export default LogOut

