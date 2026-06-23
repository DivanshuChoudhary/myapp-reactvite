function Profile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.course} Student</p>
      <p>Learning React + Vite</p>
    </div>
  );
}

export default Profile;