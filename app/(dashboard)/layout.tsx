import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
        >
            <div>
                {children}
            </div>
        </Auth0Provider>
    );
};

export default DashboardLayout;
