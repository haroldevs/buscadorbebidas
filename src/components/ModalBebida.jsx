import { Image, Modal } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick, receta, setReceta } = useBebidas();
  console.log(receta);

  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={`ingredient-${i}`}>
            {receta[`strIngredient${i}`]}
            {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };
  return (
    <Modal
      show={modal}
      onHide={() => {
        handleModalClick();
        setReceta({});
      }}
    >
      <Image
        src={receta.strDrinkThumb}
        alt={`Imange receta ${receta.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciones</h2>
          {receta.strInstructions}
          <h2>Ingredientes y Cantidad</h2>
          {mostrarIngredientes()}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBebida;
