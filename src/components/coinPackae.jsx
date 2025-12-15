export default function CoinPackages() {
  const packages = [
    {
      amount: "100 Coins",
      price: "₦500",
      sold: "1,234 sold",
      colorSold: "bg-[#D97706]",
      color: "from-[#FFFBEB] to-[#FEF3C7]",
    },
    {
      amount: "500 Coins",
      price: "₦2,000",
      sold: "892 sold",
      colorSold: "bg-[#9333EA]",
      color: "from-[#FAF5FF] to-[#F3E8FF]",
    },
    {
      amount: "1000 Coins",
      price: "₦3,500",
      colorSold: "bg-[#4F46E5]",
      sold: "567 sold",
      color: "from-[#EEF2FF] to-[#E0E7FF]",
    },
    {
      amount: "5000 Coins",
      price: "₦15,000",
      colorSold: "bg-[#DB2777]",
      sold: "234 sold",
      color: "from-[#FDF2F8] to-[#FDF2F8]",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Popular Coin Packages</h2>

      <div className="space-y-3">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl text-white bg-gradient-to-r ${pkg.color}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base text-[#1F2937] font-semibold">
                {pkg.amount}
              </h3>
              <span
                className={`text-sm ${pkg.colorSold} px-3 py-1 rounded-full`}
              >
                {pkg.sold}
              </span>
            </div>
            <p className="text-sm text-[#1F2937] mt-2">{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
