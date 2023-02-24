import { User } from 'components/User/User';

export const UserList = ({ users, onDelete, onModal }) => {
  return (
    <ul>
      {users.map(user => (
        <User
          key={user.id}
          name={user.name}
          email={user.email}
          deleteUser={onDelete}
          id={user.id}
          onModal={onModal}
          avatar={user.avatar}
        />
      ))}
    </ul>
  );
};
