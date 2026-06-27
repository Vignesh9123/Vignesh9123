"use client"
import { FocusCards } from "./ui/focus-cards";
import { useEffect, useState } from "react";
export interface Film {
        name: string;
        link: string;
        releaseYear: string;
        rating: number;
        watchedOn: Date;
        liked: boolean;
        isARewatch: boolean;
        hasReviewed: boolean;
        reviewWritten: string | null;
        image: string;
}
import { motion, AnimatePresence } from "framer-motion";

import { MovieGridDialog } from "./movie-grid-dialog";
import BlurFade from "./magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/data/constants";
import { Button } from "./ui/button";
export default function MovieGrid({films}: {films:Film[]}) {
    const [isActive, setIsActive] = useState(false);
    const removeMovieCardStyles = () =>{
      const movieCards = document.getElementsByClassName("movie-card")
          for(let i = 0; i < movieCards.length; i++) {
            movieCards[i].removeAttribute("style")
          }
    }
    useEffect(() => {
        if (isActive) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = ""
        }
        return () => {
          document.body.style.overflow = ""
        }
    }, [isActive])
    
    return (
        <>
       <AnimatePresence>
  {isActive && <MovieGridDialog films={films} setIsActive={setIsActive} />}
</AnimatePresence>
        <div className="flex flex-col">

        <motion.div 
        onHoverStart={removeMovieCardStyles}
        id="movieGrid" layoutId="movieGrid"  className="duration-300 p-4 rounded-md group">
          <BlurFade delay={ BLUR_FADE_DELAY * 8 }>
            <FocusCards cards={films.map(film => {return {title: film.name, src: film.image, link: film.link}}).slice(0,4)}/>
          </BlurFade>
        </motion.div>
       
          <Button variant={"outline"} size={"sm"} name="View my recently watched films" aria-label="View my recently watched films" onClick={() => setIsActive(!isActive)} className="text-sm text-muted-foreground mb-2 w-fit ml-auto mr-4">View more</Button>
        </div>
          </>
    );
}
