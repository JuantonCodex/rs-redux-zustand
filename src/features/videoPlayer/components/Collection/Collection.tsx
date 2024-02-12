interface ICollectionParms {
  id: string;
  children: React.ReactNode;
}
export function Collection({ id, children }: Readonly<ICollectionParms>) {
  return (
    <aside
      data-testid={id}
      className="bottom-0 right-0 top-0 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 md:absolute md:w-80"
    >
      {children}
    </aside>
  );
}
