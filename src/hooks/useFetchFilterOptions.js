// import { useState, useEffect } from 'react';

// const useFetchFilterOptions = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//           throw new Error(`HTTP error ${response.status}`);
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, options]);

//   return [data, loading, error];
// };

// export default useFetchFilterOptions;