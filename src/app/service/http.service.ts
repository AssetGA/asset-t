// "use client";

// import axios from "axios";
// import configFile from "../../../config.json";

// // axios.defaults.headers.common["Content-Type"] = "application/json";

// // Используем функцию
// const apiUrl = process.env.NEXT_PUBLIC_SITE_URL;
// export function createHttpWithLang() {
//   return axios.create({
//     baseURL: `${apiUrl}`,
//   });
// }

// const http = createHttpWithLang();

// function transformData(data: any) {
//   return data && !data._id
//     ? Object.keys(data).map((key) => ({
//         ...data[key],
//       }))
//     : data;
// }

// // export function transformData<T>(data: any): T {
// //   if (data && typeof data === "object" && !("_id" in data)) {
// //     return Object.keys(data).map((key) => ({
// //       ...data[key],
// //     })) as T;
// //   }
// //   return data as T;
// // }

// http.interceptors.response.use(
//   (res) => {
//     if (configFile.isFireBase) {
//       res.data = { content: transformData(res.data) };
//     }
//     res.data = { content: res.data };
//     return res;
//   },
//   function (error) {
//     const expectedErrors =
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 500;

//     if (!expectedErrors) {
//       console.log("Something was wrong. Try it later", error);
//     }
//     return Promise.reject(error);
//   }
// );

// const httpService = {
//   get: http.get,
//   post: http.post,
//   put: http.put,
//   delete: http.delete,
//   patch: http.patch,
// };

// export default httpService;
