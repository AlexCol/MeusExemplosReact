import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../api/users.service";

export function Exemple() {
  const service = usersService;
  const queryClient = useQueryClient();
  const { isPending, error, data, isFetched, refetch, isFetching, dataUpdatedAt } = useQuery({
    queryKey: ["users"],
    queryFn: service.getUsersFn,
    staleTime: 5_000, // dados ficam "fresh" por 10s: nesse período, remontar o componente não refaz a busca
  });

  /*******************************************************/
  /* Metodos                                             */
  /*******************************************************/
  const onClickRefetch = () => {
    refetch();
  };

  const onClickClearKey = () => {
    queryClient.removeQueries({ queryKey: ["users"] });
  };

  /*******************************************************/
  /* Montagem do HTML                                    */
  /*******************************************************/
  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erro...</p>;
  }

  return (
    <div>
      <button
        onClick={onClickRefetch}
        disabled={isFetching}
      >
        {isFetching ? "Buscando..." : "Refetch"}
      </button>
      <button onClick={onClickClearKey}>Clear Key</button>
      <p>Última atualização: {new Date(dataUpdatedAt).toLocaleTimeString()}</p>
      <h1>Exemple</h1>
      {isFetched && (
        <ul>
          {data?.map((user: { id: string | number; name: string; email: string }) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
