import { DataProp } from "@/interface/interface";
import httpService from "./http.service";

const botEndpoint = "/lib/api/contact";

const botService = {
  get: async (payload: DataProp) => {
    console.log("payload", payload);
    const { data } = await httpService.get(
      botEndpoint,
      {
        params: {
          name: `${payload.name}`,
          phone: `${payload.phone}`,
          email: `${payload.email}`,
          message: `${payload.message}`,
        },
      }
      // {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/json",
      //   },
      // }
    );

    return data;
  },
  post: async (payload: DataProp) => {
    const { data } = await httpService.post(botEndpoint, payload, {
      headers: {
        "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_SITE_URL}`,
        "Content-Type": "application/json",
      },
    });

    return data;
  },
};

export default botService;
