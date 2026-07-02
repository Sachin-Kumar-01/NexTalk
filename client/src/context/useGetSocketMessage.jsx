import { useEffect } from 'react';
import { useSocketContext } from './SocketContext';
import useconversations from "../statemanage/useconversation";
import notificationSound from "../assets/notification.mp3";

function useGetSocketMessage() {
    const { socket } = useSocketContext();

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play().catch(() => {}); // browser may block autoplay

            const { selectedConversation, messages } = useconversations.getState();

            // Only append if the message belongs to the currently open conversation
            if (
                selectedConversation &&
                (newMessage.senderId === selectedConversation._id ||
                 newMessage.receiverId === selectedConversation._id)
            ) {
                // newMessage needs _id for React key - Mongoose docs have it
                useconversations.setState({ messages: [...messages, newMessage] });
            }
        };

        socket.on("newMessage", handleNewMessage);
        return () => { socket.off("newMessage", handleNewMessage); };
    }, [socket]);
}

export default useGetSocketMessage;
