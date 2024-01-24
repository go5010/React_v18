import { useQuery } from "react-query";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const fetchAlubms=

export const ReactQuery = () => {
  const {} = useQuery<Album[]>(["albums"], fetchAlbums);
  return (
    <div>
      <p>React Query</p>
    </div>
  );
};

// 1