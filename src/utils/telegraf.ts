const baseUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`;

// export const sendMessage = async (message: string) => {
//   const url = `${baseUrl}sendMessage?chat_id=${process.env.CHAT_ID}&text=${message}`;
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return response.ok;
// };

export const sendMessage = async (message: string) => {
  const response = await fetch(`${baseUrl}sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
      text: message,
    }),
  });

  const data = await response.json();
  console.log(data); // Посмотри, что именно приходит

  return response.ok;
};
