import "./FirstComponent.css";
const FirstComponent = (props) => {
    const itemDate= props.date;
    const itemTitle=props.title;
    const itemAmount=props.amount;


  return (
    <div className="first-item">
      <div>{itemDate.toISOString()}</div>
      <div className="first-item__description">
        <h2>{itemTitle}</h2>
        <div className="first-item__price">Rs. {itemAmount}</div>
      </div>
    </div>
  );
};

export default FirstComponent;
