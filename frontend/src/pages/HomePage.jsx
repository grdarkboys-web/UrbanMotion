import React from "react";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white fixed top-0 left-0 z-50">
        <div className="font-bold text-lg">Urban Motion</div>
        <div className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Marketplace</a>
          <a href="#">Legit Check</a>
          <a href="#">Forum</a>
        </div>
        <div className="flex gap-3 text-sm">
          <button className="px-4 py-1 rounded-full bg-gray-200">Login</button>
          <button className="px-4 py-1 rounded-full bg-black text-white">Sign Up</button>
        </div>
      </div>

      <div className="w-full h-[420px] bg-[#2A0F0F] flex flex-col justify-center items-center text-center text-white mt-16">
        <h2 className="text-xl font-semibold">Toko Sepatu dan Legit Check</h2>
        <h2 className="text-xl font-semibold mt-1">Pertama di <span className="text-red-400">Jawa Timur</span></h2>
        <p className="text-xs mt-4 opacity-70">Founded in 2024</p>
        <h1 className="text-4xl font-bold tracking-widest mt-2">9999</h1>
        <p className="text-xs opacity-70">User Aktif</p>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex gap-3 text-xs">
          <button className="px-3 py-1 rounded-full bg-red-500 text-white">Semua</button>
          <button className="px-3 py-1 rounded-full bg-gray-200">Nike</button>
          <button className="px-3 py-1 rounded-full bg-gray-200">Adidas</button>
          <button className="px-3 py-1 rounded-full bg-gray-200">New Balance</button>
          <button className="px-3 py-1 rounded-full bg-gray-200">Luxury</button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 max-w-5xl">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="p-4 shadow rounded-xl border hover:shadow-lg transition">
              <div className="w-full h-32 bg-gray-200 rounded"></div>
              <p className="mt-3 text-sm font-semibold">Nama Sneaker {i}</p>
              <p className="text-xs opacity-60 mt-1">Colorway Random</p>
              <p className="text-sm font-bold mt-2">IDR 2.XXX.XXX</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-center mt-10 mb-16 text-sm">
        Jangan Malu Terlihat <span className="text-red-500">Miskin</span><br/>
        Malulah Jika Menggunakan Barang <span className="text-red-500">Kawe</span>
      </div>
    </div>
  );
}
