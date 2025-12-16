import { useState } from "react";
// import {
//   FiBell,
//   FiMail,
//   FiGlobe,
//   FiDownload,
//   FiDollarSign,
// } from "react-icons/fi";
import { SuccessModal } from "../modal";
import CTA from "../../assets/cta.png";
import { FullBTN } from "../button.jsx/Btn";
const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
      enabled ? "bg-purple-500" : "bg-gray-200"
    }`}
  >
    <span
      className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
        enabled ? "translate-x-6" : "translate-x-0"
      }`}
    />
  </button>
);

export default function SettingsPage() {
  const [push, setPush] = useState(false);
  const [email, setEmail] = useState(true);
  const [offline, setOffline] = useState(false);
  const [iap, setIap] = useState(true);
  const [saveChange, setSaveChange] = useState(false);

  const Updatesetting = () => setSaveChange(true);

  return (
    <div>
      <div className="max-w-8xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>

        <section className="mb-10 p-4 bg-white">
          <div>
            <div className="flex items-center justify-between py-4 border-b">
              <div className="flex gap-3">
                {/* <FiBell className="mt-1 text-gray-500" /> */}
                <div>
                  <p className="font-medium text-lg">Push Notifications</p>
                  <p className="text-base text-gray-500">
                    Enable push notifications for new content updates and
                    promotions.
                  </p>
                </div>
              </div>
              <Toggle
                enabled={push}
                onChange={() => setPush(!push)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex gap-3">
              {/* <FiMail className="mt-1 text-gray-500" /> */}
              <div>
                <p className="font-medium text-lg">Email Notifications</p>
                <p className="text-base text-gray-500">
                  Enable email notifications for important announcements and
                  updates.
                </p>
              </div>
            </div>
            <Toggle
              enabled={email}
              onChange={() => setEmail(!email)}
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Content</h2>

          <div className="mb-6">
            <label className="block text-base font-medium mb-2">
              Content Region
            </label>
            <div className="relative">
              {/* <FiGlobe className="absolute left-3 top-3 text-gray-400" /> */}
              <input
                type="text"
                //   placeholder="Enter region"
                className="w-1/3 pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          <div className="flex items-center bg-white p-4 justify-between">
            <div className="flex gap-3">
              {/* <FiDownload className="mt-1 text-gray-500" /> */}
              <div>
                <p className="font-medium text-lg">Offline Content</p>
                <p className="text-base text-gray-500">
                  Allow users to download content for offline access.
                </p>
              </div>
            </div>
            <Toggle
              enabled={offline}
              onChange={() => setOffline(!offline)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Monetization</h2>
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">
              Ad Provider
            </label>
            <div className="relative">
              {/* <FiDollarSign className="absolute left-3 top-3 text-gray-400" /> */}
              <input
                type="text"
                //   placeholder="Enter ad provider"
                className="w-1/3 pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
          <div className="flex items-center bg-white p-4 justify-between">
            <div>
              <p className="font-medium text-lg">In-App Purchases</p>
              <p className="text-base text-gray-500">
                Enable in-app purchases for premium content and features.
              </p>
            </div>
            <Toggle
              enabled={iap}
              onChange={() => setIap(!iap)}
            />
          </div>
          <div className="flex justify-end mt-8">
            <button
              onClick={Updatesetting}
              className="bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition"
            >
              Save Changes
            </button>
          </div>
        </section>
      </div>

      <SuccessModal
        isOpen={saveChange}
        onClose={() => setSaveChange(false)}
      >
        <div className="text-center ">
          <img
            src={CTA}
            alt="cta"
            className=" w-28 h-28 mx-auto"
          />
          <p className=" text-2xl font-bold mb-4">Settings Updated!</p>
          <p className=" text-lg mb-4">
            Changes made have been updated successfully
          </p>

          <FullBTN onClick={() => setSaveChange(false)}>Okay</FullBTN>
        </div>
      </SuccessModal>
    </div>
  );
}
