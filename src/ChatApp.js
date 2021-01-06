import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import { ChatProvider } from "./context/chat/ChatContext";
import { SocketProvider } from "./context/SocketContext";
import { AppRouter } from "./router/AppRouter";

export const ChatApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <ChatProvider>
          <AppRouter />
        </ChatProvider>
      </SocketProvider>
    </AuthProvider>
  );
};
