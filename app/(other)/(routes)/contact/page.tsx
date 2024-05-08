import React from 'react';
import { getUserSession } from '@/lib/session';
import { useEffect } from 'react';

interface ContactProps {
    
}

const Contact: React.FC<ContactProps> = async () => {
    
    const user = await getUserSession();

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default Contact;