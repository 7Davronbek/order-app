/* eslint-disable react/prop-types */
const CardSaveButton = ({data}) => {
  return (
    <div className="CardSaveButton">
      <div onClick={() => console.log(data)} className="card_info_btn_h_box">
        <img src="/img/prod_save_1.png" alt="" />{" "}
      </div>
    </div>
  );
};

export default CardSaveButton;
