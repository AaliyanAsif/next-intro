import React from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Details About Product {params.productId}</div>;
}
