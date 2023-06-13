import axios from 'axios';

const instance = axios.create({
  headers: {
    Authorization: 'Bearer testtoken',
  },
});

// export const getApiResource = async (url) => {
//   try {
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: 'Bearer testtoken',
//       },
//     });

//     if (!res.ok) {
//       console.error(res.status);
//       return false;
//     }
//     return await res.json();
//   } catch (error) {
//     console.error(error.message);
//     return false;
//   }
// };

export const getApi = async (url) => {
  try {
    const response = await instance.post(url, {});

    return response;
  } catch (err) {
    console.error(err.message);
  }
};
