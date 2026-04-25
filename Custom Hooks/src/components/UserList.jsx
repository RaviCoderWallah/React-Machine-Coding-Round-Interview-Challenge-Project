import useFetch from "../hooks/useFetch"

const UserList = () => {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/users?delay=2000");

    if (error) return <h1>Something went wrong ! </h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <div>UserList</div>
            <ul>
                {
                    data.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default UserList