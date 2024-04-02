import React from "react";

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <div>
      Review {params.reviewId} About Product {params.productId}{" "}
    </div>
  );
}
