import { supabase } from "./supabase";

export async function uploadProfileImage(
  file: File
) {

  const extension =
    file.name
      .split(".")
      .pop();

  const safeFileName =
    `${Date.now()}.${extension}`;

  const { error } =
    await supabase.storage
      .from("profiles")
      .upload(
        safeFileName,
        file
      );

  if (error) {
    throw error;
  }

  const { data } =
    supabase.storage
      .from("profiles")
      .getPublicUrl(
        safeFileName
      );

  return data.publicUrl;
}