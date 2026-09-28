export default function ConceptCard({ title, explanation, example }) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-700">{explanation}</p>
            {example && (
                <p className="mt-3 rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-600">
                    <span className="font-medium">Example:</span>{example}
                </p>
            )}
        </div>
    )
}