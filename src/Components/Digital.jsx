import React from 'react';

const Digital = () => {
  const blogs = [
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small Business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      categories: ["Tax & Audit", "Management"],
      imageUrl: "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgCg-VvHunDuR-kOIxcVZnSuKM~x7SIm9~wGOyn-XBlLpnTsISSf9f4m4UVFEjfAIcPXI0SfcfzQiwHvray7M1nr-Bz5e4dcEVIlZYaioIlotVTNhyu3NuT-aKwdWPzNgsCnMw0clLu8yw7T7-oggvsFkX88BlA7l8g39OglWQRNGOONjlgsR7TURE9YUvpHirF7vNwXYavR29lQLT5Pi0d7g7XQ56RPRRtycQ0nsqx8UCTr-U3c5ieEjpCVJWF1zNzyTdkUJ~ep7w9zhfCqgWEIJGFJcEteh2d9RFxLktL8jAhH5rvGmY3zljQkVEae0sR6QDvv4nz7mxCs9clm-g__",
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      categories: ["Tax", "Research", "Compliance"],
      imageUrl: "https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZQS2qitWzRnPNcH4xXPqUC5zOg6SOJJFGYvppeygd-vqq3gtfZ~RuGvUJ-RsEGTaN3sixzquR01uVpAUna8rTknT2FxBSD96Vu910csX24A~pcDDSHBHeTGqeRyGMKil34MvJRc0zkSjE5mtbIiaOW6RhvXg0hG5uDg9eMHGcpQAYSwy6IGLBITC0EleXr6GTsBqoGOq9Ua6UiqWHbAnB~5WZgiR0BxktwbzHKsaHQ-ZzxyKeyAp63RXo-CFWVq1g2a8IcIKuEZGWa2aP7TwXKXgg~Bpxl6hhonLKldSBC3qka7Md3kmnjJ8F3yhI48dYKkpw2y7N6JQtuD1LgZz9w__",
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      categories: ["Audit", "Money Back"],
      imageUrl: "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgCg-VvHunDuR-kOIxcVZnSuKM~x7SIm9~wGOyn-XBlLpnTsISSf9f4m4UVFEjfAIcPXI0SfcfzQiwHvray7M1nr-Bz5e4dcEVIlZYaioIlotVTNhyu3NuT-aKwdWPzNgsCnMw0clLu8yw7T7-oggvsFkX88BlA7l8g39OglWQRNGOONjlgsR7TURE9YUvpHirF7vNwXYavR29lQLT5Pi0d7g7XQ56RPRRtycQ0nsqx8UCTr-U3c5ieEjpCVJWF1zNzyTdkUJ~ep7w9zhfCqgWEIJGFJcEteh2d9RFxLktL8jAhH5rvGmY3zljQkVEae0sR6QDvv4nz7mxCs9clm-g__",
    },
    {
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      categories: ["Money", "Management"],
      imageUrl: "https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nO9bHVu3kMCR7oUFELfU11pDRZeUFW-WuHdMuh6IhSaRvpdSXzml4KUNbqzKCsbxBIeHaRFyG5l8mZ~9zgdi9Ne5YdJDLtjrJu~bZC5-gjyjP1li0G17LziY~rAaxc2LOWpuoEX6Sp-nVzBPY683OjOQaJXd2qsr43-X3d1UsezviRV4SeSvDPMLg13FGFBdU-qKyfdx1OVIFO1LP70mL3EIu7NZ4dDYHY2nTW9wC6WkpJrCPzlhW~bJ7jBd~S34145kbM95xqHCYAhyeW52RrUuszth~O4tun1oZ1mgLijZIc4I~eDo8u-zY1G9VLjVPNKDgKHZTx0VG24DYzw46g__",
    },
    {
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      categories: ["Tax Return", "News", "Audit"],
      imageUrl: "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aleAeMSBlzGsNB1De87bzng3cvgny~QYEUH01Q~Qu93diOS~nUoCCYmjOsMvcHAjiOx6GGXBa6Wney2JQXkJiO7QLAOk1l1tm7BnIHnuUj2zaXDwdAC8Sm7YCPqE~mBIjGIJjkRFAJ1UhdVBqpcz1wdqwdqYiEN8G5BVGTtfB~1pAdx4xNwr477CiuV8XuIIfbDuq~1ec606flvW~kmnviC295yBkLCaJaseN6l2~TJBAn6YutsoqoAZP2O6z3oH5Rrta7Z5uajl-VixaUoe5EIAVzf2ZUksxHbsxmE9y5BGQ6O83VHamuqztmpMgLX-k2kZs~5z40r4P5VbQgJkhw__",
    },
    {
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn’t need to be complicated, but how do you get started?",
      categories: ["Private Limited Company", "Customer Success"],
      imageUrl: "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=equr9614OEIlGGAnUo4ZyCtg7-~KzM6Qd6OTeXFz7F6i~~1hRsxhoTSq5ZxTOhwUvZzyq-OChH7wNYYcUitMHUCX4TjZOmXXSWq1DGWfl0t8-6VCefHTJV60m4aKoEJDfdpqmN3a01AYW4xVyqgaNNBoMj0zk0WV5nlwF7fQYiRPuy5S9rpi4sClLab0r9ssYbr3sHMRGz8PmTHPsblPnOTgBHWCEVZmgmONqDSRbIA5yhki0kKYx5YjxJFtz8ePrJ8e7fnZaYuCOjaLwurDkhuusAKkwRcIhOrGpX774AnSaF2lNCxx5CMJueihvHcFRN0Am~DGIbnigDXWkbV9CQ__",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Explore Our Blogs</h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Accelerate Digital Transformation
        </h3>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-64 object-cover" src={blog.imageUrl} alt={blog.title} />
            <div className="p-6">
              <div className="text-gray-500 text-sm">
                {blog.author} • {blog.date}
              </div>
              <h4 className="mt-2 text-xl font-semibold text-gray-900">{blog.title}</h4>
              <p className="mt-2 text-gray-600">{blog.description}</p>
              <div className="mt-4">
                {blog.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full px-2 py-1 mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-indigo-600 hover:text-indigo-900">
          Show more blogs →
        </button>
      </div>
    </div>
  );
};

export default Digital;
