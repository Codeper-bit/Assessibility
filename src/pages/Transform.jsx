import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import { runTransform } from '../services/api.js'

export default function Transform() {
  const navigate = useNavigate()
  const [pastedText, setPastedText] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const canTransform = (selectedFile || pastedText.trim()) && !isLoading

  const handleTransform = async () => {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await runTransform({
        file: selectedFile,
        text: pastedText.trim() || undefined,
      })

      if (response.status === 'error') {
        setError(response.message)
      } else {
        setResult(response.message)
      }
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

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
        Add your material below, then hit Transform.
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
            PDF text extraction isn't wired in yet — this just sends the file.
          </p>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setSelectedFile(e.target.files[0] || null)}
            className="mt-3 w-full text-xs"
          />
          {selectedFile && (
            <p className="mt-2 text-xs text-slate-600">
              Selected: {selectedFile.name}
            </p>
          )}
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
        onClick={handleTransform}
        disabled={!canTransform}
        className={`mb-8 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${canTransform
          ? 'bg-slate-900 text-white hover:bg-slate-800'
          : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }`}
      >
        {isLoading ? 'Transforming…' : 'Transform'}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-medium text-slate-900 mb-2">
            Original material
          </h2>
          <div className="rounded-lg border border-slate-200 bg-white p-4 h-48 text-sm text-slate-500 overflow-auto">
            {selectedFile?.name ||
              pastedText ||
              'Your uploaded or pasted material will appear here.'}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-900 mb-2">
            Visual transformation
          </h2>
          <div className="rounded-lg border border-slate-200 bg-white p-4 h-48 flex items-center justify-center text-center text-sm">
            {error ? (
              <span className="text-rose-600">{error}</span>
            ) : result ? (
              <span className="text-slate-900">{result}</span>
            ) : (
              <span className="text-slate-500">
                Your visual learning experience will appear here.
              </span>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}