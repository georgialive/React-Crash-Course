function User( id, name, email, username) {
  return (
    <div style={{ border: `${pixels} solid black` }}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{username}</div>

      {/* {users.length > 0
    ? <h1>{users[0]?.name}</h1>
    : <h1>Loading...</h1>
    } */}
    </div>
  );
}

export default User;
