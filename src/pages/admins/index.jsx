import { useEffect, useState } from "react";
import axios from "axios";
import { ShieldCheck, UserPlus, Users, X } from "lucide-react";
import { toast } from "react-toastify";
import { PERMISSIONS } from "../../data/adminAuth";

const emptyForm = { name: "", email: "", password: "", title: "Administrator", permissions: [] };
const field = "w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100";

export default function Admins() {
  const [admins, setAdmins] = useState([]), [form, setForm] = useState(emptyForm), [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true), [busy, setBusy] = useState(false);
  const load = () => { setLoading(true); axios.get("/auth/admin/admins").then(({ data }) => setAdmins(data.admins || [])).catch((error) => toast.error(error.response?.data?.message || "Unable to load administrators.")).finally(() => setLoading(false)); };
  useEffect(load, []);
  const togglePermission = (key) => setForm((value) => ({ ...value, permissions: value.permissions.includes(key) ? value.permissions.filter((item) => item !== key) : [...value.permissions, key] }));
  const create = async (event) => {
    event.preventDefault(); setBusy(true);
    try {
      if (editing) await axios.patch(`/auth/admin/admins/${editing}`, { name: form.name, email: form.email, title: form.title, permissions: form.permissions });
      else await axios.post("/auth/admin/admins", form);
      toast.success(editing ? "Administrator updated." : "Administrator created."); setForm(emptyForm); setEditing(null); load();
    }
    catch (error) { toast.error(error.response?.data?.message || error.response?.data?.errors?.[0]?.message || "Unable to create administrator."); }
    finally { setBusy(false); }
  };
  const toggleStatus = async (admin) => {
    setBusy(true);
    try { await axios.patch(`/auth/admin/admins/${admin.id}/status`, { isActive: !admin.is_active }); toast.success(admin.is_active ? "Access revoked." : "Access restored."); load(); }
    catch (error) { toast.error(error.response?.data?.message || "Unable to update administrator."); }
    finally { setBusy(false); }
  };
  return <div className="space-y-6 px-6 pb-10 lg:px-8">
    <header><h1 className="text-2xl font-black text-slate-900">Admin management</h1><p className="mt-1 text-sm text-slate-500">Create persisted administrator accounts and control dashboard access.</p></header>
    <div className="grid gap-6 xl:grid-cols-[390px_1fr]">
      <form onSubmit={create} className="h-fit rounded-2xl bg-white p-6 shadow-sm"><div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-purple-100 p-2.5 text-purple-700"><UserPlus size={20}/></span><h2 className="text-lg font-bold">{editing ? "Edit administrator" : "Add administrator"}</h2>{editing && <button type="button" onClick={() => { setEditing(null); setForm(emptyForm); }} className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X size={17}/></button>}</div>
        <div className="space-y-4">{[["name","Full name","text"],["email","Email address","email"],...(!editing ? [["password","Temporary password","password"]] : []),["title","Role title","text"]].map(([name,label,type]) => <label className="block" key={name}><span className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</span><input className={field} type={type} value={form[name]} onChange={(event) => setForm({ ...form, [name]: event.target.value })} required minLength={name === "password" ? 10 : 2}/></label>)}
          <fieldset><legend className="mb-2 text-sm font-semibold text-slate-700">Dashboard access</legend><div className="grid grid-cols-2 gap-2">{PERMISSIONS.map((permission) => <label key={permission.key} className="flex cursor-pointer items-center gap-2 rounded-lg border p-2.5 text-xs text-slate-700 hover:bg-purple-50"><input type="checkbox" checked={form.permissions.includes(permission.key)} onChange={() => togglePermission(permission.key)} className="accent-purple-600"/>{permission.label}</label>)}</div></fieldset>
          <button disabled={busy || !form.permissions.length} className="w-full rounded-xl bg-purple-600 py-3 text-sm font-bold text-white disabled:opacity-50">{editing ? "Save administrator" : "Create administrator"}</button>
        </div>
      </form>
      <section className="overflow-hidden rounded-2xl bg-white shadow-sm"><div className="flex items-center gap-3 border-b p-6"><Users className="text-purple-600" size={22}/><h2 className="text-lg font-bold">Administrators ({admins.length})</h2></div>
        {loading ? <div className="py-24 text-center text-slate-400">Loading administrators…</div> : <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-6 py-4">Admin</th><th className="px-6 py-4">Role</th><th className="px-6 py-4">Access</th><th className="px-6 py-4">Status</th><th className="px-6 py-4 text-right">Control</th></tr></thead><tbody className="divide-y">{admins.map((admin) => <tr key={admin.id}><td className="px-6 py-4"><p className="font-semibold">{admin.name}</p><p className="text-xs text-slate-500">{admin.email}</p></td><td className="px-6 py-4"><span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700"><ShieldCheck size={13}/>{admin.title}</span></td><td className="max-w-xs px-6 py-4 text-xs text-slate-500">{admin.permissions.includes("*") ? "Full access" : admin.permissions.map((key) => PERMISSIONS.find((item) => item.key === key)?.label).filter(Boolean).join(", ")}</td><td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${admin.is_active ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>{admin.is_active ? "Active" : "Revoked"}</span></td><td className="px-6 py-4 text-right">{admin.id !== "super-admin" && <button disabled={busy} onClick={() => toggleStatus(admin)} className={`rounded-lg px-3 py-2 text-xs font-bold ${admin.is_active ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"}`}>{admin.is_active ? "Revoke access" : "Reactivate"}</button>}</td></tr>)}</tbody></table></div>}
      </section>
    </div>
  </div>;
}
