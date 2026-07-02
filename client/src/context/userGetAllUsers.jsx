import React, { useState, useEffect } from 'react'
import { useAuth } from './AuthProvider';
import api from '../utils/axios';
import toast from 'react-hot-toast';

const useGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { AuthUser } = useAuth();

    useEffect(() => {
        const getallusers = async () => {
            setLoading(true);
            try {
                const response = await api.get('/api/user/allusers');
                setAllUsers(response.data);
            } catch (error) {
                toast.error('Failed to load users');
            } finally {
                setLoading(false);
            }
        }
        if (AuthUser) getallusers();
    }, [AuthUser]);

    return {
        allUsers,
        loading
    }
}
export default useGetAllUsers