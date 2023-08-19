import React from "react";

export function BuyProduct({ product, price }) {
    return (
        <div className="row">
            <div className="col-9">
                <p>{product}</p>
            </div>
            <div className="col-3">
                <p className="text-end">{`$ ${price}`}</p>
            </div>
            <hr />
        </div>
    )
}