import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import EmptyState from '../components/EmptyState.jsx'
import BackendStatus from '../components/BackendStatus.jsx'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="mb-8">
        <div className="mb-3">
          <BackendStatus />
        </div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Turn difficult learning material into visual learning experiences.
        </h1>
        <p className="mt-2 text-slate-600">
          Upload a PDF or paste text, and get a clear visual breakdown —
          diagrams, timelines, concept maps, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <button
          onClick={() => navigate('/transform')}
          className="rounded-lg border border-slate-200 bg-white p-5 text-left hover:border-slate-300 hover:shadow-sm transition"
        >
          <p className="font-medium text-slate-900">Upload material</p>
          <p className="mt-1 text-sm text-slate-500">
            Add a PDF and turn it into a visual explanation.
          </p>
        </button>

        <button
          onClick={() => navigate('/transform')}
          className="rounded-lg border border-slate-200 bg-white p-5 text-left hover:border-slate-300 hover:shadow-sm transition"
        >
          <p className="font-medium text-slate-900">Paste text</p>
          <p className="mt-1 text-sm text-slate-500">
            Paste notes or a passage directly, no file needed.
          </p>
        </button>
      </div>

      <div>
        <h2 className="text-sm font-medium text-slate-900 mb-3">
          Recent transformations
        </h2>
        <EmptyState
          title="No transformations yet"
          description="Your visual learning material will show up here once you create one."
          actionLabel="Start a transformation"
          onAction={() => navigate('/transform')}
        />
      </div>
    </MainLayout>
  )
}
