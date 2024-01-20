import { axiosClient } from "../clients/axios";

interface ISearchVideoProps {
  query: string;
}

export const searchVideo = async ({ query }: ISearchVideoProps) => {
  try {
    const response = await axiosClient().get("/search", {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error while searching video:", error);
    throw error;
  }
};
