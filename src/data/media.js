import axios from "axios";

export async function uploadCatalogImage(file) {
  if (!file) return "";
  const body = new FormData();
  body.append("image", file, file.name);
  const response = await axios.post("/admin/media/images", body);
  return response.data.url;
}

export async function removeCatalogImage(url) {
  if (!url || !url.includes("res.cloudinary.com")) return;
  await axios.delete("/admin/media/images", { data: { url } });
}
