import React from "react";

function CartReviewChild() {
  return (
    <li className="flex items-center gap-3 justify-between p-4">
      <div className="flex items-center gap-4">
        <img src="/img/img1.svg" className="max-sm:w-10" alt="" />
        <p className="text-xl max-sm:text-base">Картошка фри</p>
      </div>
      <div>
        <p className="text-xl max-sm:text-base">16 000 сум</p>
      </div>
    </li>
  );
}

export default CartReviewChild;
