import "./FirstComponent.css";
const FirstComponent = () => {
    const itemDate= new Date(2022,2,27);
    const itemTitle="Car Insurence";
    const itemAmount=750.00


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
