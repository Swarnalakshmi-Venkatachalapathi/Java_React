// import React from 'react';

// const Users = ()=>{

//     return(<>
//     </>)
// }
// export default Users;

import React, { useEffect, useState } from 'react';
import { Table, Pagination, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Fetch users from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/admin/cust/list');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users", error);
            }
        };
        fetchUsers();
    }, []);

    // Calculate pagination
    const totalPages = Math.ceil(users.length / usersPerPage);
    const displayedUsers = users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

    const handlePageChange = (e, { activePage }) => {
        setCurrentPage(activePage);
    };

    return (
        <Container>
            <Header as="h2" textAlign="center">User List</Header>
            <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Role</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {displayedUsers.map((user) => (
                        <Table.Row key={user.id}>
                            <Table.Cell>{user.id}</Table.Cell>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.userRole}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Pagination
                activePage={currentPage}
                onPageChange={handlePageChange}
                totalPages={totalPages}
                boundaryRange={1}
                siblingRange={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
            />
        </Container>
    );
};

export default Users;
