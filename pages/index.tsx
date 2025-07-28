import Head from "next/head";

const products = [
  {
    title: "Echo Dot (5th Gen)",
    description: "Smart speaker with Alexa - perfect for smart home control.",
    image: "https://m.media-amazon.com/images/I/61u48FEsJSL._AC_SL1000_.jpg",
    link: "https://www.amazon.com/dp/B09B8V1LZ3?tag=yourtrackingid-20",
  },
  {
    title: "Ring Video Doorbell",
    description: "See, hear, and speak to visitors from your phone or Echo device.",
    image: "https://m.media-amazon.com/images/I/71Axv-+yTgL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B08N5N6RSS?tag=yourtrackingid-20",
  },
  {
    title: "Kindle Paperwhite",
    description: "Waterproof e-reader with a glare-free display—great for travel.",
    image: "https://m.media-amazon.com/images/I/61tuqP0pKYL._AC_SL1000_.jpg",
    link: "https://www.amazon.com/dp/B08KTZ8249?tag=yourtrackingid-20",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <Head>
        <title>AT's AI Tech Picks</title>
      </Head>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">AT's AI Gadget Picks</h1>
        <p className="text-xl text-slate-300 max-w-xl mx-auto">
          Discover the best trending AI-powered gadgets for your smart home, productivity, and reading enjoyment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-700 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-slate-300 mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-center text-slate-400 text-sm">
        <p>
          As an Amazon Associate, AT earns from qualifying purchases. &copy; {new Date().getFullYear()} AT Tech Picks
        </p>
      </footer>
    </div>
  );
}
