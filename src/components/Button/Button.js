import PropTypes from "prop-types";
import s from "./Button.module.css";

function Btn({ onClick }) {
  return (
    <button className={s.LoadMore} type="button" onClick={onClick}>
      Загрузить еще...
    </button>
  );
}

Btn.prototype = {
  onClick: PropTypes.func.isRequired,
};

export default Btn;
