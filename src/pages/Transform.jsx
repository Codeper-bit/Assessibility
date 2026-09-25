import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'

export default function Transform() {
  const navigate = useNavigate()
  const [pastedText, setPastedText] = useState('')

  return (
    <MainLayout>
      <button
        onClick={() => navigate('/')}
        className="text-sm text-slate-500 hover:text-slate-900 mb-4"
      >
        ← Back
      </button>

      <h1 className="text-xl font-semibold text-slate-900 mb-1">
        New transformation
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Add your material below. Nothing is processed yet — this is the
        Day 1 interface only.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-900 mb-1">
          Material title
        </label>
        <input
          type="text"
          placeholder="e.g. Chapter 4 — Cell Biology"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border border-dashed border-slate-300 bg-white p-5 text-center">
          <p className="text-sm font-medium text-slate-900">Upload a PDF</p>
          <p className="mt-1 text-xs text-slate-500">
            PDF processing isn't connected yet.
          </p>
          <input type="file" disabled className="mt-3 w-full text-xs" />
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-900 mb-2">
            Or paste text
          </p>
          <textarea
            value={pastedText}
            onChange={(e) => setPastedText(e.target.value)}
            placeholder="Paste your notes or passage here..."
            rows={5}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
      </div>

      <button
        disabled
        title="Not connected to the backend yet"
        className="mb-8 inline-flex items-center rounded-md bg-slate-300 px-4 py-2 text-sm font-medium text-slate-500 cursor-not-allowed"
      >
        Transform (coming soon)
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-medium text-slate-900 mb-2">
            Original material
          </h2>
          <div className="rounded-lg border border-slate-200 bg-white p-4 h-48 text-sm text-slate-500 overflow-auto">
            {pastedText || 'Your uploaded or pasted material will appear here.'}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-900 mb-2">
            Visual transformation
          </h2>
          <div className="rounded-lg border border-slate-200 bg-white p-4 h-48 flex items-center justify-center text-center text-sm text-slate-500">
            Your visual learning experience will appear here.
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
