"use client";

import AudiobookCard from "@/components/AudiobookCard";
import { audiobookData } from "@/constants";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Audiobooks</h1>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {tasks?.map(({ _id, text }) => (
            <div className="text-white-1" key={_id}>
              {text}
            </div>
          ))}
        </main>
        <div className="audiobook_grid">
          {audiobookData.map(({ id, title, description, imgURL }) => (
            <AudiobookCard
              key={id}
              title={title}
              description={description}
              imgUrl={imgURL}
              audiobookId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
