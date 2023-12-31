import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { MessageCircle } from "lucide-react";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center p-4">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 p-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="text-2xl w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              moduleIndex={0}
              title="Desvendando o Redux"
              lessonsCount={12}
            />
            <Module
              moduleIndex={1}
              title="Desvendando o Redux"
              lessonsCount={15}
            />
            <Module
              moduleIndex={2}
              title="Desvendando o Redux"
              lessonsCount={10}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
