//i made some changes to the code,
//commented out the first one then delted it (i like writing cloean code 🌚)

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "../../components/ArticleCard";

const Article = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10 relative pb-32">
      <ArticleCard />
      <ArticleCard />
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-5">
        <button className="inline-flex items-center justify-center gap-x-2">
          <span className="border-primary border-2 px-6 py-3 rounded-lg font-bold text-primary flex items-center">
            More Articles
            <FaArrowRight className="w-3 h-3 ml-2" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Article;
