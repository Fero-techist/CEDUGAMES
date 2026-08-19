import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";

export default function ImageUploadField({ file, currentUrl, onChange, label = "Image", required = false }) {
  const [preview, setPreview] = useState(currentUrl || "");

  useEffect(() => {
    if (!file) { setPreview(currentUrl || ""); return undefined; }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file, currentUrl]);

  return <label className="block text-sm font-semibold">
    {label} {!required && <span className="font-normal text-slate-400">(optional)</span>}
    <span className="mt-2 flex min-h-32 cursor-pointer items-center gap-4 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-4 transition hover:border-purple-400 hover:bg-purple-50/40">
      {preview ? <img src={preview} alt="Selected preview" className="h-24 w-28 rounded-lg object-cover"/> : <span className="flex h-20 w-20 items-center justify-center rounded-xl bg-purple-100 text-purple-600"><ImagePlus size={28}/></span>}
      <span className="min-w-0 flex-1"><span className="block font-bold text-slate-700">{file?.name || (currentUrl ? "Replace current image" : "Choose an image")}</span><span className="mt-1 block text-xs font-normal text-slate-400">JPEG, PNG, GIF or WebP · maximum 10 MB</span></span>
      <input className="sr-only" type="file" accept="image/jpeg,image/png,image/gif,image/webp" required={required && !currentUrl} onChange={(event) => onChange(event.target.files?.[0] || null)}/>
      {file && <button type="button" aria-label="Clear selected image" onClick={(event) => { event.preventDefault(); onChange(null); }} className="rounded-full bg-white p-2 text-slate-500 shadow-sm hover:text-red-500"><X size={17}/></button>}
    </span>
  </label>;
}
