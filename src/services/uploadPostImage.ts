import { supabase } from "./supabase";

export async function uploadPostImage(
  file: File
) {

  const extension =
    file.name.split(".").pop();

  const fileName =
    `${Date.now()}-${Math.random()}.${extension}`;

  const { error } =
    await supabase.storage
      .from("posts")
      .upload(
        fileName,
        file
      );

  if (error) {
    throw error;
  }

  const { data } =
    supabase.storage
      .from("posts")
      .getPublicUrl(fileName);

  return data.publicUrl;

}