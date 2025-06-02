import { Button } from "@/components/ui/button";
import { getPayload } from "payload";
import React from "react";
import configPromise from "@payload-config";
const Home = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
  });
  return (
    <div>
      <Button variant="elevated">I am a button</Button>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default Home;
