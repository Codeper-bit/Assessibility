import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function History() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <h1 className="text-xl font-semibold text-slate-900 mb-1">
        Transformation history
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Every visual learning experience you create will be saved here.
      </p>

      <EmptyState
        title="Nothing saved yet"
        description="Once you run a transformation, it will show up here for you to revisit."
        actionLabel="Start a transformation"
        onAction={() => navigate('/transform')}
      />
    </MainLayout>
  )
}
