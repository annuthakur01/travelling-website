import { useState } from "react";

// Dummy images data
const images = [
  {
    id: 1,
    src: "/images/Rectangle 159 (1).png",
    alt: "Mountain landscape with blue sky",
    thumbnail: "/images/Rectangle 159 (1).png",
  },
  {
    id: 2,
    src: "/images/Rectangle 160.png",
    alt: "Tropical palm trees",
    thumbnail: "/images/Rectangle 160.png",
  },
  {
    id: 3,
    src: "/images/Rectangle 161.png",
    alt: "Green plant leaves",
    thumbnail: "/images/Rectangle 161.png",
  },
  {
    id: 4,
    src: "/images/Rectangle 162.png",
    alt: "Ocean waves",
    thumbnail: "/images/Rectangle 162.png",
  },
  {
    id: 5,
    src: "/images/Rectangle 163.png",
    alt: "Forest scene",
    thumbnail: "/images/Rectangle 163.png",
  },
  {
    id: 6,
    src: "/images/Rectangle 129.png",
    alt: "Forest path with sunlight",
    thumbnail: "/images/Rectangle 129.png",
  },
];

export default function ThamesRiver() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  console.log("Selected image:", selectedImage);  // Debugging
  console.log("Images array:", images);  // Debugging

  return (
    <div className="max-w-[1170px] mx-auto p-4">
      <h1 className="text-2xl max-w-[740px] md:text-3xl font-bold mb-4">
        Vintage Double Decker Bus Tour & Thames River Cruise
      </h1>

      <div className="flex  sm:flex-row  items-start sm:items-center mb-6 gap-2">
        <div className="flex items-center text-gray-600">
          <span>Gothenburg</span>
        </div>
        <div className="flex items-center">
          <span className="text-[yellow]">★★★★★</span>
          <span className="ml-2 text-sm text-gray-600">(348 reviews)</span>
        </div>
      </div>

      {/* Main image display */}
      <div className="flex flex-wrap gap-8">
        <div>
          <div className="relative max-w-[770px] h-[300px] md:h-[460px] border-2 border-primary mb-4 overflow-hidden rounded-lg">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 max-w-[770px] gap-2">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative h-16 sm:h-20 cursor-pointer border-2 transition-all rounded-md overflow-hidden ${selectedImage.id === image.id ? "border-primary" : "border-transparent hover:border-primary/50"}`}
                onClick={() => handleThumbnailClick(image)}
              >
                <img
                  src={image.thumbnail || "/placeholder.svg"}
                  alt={`Thumbnail for ${image.alt}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 shadow-lg lg:w-[320px] w-full">
          <h3 className="font-[700]">Booking</h3>
          <div className="flex mt-5 flex-col gap-2">
            <label htmlFor="">from</label>
            <input type="date" className="border p-2 w-full bg-[#F4F4F5] rounded-md" />
          </div>
          <div className="flex mt-5 flex-col gap-2">
            <label htmlFor="">To</label>
            <input type="date" className="border p-2 w-full bg-[#F4F4F5]" />
          </div>
          <div className="flex flex-col mt-5 gap-2">
            <label htmlFor="">No. of guest</label>
            <select name="" id="" className="border p-2 w-full bg-[#F4F4F5]">
              <option value=""> 1 adults</option>
              <option value="">2 adults</option>
            </select>
          </div>
          <div className="flex mt-5 flex-col ">
            <p className="text-[#778088] text-[14px] font-[600] text-center ">subtotal</p>
            <div className="text-[#7BBCB0] text-[36px] font-[800] text-center">$78.90</div>
            <button className="w-full py-3 bg-[#7BBCB0] text-[white] rounded-md"> confirm booking</button>
            <button className="w-full border-[2px] border py-3 justify-center mt-2 flex items-center gap-2  rounded-md"><i class="fa-solid fa-heart"></i>Save to wishlist</button>
            <button className="w-full border-[2px] border py-3 justify-center mt-2 flex items-center gap-2  rounded-md"> <i class="fa-solid fa-share"></i>Share the activity</button>
          </div>
        </div>
      </div>


    </div>
  );
}
