AI Prediction Hub - Frontend (React)

ระบบหน้าบ้าน (Frontend) สำหรับเชื่อมต่อและแสดงผลการทำนายจากโมเดล Machine Learning พัฒนาด้วย React และ Tailwind CSS

✨ ฟีเจอร์เด่น

Modern UI: ออกแบบด้วย Shadcn/ui และ Tailwind CSS ให้ความรู้สึกพรีเมียม

Responsive Design: ใช้งานได้ทุกอุปกรณ์ (Mobile, Tablet, Desktop)

Real-time Feedback: แสดงผลการประเมินทันทีพร้อมกราฟความน่าจะเป็น

Smooth Animations: ใช้ Framer Motion เพื่อสร้างประสบการณ์การใช้งานที่ดี

🧪 เทคโนโลยีที่ใช้

Core: React 18, Vite, TypeScript

Styling: Tailwind CSS, Lucide Icons, Shadcn/ui

State & Animation: Framer Motion, Sonner (Toast Notifications)

API Fetching: Axios / Native Fetch

⚙️ การตั้งค่า API

ต้องระบุ URL ของหลังบ้านในไฟล์ src/config/api.ts:

export const API_URL = '[http://127.0.0.1:8000](http://127.0.0.1:8000)';


🚀 วิธีเริ่มใช้งาน

ติดตั้ง Dependencies:

npm install


รันเซิร์ฟเวอร์พัฒนา:

npm run dev


หมายเหตุ: หน้าเว็บจะรันอยู่ที่ http://localhost:5173

📁 โครงสร้างโปรเจกต์

src/pages: หน้าหลักของแต่ละระบบทำนาย

src/components: คอมโพเนนต์ UI ต่างๆ

src/config: การตั้งค่าการเชื่อมต่อ API

© 2024 AI Prediction Project