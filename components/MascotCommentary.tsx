import React from 'react';

interface MascotCommentaryProps {
    message: string;
    isVisible: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
}

const MascotCommentary: React.FC<MascotCommentaryProps> = ({ message, isVisible, placement = 'top' }) => {
    return (
        <div className={`speech-bubble place-${placement} ${isVisible ? 'visible' : ''}`}>
            {message}
        </div>
    );
};

export default MascotCommentary;