import Sidebar from '../components/Sidebar.jsx'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-8 py-8 max-w-5xl">{children}</main>
    </div>
  )
}
