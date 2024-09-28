import React, { useState, useEffect } from 'react';

interface Role {
    id: number;
    name: string;
}

const RolesPage: React.FC = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [newRole, setNewRole] = useState<string>('');
    const [editingRole, setEditingRole] = useState<Role | null>(null);

    useEffect(() => {
        // Fetch roles from an API or initialize with some data
        const fetchRoles = async () => {
            // Replace with your API call
            const initialRoles: Role[] = [
                { id: 1, name: 'Admin' },
                { id: 2, name: 'User' },
            ];
            setRoles(initialRoles);
        };

        fetchRoles();
    }, []);

    const addRole = () => {
        const newRoleObj: Role = { id: roles.length + 1, name: newRole };
        setRoles([...roles, newRoleObj]);
        setNewRole('');
    };

    const deleteRole = (id: number) => {
        setRoles(roles.filter(role => role.id !== id));
    };

    const startEditing = (role: Role) => {
        setEditingRole(role);
    };

    const saveRole = () => {
        if (editingRole) {
            setRoles(roles.map(role => (role.id === editingRole.id ? editingRole : role)));
            setEditingRole(null);
        }
    };

    return (
        <div>
            <h1>Roles</h1>
            <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="New Role"
            />
            <button onClick={addRole}>Add Role</button>
            <ul>
                {roles.map(role => (
                    <li key={role.id}>
                        {editingRole && editingRole.id === role.id ? (
                            <input
                                type="text"
                                value={editingRole.name}
                                onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
                            />
                        ) : (
                            role.name
                        )}
                        <button onClick={() => deleteRole(role.id)}>Delete</button>
                        <button onClick={() => startEditing(role)}>Edit</button>
                    </li>
                ))}
            </ul>
            {editingRole && <button onClick={saveRole}>Save</button>}
        </div>
    );
};

export default RolesPage;