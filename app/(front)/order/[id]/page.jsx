import OrderDetails from "./OrderDetails";

export function generateMetadata({ params }) {
  return {
    title: `Order ${params.id}`,
  };
}

export default function OrderDetailsPage({ params }) {
  return (
    <OrderDetails
      payUClientId={process.env.PAYU_CLIENT_ID || "rc"}
      orderId={params.id}
    />
  );
}
