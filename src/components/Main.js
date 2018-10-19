import React from "react";
import "./Main.css";
import ChatWindow from "./ChatWindow"
import Empty from "./Empty"
const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        return !activeUserId ? <Empty user={user} activeUserId={activeUserId} /> : <ChatWindow activeUserId={activeUserId} />

    }

    return (
        <main className="Main">
            {renderMainContent()}
        </main>
    );
};

export default Main;

