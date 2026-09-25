/**
 * Single source of truth for talking to the backend.
 *
 * Every future API call (transform, history, auth) should be added
 * here as its own function, not scattered inside components. That
 * way if the backend URL or request shape changes, this is the only
 * file that needs to change.
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function checkHealth() {
  const res = await fetch(`${API_URL}/health`)
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`)
  }
  return res.json()
}
