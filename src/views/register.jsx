import { useState } from "react";

export default function Register() {
  const [memberType, setMemberType] = useState("general");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">สมัครสมาชิก</h2>

        <div className="flex justify-between gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
          {["general", "student", "shop"].map((type) => (
            <button
              key={type}
              onClick={() => setMemberType(type)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                memberType === type ? "bg-white shadow text-red-700" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {type === "general" ? "บุคคลทั่วไป" : type === "student" ? "นักศึกษา" : "ร้านค้า"}
            </button>
          ))}
        </div>

        {/* ฟอร์มกรอกข้อมูล */}
        <form className="space-y-4">
          <input type="email" placeholder="อีเมล" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 outline-none" required />
          <input type="tel" placeholder="หมายเลขโทรศัพท์" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 outline-none" required />

          {(memberType === "general" || memberType === "student") && (
            <>
              <input type="text" placeholder="ชื่อ-นามสกุล" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              <div>
                <label className="block text-xs text-gray-500 mb-1">วัน/เดือน/ปีเกิด</label>
                <input type="date" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              </div>
            </>
          )}

          {memberType === "general" && (
            <input type="text" placeholder="รหัสบัตรประชาชน (13 หลัก)" maxLength="13" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
          )}

          {memberType === "student" && (
            <>
              <input type="text" placeholder="ชื่อสถานศึกษา" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              <input type="text" placeholder="รหัสประจำตัวนักศึกษา" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              <div>
                <label className="block text-xs text-gray-500 mb-1">แนบรูปภาพบัตรนักศึกษา</label>
                <input type="file" accept="image/*" className="w-full px-4 py-2 border rounded-md text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-red-50 file:text-red-700 hover:file:bg-red-100" required />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">วันหมดอายุของบัตร</label>
                <input type="date" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              </div>
            </>
          )}

          {memberType === "shop" && (
            <>
              <input type="text" placeholder="ชื่อผู้ประกอบการ" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              <input type="text" placeholder="ชื่อสถานประกอบการ" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              <input type="text" placeholder="เลขทะเบียนนิติบุคคล" className="w-full px-4 py-2 border rounded-md focus:ring-red-500 outline-none" required />
              <div>
                <label className="block text-xs text-gray-500 mb-1">แนบเอกสารนิติบุคคล</label>
                <input type="file" accept=".pdf,image/*" className="w-full px-4 py-2 border rounded-md text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-red-50 file:text-red-700 hover:file:bg-red-100" required />
              </div>
            </>
          )}

          <button type="submit" className="w-full bg-red-700 text-white font-semibold py-3 rounded-md hover:bg-red-800 transition duration-300 mt-6 shadow-md">
            ยืนยันการสมัครสมาชิก
          </button>
        </form>
      </div>
    </div>
  );
}