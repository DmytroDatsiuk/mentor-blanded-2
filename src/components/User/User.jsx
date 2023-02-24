export const User = ({ name, email, deleteUser, id, onModal, avatar }) => {
  return (
    <li>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <button onClick={() => onModal({ src: avatar, alt: name })}>
        Show avatar
      </button>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </li>
  );
};
