import deleteIcon from "../assets/images/delete.png";
import edit from "../assets/images/edit.png";
const CategoriesInnerBoxItem = ({ title }) => {
  return (
    <div className="categories-bottom-box-item">
      <div className="categories-bottom-box-item-title">{title}</div>
      <div className="categories-bottom-box-item-icons">
        <img src={deleteIcon} />
        <img src={edit} />
      </div>
    </div>
  );
};

export default CategoriesInnerBoxItem;
