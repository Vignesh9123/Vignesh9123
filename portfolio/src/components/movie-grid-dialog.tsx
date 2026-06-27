"use client";
import { useId, useState } from "react";
import { Film } from "./movie-grid";
import {AnimatePresence, motion} from 'framer-motion'
import Image from "next/image";
import { Edit3, Heart, LucideRepeat, X } from "lucide-react";

function HeartIcon({ fill }: { fill: "full" | "half" | "empty" }) {
    const id = useId();
  
    return (
      <svg width={16} height={16} viewBox="0 0 16 16" className="inline-block">
        {fill === "half" && (
          <defs>
            <clipPath id={id}>
              <rect x="0" y="0" width="12" height="19" />
            </clipPath>
          </defs>
        )}
        
        <Heart size={16} fill="none" stroke="orange" strokeWidth={1.5} />
        
        {fill !== "empty" && (
          <Heart
            fill="orange"
            stroke="none"
            size={16}
            clipPath={fill === "half" ? `url(#${id})` : undefined}
          />
        )}
      </svg>
    );
  }
export const MovieGridDialog = ({films, setIsActive}: {films:Film[], setIsActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} 
            className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm" onClick={() => setIsActive(false)}></motion.div>
            <motion.div
             exit={{ opacity: 0 }}
            layoutId="movieGrid" className="fixed inset-0 h-[70vh] w-[80vw] bg-muted z-10 flex self-center justify-self-center rounded-md">
            <div className="absolute bg-muted z-[100000] rounded-md -top-4 -right-2">
            <X onClick={() => {setIsActive(false);}} className="cursor-pointer" />

            </div>
                <div className="grid grid-cols-1 md:grid-cols-4 w-[98%] mx-auto mt-2 snap-y snap-mandatory overflow-y-auto scrollbar-thin [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-stone-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-stone-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"> {/*TODO: Use cn */}
                    {films.map((film, index) => (
                        <motion.div 
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                         
                        key={film.name+film.link} 
                        layout 
                        id={film.name+film.link}
                        className="relative">
                        <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.span
                            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-700/[0.8] block -z-[5] rounded-xl"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { duration: 0.15 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.15, delay: 0.2 },
                            }}
                          />
                        )}
                      </AnimatePresence>
                          <a href={film.link} target="_blank" rel="noopener noreferrer" className="h-full block p-2 snap-start">
                            <div className="relative h-full w-full mx-auto flex items-center justify-self-center ">

                       
                            <Image height={1920} width={1080} src={film.image} alt={film.name} className="object-cover w-full h-full rounded-md " />
                            <div className="absolute bottom-0 pb-1 h-2/3 w-full bg-gradient-to-t from-black/80 from-50% via-black/20 to-transparent p-2">
                                <div className="flex flex-row justify-between w-full absolute bottom-2 pr-3">
                                    <div>

                                    <p className="text-lg font-bold text-white line-clamp-2">{film.name} <span className="text-xs">({film.releaseYear})</span></p>
                                    <div className="text-sm flex flex-col 2xl:flex-row 2xl:items-center">
                                    <span className="inline-flex gap-0.5">
                                        {Array.from({ length: 5 }, (_, i) => {
                                            const diff = film.rating - i;
                                            const fill = diff >= 0.75 ? "full" : diff >= 0.25 ? "half" : "empty";
                                            return <HeartIcon key={i} fill={fill} />;
                                        })}
                                    </span>
                                    <span className="bg-muted 2xl:ml-2 p-1 rounded w-fit">
                                        {new Date(film.watchedOn).toLocaleString('en-IN', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                    </div>
                                    <div className="self-end">
                                        {film.isARewatch && <LucideRepeat  size={30} fill="none" stroke="green">
                                        <title>It is a rewatch</title>
                                        </LucideRepeat>}
                                        {film.liked && <Heart size={30} fill="red" stroke="none">
                                        <title>I liked it</title>
                                        </Heart>}
                                        {film.hasReviewed && <Edit3 size={25} fill="none" stroke="yellow">
                                        <title>I have written a review for this</title>
                                        </Edit3>}
                                    </div>
                                </div>
                            </div>
                            </div>
                          </a>
                        </motion.div>
                    ))}
                </div>
           </motion.div>
           </>
    )
}
