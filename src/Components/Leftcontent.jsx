import React from "react";

const articles = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rdlcq_LYmgC0utFdHQFkph8R_UNJX-qXzA&s",
    authorInitial: "C",
    author: "Charlie",
    date: "Nov 16, 2023",
    subtitle: "The Importance of Professional Furniture Cleaning for Businesses",
    title: "Revive, Refresh, Impress – Professional Furniture Cleaning for a Spotless Business!",
  },
  {
    image: "https://media.istockphoto.com/id/1365606525/photo/shot-of-a-bucket-of-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=_Xz3e-_WGlQC2zXstHaK_AI9N76LNag_KbRioNlM1hQ=",
    authorInitial: "T",
    author: "Thomas",
    date: "May 9, 2022",
    subtitle: "How to Remove Stains and Odors from Office and Commercial Furniture",
    title: "Fresh & Stain-Free: Keep Your Office Furniture Looking and Smelling Great!",
  },
  {
    image: "https://prolinerangehoods.com/cdn/shop/articles/whats-included-in-a-professional-house-cleaning-checklist-included-343704.jpg?v=1719132299",
    authorInitial: "L",
    author: "Lucas",
    date: "Sep 10, 2023",
    subtitle: "Eco-Friendly Furniture Cleaning: Safe and Natural Ways to Refresh Your Home",
    title: "Go Green, Stay Clean – Natural Solutions for a Fresh Home!",
  },
  {
    image: "https://maidforyounh.com/wp-content/uploads/2020/12/house-cleaning-services.jpg",
    authorInitial: "A",
    author: "Alexander",
    date: "Sep 18, 2023",
    subtitle: "How to Extend the Life of Your Sofa with Proper Cleaning Techniques",
    title: "Preserve Your Sofa’s Beauty – Clean Smarter, Last Longer",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqy7FXBSI_MDx24A0CGcNTHZwkHJ_h0kbYw&s",
    authorInitial: "E",
    author: "Edward",
    date: "May 7, 2023",
    subtitle: "The Ultimate Guide to Upholstery Cleaning: Keep Your Furniture Looking New",
    title: "Revive, Refresh, and Protect – Expert Upholstery Cleaning for a Like-New Look!",
  },
];

export default function LeftContent() {
  return (
    <div className="px-4 md:px-6 space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
        <p className="text-gray-500">Discover our most recent stories and insights</p>
      </div>

      {/* Article Cards */}
      {articles.map((article, index) => (
        <div
          key={index}
          className="group flex flex-col md:flex-row gap-4 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Image */}
          <div className="md:w-1/3 overflow-hidden">
            <img
              src={article.image}
              alt="Article"
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 md:w-2/3 space-y-3 relative">
            {/* Author Info */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-800">
                {article.authorInitial}
              </div>
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>

            {/* Subtitle as Heading */}
            <h3 className="relative w-fit text-2xl font-bold text-gray-800 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-500 group-hover:after:w-full">
              {article.subtitle}
            </h3>

            {/* Title as Description */}
            <p className="text-base text-black">{article.title}</p>

            <button className="text-blue-600 hover:underline pt-1">Read More →</button>
          </div>
        </div>
      ))}
    </div>
  );
}
