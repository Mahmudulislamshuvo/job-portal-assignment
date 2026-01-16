import React from "react";

const AboutCompany = ({ data }) => {
  return (
    <>
      <div class="card p-6">
        <h2 class="text-xl font-semibold mb-4">About Company</h2>
        <div class="space-y-4 text-[hsl(var(--color-foreground))]">
          <p>{data?.description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
