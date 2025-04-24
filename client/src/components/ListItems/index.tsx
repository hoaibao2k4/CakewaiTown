"use client"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getCart, updateCartItem } from "~/api/apiCart";
import { loginSuccess } from "~/redux/authSlice";
import { createInstance } from "~/redux/interceptors";
import SubItem from "./SubItem";
import { useState } from "react";
import { RootState } from "~/redux/store";
import { Item } from "~/types";
import { useEffect } from "react";
interface ListItemsProps {
  list: Item[];
  onCloseDrawer: () => void;
}
function ListItems({ list, onCloseDrawer }: ListItemsProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.login.currentUser);
  let instance: ReturnType<typeof createInstance> | null = null;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  user &&
    (() => {
      instance = createInstance(user, dispatch, loginSuccess);
    })();
  const [originalList, setOriginalList] = useState(list);
  const handleViewCart = async () => {
    try {
      if (!user?.access_token || !instance) {
        console.error("Missing access token or instance");
        return;
      }
      const res = await getCart(user?.access_token, instance);
      list = res.items;
      setOriginalList(res.items)
      const itemsToUpdate = list.filter(
        (item: Item, index: number) =>
          item.buy_quantity !== originalList[index].buy_quantity
      );
      if (itemsToUpdate.length > 0) {
        await Promise.all(
          itemsToUpdate.map((item: Item) =>
            updateCartItem(user!.access_token, instance!, item)
          )
        );
      }
      onCloseDrawer();
      router.push("/cart");
    } catch (err) {
      console.error("Failed to update cart items", err);
    }
  };
  useEffect(() => {
    const upadteCart = async () => {
      if (user?.access_token && instance) {
        const res = await getCart(user?.access_token, instance)
        setOriginalList(res.items);
      }
    }
    upadteCart();
  }, [list]);
  return (
    <div>
      {list?.map((item, index) => (
        <SubItem item={item} key={index} index={index} />
      ))}
      <div className="pb-10">
        <button
          onClick={handleViewCart}
          className="float-right mx-2 h-10 w-28 rounded-xl bg-third hover:text-slate-50"
        >
          Xem giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ListItems;
