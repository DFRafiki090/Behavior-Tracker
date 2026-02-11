import React from 'react';

interface RequireRoleProps {
    allowedRoles: string[];
    userRole: string;
    children: React.ReactNode;
}

const RequireRole: React.FC<RequireRoleProps> = ({ allowedRoles, userRole, children }) => {
    if (!allowedRoles.includes(userRole)) {
        return <div>You do not have permission to view this content.</div>;
    }
    return <>{children}</>;
};

export default RequireRole;