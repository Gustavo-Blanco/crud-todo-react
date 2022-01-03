import Form from "./Form";
import AlertDialog from "../Dialog";

const StoreToDo = ({ fetchStore, fetchGet }) => {
  return (
    <>
      <AlertDialog
        txtButton="Crear ToDo"
        title="Crear ToDo"
        content={<Form fetchStore={fetchStore} fetchGet={fetchGet} />}
      />
    </>
  );
};

export default StoreToDo;
