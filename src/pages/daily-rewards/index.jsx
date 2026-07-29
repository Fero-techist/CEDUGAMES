import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { CalendarCheck, Coins, Flame, Plus, RefreshCw, Save, Trash2, Users } from "lucide-react";
import { toast } from "react-toastify";

const field = "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100";
const defaults = { isEnabled: true, timezone: "Africa/Lagos", title: "Daily learning reward", subtitle: "Come back every day and grow your streak!", rewards: [{ day: 1, coins: 10 }], repeatCycle: true, resetAfterMissedDays: 1 };

export default function DailyRewardsAdmin() {
  const [settings, setSettings] = useState(defaults), [activity, setActivity] = useState([]), [summary, setSummary] = useState({}), [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0 });
  const [loading, setLoading] = useState(true), [saving, setSaving] = useState(false);
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [config, log] = await Promise.all([axios.get("/admin/daily-checkin/settings"), axios.get(`/admin/daily-checkin/activity?page=${pagination.page}&limit=${pagination.limit}`)]);
      setSettings(config.data.settings); setActivity(log.data.checkins || []); setSummary(log.data.summary || {}); setPagination((value) => ({ ...value, ...log.data.pagination }));
    } catch (error) { toast.error(error.response?.data?.message || "Unable to load daily rewards."); }
    finally { setLoading(false); }
  }, [pagination.page, pagination.limit]);
  useEffect(() => { load(); }, [load]);
  const updateReward = (index, coins) => setSettings((value) => ({ ...value, rewards: value.rewards.map((reward, item) => item === index ? { ...reward, coins } : reward) }));
  const addDay = () => setSettings((value) => ({ ...value, rewards: [...value.rewards, { day: value.rewards.length + 1, coins: Number(value.rewards.at(-1)?.coins || 10) }] }));
  const removeDay = (index) => setSettings((value) => ({ ...value, rewards: value.rewards.filter((_, item) => item !== index).map((reward, item) => ({ ...reward, day: item + 1 })) }));
  const save = async (event) => {
    event.preventDefault(); setSaving(true);
    try {
      const payload = { ...settings, resetAfterMissedDays: Number(settings.resetAfterMissedDays), rewards: settings.rewards.map((reward, index) => ({ day: index + 1, coins: Number(reward.coins) })) };
      const response = await axios.put("/admin/daily-checkin/settings", payload); setSettings(response.data.settings); toast.success("Daily reward program updated.");
    } catch (error) { toast.error(error.response?.data?.message || "Unable to save settings."); }
    finally { setSaving(false); }
  };
  if (loading) return <div className="min-h-screen bg-slate-50 py-24 text-center text-slate-400">Loading daily rewards…</div>;
  const cards = [
    ["Today's check-ins", summary.today, CalendarCheck, "text-purple-600 bg-purple-100"],
    ["Participating players", summary.unique_players, Users, "text-blue-600 bg-blue-100"],
    ["Coins awarded", summary.total_awarded, Coins, "text-amber-600 bg-amber-100"],
    ["Longest streak", summary.longest_streak, Flame, "text-orange-600 bg-orange-100"],
  ];
  return <div className="min-h-screen bg-slate-50 p-4 sm:p-7"><div className="mx-auto max-w-7xl">
    <header className="mb-6 flex flex-wrap items-center justify-between gap-4"><div><h1 className="text-2xl font-black text-slate-900">Daily rewards</h1><p className="mt-1 text-sm text-slate-500">Configure check-in streaks, reward amounts, timing and player messaging.</p></div><button onClick={load} className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2 font-bold"><RefreshCw size={16}/>Refresh</button></header>
    <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(([label, value, Icon, color]) => <article key={label} className="rounded-2xl bg-white p-5 shadow-sm"><div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl ${color}`}><Icon size={20}/></div><p className="text-sm text-slate-500">{label}</p><p className="mt-1 text-2xl font-black">{Number(value || 0).toLocaleString()}</p></article>)}</div>
    <form onSubmit={save} className="mb-6 rounded-2xl bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4"><div><h2 className="text-lg font-black">Program settings</h2><p className="text-sm text-slate-500">Changes apply to future claims; past ledger entries remain unchanged.</p></div><label className="flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold"><input type="checkbox" checked={settings.isEnabled} onChange={(e) => setSettings({ ...settings, isEnabled: e.target.checked })}/>{settings.isEnabled ? "Program active" : "Program paused"}</label></div>
      <div className="grid gap-5 md:grid-cols-2">
        <Label text="Player-facing title"><input required className={field} value={settings.title} onChange={(e) => setSettings({ ...settings, title: e.target.value })}/></Label>
        <Label text="Timezone" help="Determines when a new check-in day begins."><input required className={field} value={settings.timezone} onChange={(e) => setSettings({ ...settings, timezone: e.target.value })} placeholder="Africa/Lagos"/></Label>
        <Label text="Subtitle"><input className={field} value={settings.subtitle} onChange={(e) => setSettings({ ...settings, subtitle: e.target.value })}/></Label>
        <Label text="Reset streak after missed days"><input required min="1" max="365" type="number" className={field} value={settings.resetAfterMissedDays} onChange={(e) => setSettings({ ...settings, resetAfterMissedDays: e.target.value })}/></Label>
      </div>
      <label className="mt-5 flex items-center gap-3 text-sm font-bold"><input type="checkbox" checked={settings.repeatCycle} onChange={(e) => setSettings({ ...settings, repeatCycle: e.target.checked })}/>Repeat the schedule after its final day</label>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-black">Streak reward schedule</h3><p className="text-sm text-slate-500">Add as many days as needed and set each coin award independently.</p></div><button type="button" onClick={addDay} className="flex items-center gap-2 rounded-xl bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700"><Plus size={16}/>Add day</button></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{settings.rewards.map((reward, index) => <div key={index} className="flex items-end gap-2 rounded-xl border bg-slate-50 p-3"><Label text={`Day ${index + 1}`}><input required min="1" max="1000000" type="number" className={field} value={reward.coins} onChange={(e) => updateReward(index, e.target.value)}/></Label><button disabled={settings.rewards.length === 1} type="button" onClick={() => removeDay(index)} className="mb-0.5 rounded-xl p-3 text-red-500 hover:bg-red-50 disabled:opacity-30"><Trash2 size={17}/></button></div>)}</div>
      <button disabled={saving} className="mt-7 flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-black text-white disabled:opacity-50"><Save size={17}/>{saving ? "Saving…" : "Save program"}</button>
    </form>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="text-lg font-black">Recent check-ins</h2><p className="mb-5 text-sm text-slate-500">Every award is linked to the coin ledger for full auditability.</p>
      {activity.length ? <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b text-slate-500"><tr><th className="p-3">Player</th><th className="p-3">Date</th><th className="p-3">Streak</th><th className="p-3">Schedule day</th><th className="p-3">Reward</th><th className="p-3">Claimed</th></tr></thead><tbody>{activity.map((item) => <tr key={item.id} className="border-b last:border-0"><td className="p-3"><b>{item.user_name}</b><p className="text-xs text-slate-400">{item.user_email}</p></td><td className="p-3">{item.checkin_date}</td><td className="p-3 font-bold">{item.streak} days</td><td className="p-3">Day {item.cycle_day}</td><td className="p-3 font-black text-emerald-600">+{Number(item.reward_amount).toLocaleString()}</td><td className="p-3 text-slate-500">{new Date(item.created_at).toLocaleString()}</td></tr>)}</tbody></table></div> : <div className="py-14 text-center text-slate-400">No check-ins yet.</div>}
      <div className="mt-5 flex items-center justify-between text-sm text-slate-500"><span>{pagination.total} check-ins</span><div className="flex gap-2"><button disabled={pagination.page <= 1} onClick={() => setPagination((value) => ({ ...value, page: value.page - 1 }))} className="rounded-lg border px-3 py-2 disabled:opacity-40">Previous</button><button disabled={pagination.page * pagination.limit >= pagination.total} onClick={() => setPagination((value) => ({ ...value, page: value.page + 1 }))} className="rounded-lg border px-3 py-2 disabled:opacity-40">Next</button></div></div>
    </section>
  </div></div>;
}
function Label({ text, help, children }) { return <label className="block w-full text-sm font-bold text-slate-700">{text}{help && <span className="ml-1 font-normal text-slate-400">{help}</span>}<span className="mt-1.5 block">{children}</span></label>; }
