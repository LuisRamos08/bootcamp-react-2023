export const CustomCard = ({ cardText, buttonLabel }) => {
  return (
    <div className="custom-card">
      <p> {cardText} </p>
      <button type="button">{buttonLabel}</button>
    </div>
  );
};
