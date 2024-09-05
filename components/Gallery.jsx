import React, { useState } from 'react'
// import Image from 'next/image';


const Gallery = () => {
  let data = [
    {
      id: "1",
      imgSrc: "/cat1.jpg"
    },
    {
      id: "2",
      imgSrc: "/cat2.jpg",
    },
    {
      id: "3",
      imgSrc: "/cat3.jpg",
    },
    {
      id: "4",
      imgSrc: "/cat4.jpg",
    },
    {
      id: "5",
      imgSrc: "/cat5.jpg",
    },
    {
      id: "6",
      imgSrc: "/cat6.jpg",
    },
    {
      id: "7",
      imgSrc: "/cat7.jpg",
    },
    {
      id: "8",
      imgSrc: "/cat8.jpg",
    },
    {
      id: "9",
      imgSrc: "/cat9.jpg",
    },
    {
      id: "10",
      imgSrc: "/cat10.jpg",
    },
    {
      id: "11",
      imgSrc: "/cat11.jpg",
    },
    {
      id: "12",
      imgSrc: "/cat12.jpg",
    },
    {
      id: "13",
      imgSrc: "/cat13.jpg",
    },
    {
      id: "14",
      imgSrc: "/cat14.jpg",
    },
    {
      id: "15",
      imgSrc: "/cat15.jpg",
    },
    {
      id: "16",
      imgSrc: "/cat16.jpg",
    },
    {
      id: "17",
      imgSrc: "/cat17.jpg",
    },
    {
      id: "18",
      imgSrc: "/cat18.jpg",
    },
    {
      id: "19",
      imgSrc: "/cat19.jpg",
    },
    {
      id: "20",
      imgSrc: "/cat20.jpg",
    },
  ]

  const [imageTemplate, setImageTemplate] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const openImage = (imgSrc) => {
    setImageTemplate(imgSrc);
    setOpenModal(true);

  }

  const closeModal = () => {
    setOpenModal(false)
  }


  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-10">
        {data.map((item) => {
          console.log(item)
          return (
            <div key={item.id} >
              <img
                onClick={() => openImage(item.imgSrc)}
                src={item.imgSrc}
                alt={`cat${item.id}`}
                className='max-w-80 rounded-lg border-4 border-slate-100 hover:opacity-50 cursor-pointer'
              />
            </div>
          )
        })}
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden shadow-xl">
          <div className="bg-white p-8 rounded-lg relative items-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-4xl font-bold text-gray-500 hover:text-black "
            >
              &times;
            </button>
            <img src={imageTemplate} alt="cat" className='max-h-96 w-fit mx-auto hover:scale-105 hover:grayscale m-2 rounded-md' />
            <p className="py-4 text-center">Press ESC key or click on ✕ button to close</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery;