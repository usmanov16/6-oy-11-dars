// import React from 'react'
// import { Link } from 'react-router-dom';
// import useGetData from '../hooks/useGetData';

// function Movies() {
//     const {data, error, loading} = useGetData()

//     if(loading) {
//       return <span className="loading loading-dots loading-lg"></span>
//     }
    
    
//     return <div>
//       <ul className='grid grid-cols-3 gap-4'>
//         {data && data.map((obj) => {
//           return <li key={obj.id}>
//             <Link  className=' block rounded-md shadow-sm p-5 w-full h-full' to={"/movie"}>
//             <img src={obj.image} alt="" />
//             <h2>{obj.title}</h2>
//             </Link>
         
//           </li>
//         })}
//       </ul>
//     </div>;
// }

// export default Movies
import React from 'react'
import { Link } from 'react-router-dom';
import useGetData from '../hooks/useGetData';

function Movies() {
    const {data, error, loading} = useGetData()

    if(loading) {
      return <span className="loading loading-dots loading-lg"></span>
    }
    
    return (
      <div>
        <ul className="grid grid-cols-3 gap-6">
          {data && data.map((obj) => (
            <li key={obj.id}>
              <Link 
                className="block rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition" 
                to={`/movie/${obj.id}`}
              >
                <div className="w-full h-full ">
                  <img 
                    src={obj.image} 
                    alt={obj.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-black">{obj.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Movies;
