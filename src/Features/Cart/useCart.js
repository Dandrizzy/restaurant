import { useOrder } from '../../Hooks/useOrder';

export const useCart = () => {
  const { cart } = useOrder();
  const subtotal =
    cart.length < 1 ? 0 : cart?.reduce((a, b) => a + b?.total, 0);
  return { subtotal };
};
