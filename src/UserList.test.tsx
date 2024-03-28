import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';


// Defining a render component function for setup, not advised to render in a beforeEach
const renderComponent = () => {
    const users = [ 
        {name: 'jane', email: 'jane@email.com'},
        {name: 'sam', email: 'sam@email.cpm'}
    ]
    const {container} = render(<UserList users={users} />);

    return {container, users}
}


test('render one row per user (data-testid method)', () => {
    // Render the component
    renderComponent();

    //Find all the rows in the table
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // screen.logTestingPlaygroundURL(); can give recommendations for queries

    //Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('render one row per user (container method)', () => {
    // Render the component
    const {container} =renderComponent();


    //Find all the rows in the table
    // we can use css selectors to select the specific elements
    //eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');

    //Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});


test('render the email and name of each user', () => {
    const {users} =renderComponent();


    for (let user of users) {
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});
        
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        
    }
});