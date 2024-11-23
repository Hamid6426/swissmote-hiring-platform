import AdminNavbar from '../components/Navbars/AdminNavbar';
import Footer from '../components/Common/Footer';

export default function AdminLayout({ children }) {
  return (
    <div className="min-w-100 min-vh-100 d-flex flex-row bg-dark2 text-dark" style={{ backgroundColor: "#ddd" }}>
      <AdminNavbar />
      <main className="py-3 px-3 rounded-4 min-vh-100 w-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
