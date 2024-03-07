/* eslint-disable react/prop-types */
function ErrorMassage({ items }) {
  return (
    <>
      {items.length === 0 && (
        <h2 className="text-center text-3xl font-semibold">Food is empty</h2>
      )}
    </>
  );
}

export default ErrorMassage;
