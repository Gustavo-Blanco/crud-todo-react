const ListToDo = ({ data }) => {
  return (
    <div>
      <h1>List To Do</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListToDo;
