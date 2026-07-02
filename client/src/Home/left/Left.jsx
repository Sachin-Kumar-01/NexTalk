import React from 'react';
import Search from './Search';
import Users from './Users';

import api from '../../utils/axios';
import { useAuth } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

function Chats() {
  const { setAuthUser } = useAuth();

  const handleLogout = async () => {
    try {
      await api.post('/api/user/logout');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    } finally {
      setAuthUser(null);
    }
  };

  return (
    <div className='w-full bg-black text-white flex flex-col h-full'>
      <Search />
      <hr></hr>
      <Users />
    </div>
  )
}

export default Chats