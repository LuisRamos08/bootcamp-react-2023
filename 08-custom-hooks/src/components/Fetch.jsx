import useFetch from "../hooks/useFetch";

const API_URL = "https://rickandmortyapi.com/api/character";

const Fetch = () => {

  const {data:users, isLoading, error, refetch} = useFetch(API_URL)

  const getRandomPage = (totalPages) => Math.ceil( Math.random()*totalPages )

  return (

    <>
    <button
        style={{marginBottom: '20px'}} 
        onClick={()=>refetch(`${API_URL}?page=${getRandomPage(10)}`)}
        >
        Refetch
    </button>

        {isLoading
            ? <h1>Loading...</h1>
            : error
                ? <h2>{error}</h2>
                :
                <>
                    {users?.results?.map( user => (
                        <div key={user.id}>
                            <img src={user.image} alt={user.name} />
                            <h3>{user.name}</h3>
                        </div>
                    ))}

                </>}
    </>

  );
};

export default Fetch;
