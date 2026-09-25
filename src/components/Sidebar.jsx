import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/transform', label: 'Transform' },
  { to: '/history', label: 'History' },
  { to: '/settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-slate-200 bg-white h-screen sticky top-0 flex flex-col">
      <div className="px-5 py-5 border-b border-slate-200">
        <p className="font-semibold text-slate-900">Accessibility AI</p>
        <p className="text-xs text-slate-500 mt-0.5">Learning, made visual</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-slate-200">
        <div className="flex items-center gap-2 rounded-md px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
            U
          </div>
          <div className="text-sm">
            <p className="font-medium text-slate-900">Your account</p>
            <p className="text-xs text-slate-500">placeholder</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
