/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
const CardSaveButton = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddTSavedList = (item) => {};

  return (
    <div className="CardSaveButton">
      <button
        onClick={() => handleAddTSavedList(data)}
        className="card_info_btn_h_box"
      >
        <img src="/img/prod_save_1.png" alt="" />
      </button>
    </div>
  );
};

export default CardSaveButton;
