import AudiobookCard from "@/components/AudiobookCard";
import { audiobookData } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <div className="mt-9 flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Audiobooks</h1>
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
