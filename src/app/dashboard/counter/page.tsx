import CartCounter from "@/app/components/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter Page",
  description: "Simple Contador",
};

const DashbordPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Productos en el carrito</span>
        <CartCounter value={20} />
      </div>
    </>
  );
};

export default DashbordPage;
