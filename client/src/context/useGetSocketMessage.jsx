import { useEffect } from 'react';
import { useSocketContext } from './SocketContext';
import useconversations from "../statemanage/useconversation";
import notificationSound from "../assets/notification.mp3";

function useGetSocketMessage() {
    const { socket } = useSocketContext();
    const { setMessages } = useconversations();

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            const currentMessages = useconversations.getState().messages;
            setMessages([...currentMessages, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);
        return () => { socket.off("newMessage", handleNewMessage); }
    }, [socket, setMessages])
}

export default useGetSocketMessage;
