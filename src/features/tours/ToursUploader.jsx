import { useState } from "react";
import supabase from "../../services/supabase";
import Button from "../../components/atoms/Button";
import { tours } from "../../assets/data/tours";

async function deleteTours() {
  const { error } = await supabase.from("tours").delete().gt("id", 0);
  console.log(error.message);
}

async function createTours() {
  const { error } = await supabase.from("tours").insert(tours).select();

  if (error) console.log(error);
}

export default function ToursUploader() {
  const [isLoading, setIsLoading] = useState(false);

  function handleUpload() {
    setIsLoading(true);

    deleteTours();
    createTours();

    setIsLoading(false);
  }

  return (
    <Button type="secondary" size="sm" onClick={handleUpload}>
      {isLoading ? "Loading..." : "Upload Tours"}
    </Button>
  );
}
