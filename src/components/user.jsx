// component
const User = (props) => {
  // props help to dynamically assign value
  return (
    <div>
      <h1>{props.name} </h1>
      <h4>{props.description}</h4>
    </div>
  );
};

export default User;
