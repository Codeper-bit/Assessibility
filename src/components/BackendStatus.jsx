import { useEffect, useState } from 'react'
import { checkHealth } from '../services/api.js'

/**
 * Small, honest status indicator. Actually calls the backend —
 * nothing here is faked. If the backend isn't running, it says so.
 */
export default function BackendStatus() {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    checkHealth()
      .then(() => setStatus('connected'))
      .catch(() => setStatus('offline'))
  }, [])

  const styles = {
    checking: 'bg-slate-100 text-slate-500',
    connected: 'bg-emerald-100 text-emerald-700',
    offline: 'bg-rose-100 text-rose-700',
  }

  const labels = {
    checking: 'Checking backend…',
    connected: 'Backend connected',
    offline: 'Backend offline',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}
