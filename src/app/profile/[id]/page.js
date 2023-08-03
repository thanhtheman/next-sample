export default function UserProfile ({params}) {
    return  (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1>This is a single profie {params.id}</h1>
        </div>
    )
}