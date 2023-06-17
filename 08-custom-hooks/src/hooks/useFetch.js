import {useState, useEffect} from 'react'


const useFetch = (initialUrl) => {
    const [url, setUrl] = useState(initialUrl)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const refetch = (newUrl) => {
        setUrl(newUrl)
    }


    useEffect(() => {
        setIsLoading(true)

      fetch(url)
        .then((res) => res.json())
        .then((newData) =>{            
            if(newData.error){
                throw Error(newData.error)
            }   else{
                setData(newData)
            }      
        }    
        )
        .catch(
            (err) => setError(`Ha ocurrido un error. Error: ${err.message}`)
        )
        .finally( 
            ()=> setIsLoading(false)
        )

    }, [url]);


  return {
      data,
      isLoading,
      error,
      refetch
  }
}

export default useFetch