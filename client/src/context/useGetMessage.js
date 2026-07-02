import { useEffect, useState } from "react";
import useconversations from "../statemanage/useconversation";
import api from "../utils/axios";
import toast from 'react-hot-toast';

function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useconversations();

    useEffect(() => {
        const getmessages = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/api/message/get/${selectedConversation._id}`);
                setMessages(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error('Failed to load messages');
            }
        };

        if (selectedConversation?._id) {
            getmessages();
        } else {
            setMessages([]);
        }
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
}

export default useGetMessage;