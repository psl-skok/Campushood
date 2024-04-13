// ChatBox.tsx

import React, { useState } from 'react';
import '../styles/ChatBox.css';
import editImage from '../assets/edit.png';
import replyImage from '../assets/reply.png';
import deleteImage from '../assets/delete.png';

interface ChatBoxProps {
    initialTitle: string;
    initialBody: string;
}

export function ChatBox({ initialTitle, initialBody }: ChatBoxProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(initialTitle);
    const [editedBody, setEditedBody] = useState(initialBody);
    const [isHidden, setIsHidden] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
    };

    const handleEditBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedBody(e.target.value);
    };

    const handleEditComplete = () => {
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        setIsHidden(true);
        console.log("Chat box deleted");
    };

    if (isHidden) {
        return null; // Return null to hide the chat box
    }

    return (
        <div className='chatBoxStyle'>
            <div className='headerStyle'>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={handleEditTitleChange}
                        onBlur={handleEditComplete}
                    />
                ) : (
                    <h1>{initialTitle}</h1>
                )}
            </div>
            {isEditing ? (
                <input
                    type="text"
                    value={editedBody}
                    onChange={handleEditBodyChange}
                    onBlur={handleEditComplete}
                />
            ) : (
                <p>{initialBody}</p>
            )}
            <div className='userInfoStyle'>
                <h2>Poster: testemail@davidson.edu</h2>
            </div>
            <div className='chatFunctionalities'>
                <img src={editImage} alt="Edit Image" style={{ width: '3%', height: '3%' }} onClick={handleEditClick} />
                <img src={replyImage} alt="Reply Image" style={{ width: '3%', height: '3%' }} />
                <img src={deleteImage} alt="Delete Image" style={{ width: '3%', height: '3%' }} onClick={handleDeleteClick} />
            </div>
        </div>
    );
}
