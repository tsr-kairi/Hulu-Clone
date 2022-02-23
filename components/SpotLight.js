import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SpotLight() {
  const [selected, setSelected] = useState("LIVE SPORTS");
  const [categories] = useState({
    "LIVE SPORTS": [
      {
        id: 1,
        title: "Live Sports",
        imgUrl:
          "https://res.cloudinary.com/adityakmr7/image/upload/v1644419730/07_jbqlrv.jpg",
        description:
          "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
      },
    ],
    "BREAKING NEWS": [
      {
        id: 2,
        title: "Breaking News",
        imgUrl:
          "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/05_itowaz.jpg",
        description:
          "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
      },
    ],
    "BIGGEST EVENTS": [
      {
        id: 3,
        title: "Biggest Events",
        imgUrl:
          "https://res.cloudinary.com/adityakmr7/image/upload/v1644419729/06_amgfad.jpg",
        description:
          "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
      },
    ],
  });

  const handleSelection = (index) => {
    const tab = "LIVE SPORTS";
    if (index === 0) {
      tab = "LIVE SPORTS";
    } else if (index === 1) {
      tab = "BREAKING NEWS";
    } else if (index === 2) {
      tab = "BIGGEST EVENTS";
    }
    setSelected(tab);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${categories[selected][0].imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[70vh] md:h-screen w-full bg-black flex-col flex justify-center from-black via-black"
    >
      <div className={`flex flex-col justify-center w-[90%] md:w-2/3 m-auto`}>
        <div className="">
          <Tab.Group onChange={(index) => handleSelection(index)}>
            <Tab.List className="md:w-6/12 space-x-5 flex mb-8">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "py-2.5 text-xs leading-5 font-extrabold text-white uppercase tracking-wider",

                      selected ? "text-white " : "text-[#ffffff66] hover:text-gray-400"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames("text-white", "focus:outline-none focus:ring-2")}
                >
                  <ul className="">
                    {posts.map((post, i) => (
                      <li key={i} className="">
                        <h3 className="font-semibold md:font-black text-[31px] md:text-[62px] text-white leading-5">
                          {post.title}
                        </h3>
                        <p className="text-white pr-9 mt-12 text-2xl max-w-lg font-normal leading-12">
                          {post.description}
                        </p>
                        <p className="text-xs mt-16">
                          Live TV plan required. Regional restrictions, blackouts and
                          additional terms apply. See details
                        </p>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default SpotLight;
