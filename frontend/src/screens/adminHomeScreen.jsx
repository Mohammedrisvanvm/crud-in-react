import React, { useState } from 'react'
import AdminHeader from '../components/adminHeader'
import UserInfoTable from '../components/UserInfoTable'

function AdminHomeScreen() {
  const [search, setSearch]=useState('')
  return (
    <>
    <AdminHeader search={search} setSearch={setSearch}/>
    <UserInfoTable search={search} setSearch={setSearch}/>
    </>
  )
}

export default AdminHomeScreen
