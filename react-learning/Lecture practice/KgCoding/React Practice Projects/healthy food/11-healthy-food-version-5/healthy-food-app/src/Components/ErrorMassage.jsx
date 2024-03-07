/* eslint-disable react/prop-types */
// import React from 'react'
function ErrorMassage({ foodItems }) {
  return (
    <>
      <div>
        {foodItems.length === 0 && (
          <h1 className="text-center font-semibold text-xl">
            I am Still hungrys.
          </h1>
        )}
      </div>
    </>
  );
}

export default ErrorMassage;
