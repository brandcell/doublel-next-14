'use client'

import Image from "next/image";
import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import DoubleLLogo from "@/components/DoubleLLogo";

export default function Home() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    fetch("/api/hello", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
      }),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("success", data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };




  return (
    <main className="flex flex-col gap-[40px]">
      <nav className="absolute w-full p-4 max-w-screen-xl ">
        <ul className="flex justify-between text-white ">
          <li>Our Homes</li>
             <DoubleLLogo fill="white" />
          <li>CONTACT</li>
        </ul>
      </nav>

      <section className="hero min-h-screen w-full bg-hero-bg bg-center bg-cover flex flex-col justify-end">

        <div className="flex flex-col items-center">
           <h1 className=' text-center font-cg text-3xl text-llcream'>An intimate stay <span className="italic text-llbeige">crafted </span>by passionate <span className="italic text-llbeige">travellers</span></h1>

         <Image alt="logo" width={50} height={50} src="/logo.svg" />

          <Image alt="arrow" width={20} height={90} className="" src="/hero_arrow.svg"></Image>
           <Image alt="circle" className="circle" width={120}  height={120} src="/circle.svg"></Image>
        </div>


      </section>

      <section className="intro p-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[30px] gap-x-7">

          <h1 className="text-4xl font-cg md:col-span-2 md:text-[50px] md:leading-[50px] lg:text-[68px] lg:leading-[80px]">Welcome to the most authentic stay. this is where you live to laugh and love</h1>

            <Image
              className="w-full"
              width={350}
              height={360}
              alt="villa"
              src="/villa-images/Mint Villa-21.webp"
            />

          <h3 className="md:col-start-2"> 
            {`Our stay is more than just a place to sleep. Double L Villa is the
            conclusion of the founder’s experiences of hospitality from various
            parts of the world, who developed a passion for creating intimate
            experiences`}</h3>
          
          <h3 className=""> Indulge yourself in luxurious interior designs and intimate experiences to
            provide unparalleled comfort for your close friends and loved ones.{" "}</h3>



        </div>


      </section>


      <section className="villa-section p-4">

      <div className="grid grid-cols-1 md:grid-cols-3 ">
         <h1 className="font-cg text-[60px]">Our Villas</h1>
      <p
            className={`font-ws text-[18px] leading-[28px] sm:block max-w-[350px] md:col-start-3`}
          >
            Our three hidden gems are located in the heart of beautiful Penang
            island
          </p>
      </div>
     
      <div className="grid grid-cols-3 justify-items-center">{villas.map((villa,index)=>(<div className="relative flex justify-center" key={index}>

          <Image className="w-[32vw]" src={villa.cover} width={300} height={300}/>
        
          
          <p className="absolute bottom-6 font-cg text-llbeige text-4xl">{villa.title}</p></div>))}</div>

        


      </section>

      <section className="p-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Image
              className="w-screen sm:w-[350px] aspect-square md:w-[520px]"
              width={350}
              height={360}
              alt="villa-img"
              src="/villa-images/Mint Villa-25.webp"
            />

          <h1 className="font-cg text-4xl lg:text-6xl">Your vacation may be short, but the memories made will never be forgotten</h1>
          <p className="max-w-[350px]">  {`Relieve stress and leave the chaos of the modern world at our
            shores. We create tailored treatments to aid you on your unique
            restorative journey. This is relaxation like you've never
            experienced before`}</p>

        </div>
      </section>

      <section className="facilities p-4">
      <div className="grid md:grid-cols-2  gap-5">

            <div className="flex flex-col justify-evenly gap-6">
              <h1 className="text-6xl font-cg">Our Perks</h1>
              <p>We have your best comfort in mind, which is why we are providing.
              </p>

              <div className="grid grid-cols-4 gap-6 justify-items-center">{amenities.map((amenity)=>(<div className="flex flex-col items-center" key={amenity.title}> <Image alt={amenity.img} width={45} height={45} src={amenity.img} />
                <p
                  className={` font-ws text-[16px] leading-[26px] tracking-tight text-center`}
                >
                  {amenity.title}
                </p></div>))}</div>
            </div>

         <Image
              className="perks-image object-cover w-full"
                
                width={300}
                height={300}
       alt="perks-img"
              src="/villa-images/Mint Villa-14.webp"
            ></Image>

      </div>
      </section>

      <footer className="p-20 bg-llcream">

      <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 100 }}
            >
              <h1
                className={`${ss.variable} font-ss text-[60px] leading-[70px]`}
              >
                Thank You
              </h1>

              <p
                className={`${ws.variable} font-ws mb-8`}
              >{`We'll be in touch with you shortly`}</p>

              <button
                className={`${ws.variable} font-ws border-[1px] uppercase border-black px-[24px] py-[16px]`}
                onClick={() => setIsSubmitted(false)}
              >
                Back
              </button>
            </motion.div>
          ) : (
            <motion.div
              id="contact-us"
              className="flex flex-col gap-10 md:flex-row md:justify-between m-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div className="flex flex-col gap-10 max-w-[450px]">
                <h1
                  className={` font-cg text-[43px] lg:text-[68px] lg:leading-[68px] leading-[43px]`}
                >
                  Discuss Your{" "}
                  <span className="text-llbeige">
                    <i>Unique Requirement </i>
                  </span>
                  With Us
                </h1>

                <div className="flex flex-row w-[100px] justify-between">
                  <Link
                    href="https://www.instagram.com/doublelvilla/?igshid=YmMyMTA2M2Y%3D"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <img src="/insta_brown.svg"></img>{" "}
                  </Link>
                  <Link
                    href="https://wa.me/+60129862373"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <img src="/wa_brown.svg"></img>
                  </Link>
                </div>
              </motion.div>

              <motion.div className="flex flex-col sm:max-w-[400px] justify-center">
                <form method="POST" className=" flex flex-col gap-10  ">
                  <>
                    <label className="hidden" for="username">
                      Username
                    </label>
                    <input
                      className={`placeholder:text-llbeige font-ws bg-llcream border-b border-black text-black focus:outline-none focus:shadow-none focus:ring-0 focus:border-b-2  `}
                      id="username"
                      type="text"
                      name="Name"
                      value={name}
                      onChange={({ target }) => setName(target?.value)}
                      placeholder="Your Name"
                    />
                  </>
                  <>
                    <label className="hidden" for="email">
                      Email
                    </label>

                    <input
                      className={`placeholder:text-llbeige font-ws bg-llcream border-b border-black text-black focus:outline-none focus:shadow-none focus:ring-0 focus:border-b-2  `}
                      id="email"
                      type="email"
                      name="Email"
                      value={email}
                      onChange={({ target }) => setEmail(target?.value)}
                      placeholder="Email"
                    />
                  </>
                  <>
                    <label className="hidden" for="phone">
                      Email
                    </label>

                    <input
                      className={`placeholder:text-llbeige font-ws bg-llcream border-b border-black text-black focus:outline-none focus:shadow-none focus:ring-0 focus:border-b-2  `}
                      id="phone"
                      type="phone"
                      value={phone}
                      name="Phone"
                      onChange={({ target }) => setPhone(target?.value)}
                      placeholder="Phone"
                    />
                  </>
                  <button
                    className={ `font-ws px-[24px] py-[12px] bg-llbrown text-white w-[280px] md:self-start self-center uppercase`}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>



      </footer>

      


    </main>
  );
}



export const villas = [
  {
    active: true,
    title: "Mint Villa",
    id: "mintvilla",
    comingsoon: "",
    logo: "/mint_logo.png",
    cover: "/villa-images/Mint Villa-21.webp",
    img: [
      "/villa-images/Mint Villa-23.webp",
      "/villa-images/Mint Villa-1.webp",
      "/villa-images/Mint Villa-2.webp",
      "/villa-images/Mint Villa-3.webp",
      "/villa-images/Mint Villa-4.webp",
      "/villa-images/Mint Villa-5.webp",
      "/villa-images/Mint Villa-6.webp",
      "/villa-images/Mint Villa-7.webp",
      "/villa-images/Mint Villa-8.webp",
      "/villa-images/Mint Villa-9.webp",
      "/villa-images/Mint Villa-10.webp",
      "/villa-images/Mint Villa-11.webp",
      "/villa-images/Mint Villa-12.webp",
      "/villa-images/Mint Villa-13.webp",
      "/villa-images/Mint Villa-14.webp",
      "/villa-images/Mint Villa-15.webp",
      "/villa-images/Mint Villa-16.webp",
      "/villa-images/Mint Villa-17.webp",
      "/villa-images/Mint Villa-18.webp",
      "/villa-images/Mint Villa-19.webp",
      "/villa-images/Mint Villa-20.webp",
      "/villa-images/Mint Villa-21.webp",
      "/villa-images/Mint Villa-22.webp",
      "/villa-images/Mint Villa-24.webp",
      "/villa-images/Mint Villa-25.webp",
    ],
    para: "Mint Villa is a perfect getaway designed for couples. The interior is inspired by Scandinavian designs and have been carefully furnished for maximum comfort for couples.",
    minnights: 4,
    guests: 4,
    beds: {
      type: "Double",
      number: 2,
    },
    facilities: {
      shower: 2,
      toilet: 1,
      dippingpool: true,
      laundry: true,
    },
  },
  {
    active: false,
    title: "Salt Villa",
    id: "saltvilla",
    comingsoon: "Coming Soon",
    cover: "/saltvilla_cardimg.png",
    img: [
      "/saltvilla_cardimg.png",
      "/mintvilla_cardimg.png",
      "/mintvilla_cardimg.png",
    ],
    para: "Salt Villa is a perfect getaway designed for couples. The interior is inspired by Scandinavian designs and have been carefully furnished for maximum comfort for couples.",
    minnights: 4,
    guests: 4,
    beds: {
      type: "Double",
      number: 2,
    },
    facilities: {
      shower: 2,
      toilet: 1,
      dippingpool: false,
      laundry: true,
    },
  },
  {
    active: false,
    title: "Pearl Villa",
    id: "pearlvilla",
    comingsoon: "Coming Soon",
    cover: "/pearlvilla_cardimg.png",
    img: [
      "/pearlvilla_cardimg.png",
      "/mintvilla_cardimg.png",
      "/mintvilla_cardimg.png",
    ],
    para: "Mint Villa is a perfect getaway designed for couples. The interior is inspired by Scandinavian designs and have been carefully furnished for maximum comfort for couples.",
    minnights: 4,
    guests: 4,
    beds: {
      type: "Double",
      number: 2,
    },
    facilities: {
      shower: 2,
      toilet: 1,
      dippingpool: true,
      laundry: true,
    },
  },
];

export const amenities = [
  { title: "Wifi", img: "/amenities/wifi.svg" },
  { title: "Toiletries", img: "/amenities/shampoo.svg" },
  { title: "Hair dryer", img: "/amenities/hairdryer.svg" },
  { title: "Waitstaff", img: "/amenities/waitstaff.svg" },
  { title: "Laundry Service", img: "/amenities/laundry.svg" },
  { title: "Room Service", img: "/amenities/roomservice.svg" },
  { title: "Sanitisation", img: "/amenities/sanitisation.svg" },
];
