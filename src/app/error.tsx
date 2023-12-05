"use client"

export default function ErrorPage({
    error,
    reset,
}: {
    error: any
    reset: () => void
}) {
    return (
        <div>
            <p>{JSON.stringify(error)}</p>
            <h2>Something went wrong!</h2>
            <button className="btn bg-blue-300 " onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
