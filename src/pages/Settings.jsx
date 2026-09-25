import MainLayout from '../layouts/MainLayout.jsx'

export default function Settings() {
  return (
    <MainLayout>
      <h1 className="text-xl font-semibold text-slate-900 mb-1">Settings</h1>
      <p className="text-sm text-slate-500 mb-6">
        Account and preference settings will live here.
      </p>

      <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-500">
        Nothing configurable yet — this page is a placeholder for Day 1.
      </div>
    </MainLayout>
  )
}
