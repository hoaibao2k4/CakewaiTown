"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Item } from "~/types";
import Image from "next/image";
interface SubItemProps {
  item: Item
  index: number
}
function SubItem({item, index} : SubItemProps) {
    const [quantity, setQuantity] = useState<number>(item.buy_quantity)
    const dispatch = useDispatch()
  return (
    <div key={index}>
      <div className="flex gap-6">
        <Image src={item.image_link} alt="Banh ngot Sai Thanh" className="h-16 w-16" width={16} height={16} />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl">{item.name}</h3>
          <span className="text-lg">{item.variant !== 'one-variant' ? item.variant : ''}</span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex">
          <button
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            onMouseLeave={() => 
                dispatch({
                  type: 'cart/updateItem',
                  payload: {
                    product_id: item.product_id,
                    variant: item.variant,
                    buy_quantity: quantity,
                  },
                })
              }
            className="h-10 w-10 rounded-bl-lg rounded-tl-lg border border-primary"
          >
            -
          </button>
          <input
            className="h-10 w-10 border-b border-t border-primary text-center text-sm"
            type="text"
            value={quantity}
            onChange={(e) => e.target.value}
          />
          <button
            onClick={() => setQuantity(Math.max(1, quantity + 1))}
            onMouseLeave={() => {
                dispatch({
                  type: 'cart/updateItem',
                  payload: {
                    product_id: item.product_id,
                    variant: item.variant,
                    buy_quantity: quantity,
                  },
                });
              }}
              
            className="h-10 w-10 rounded-br-lg rounded-tr-lg border border-primary"
          >
            +
          </button>
        </div>
        <span className="text-base font-normal">{'Đơn giá: ' + item.price.toLocaleString('vi-VN') + ' VND'}</span>
      </div>
      <hr className="my-6" />
    </div>
  );
}

export default SubItem;
