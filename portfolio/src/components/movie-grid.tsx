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
import { motion } from "framer-motion";

import { MovieGridDialog } from "./movie-grid-dialog";
import BlurFade from "./magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/data/constants";

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
        {isActive && (
          <MovieGridDialog films={films} setIsActive={setIsActive}/>
        )}
        <motion.div 
        onHoverStart={removeMovieCardStyles}
        id="movieGrid" layoutId="movieGrid" onClick={() => setIsActive(!isActive)} className="hover:bg-muted/40 cursor-pointer duration-300 p-4 rounded-md group">
          <BlurFade delay={ BLUR_FADE_DELAY * 8 }>
            <p className="text-sm text-muted-foreground mb-2">Click to view more</p>
            <FocusCards cards={films.map(film => {return {title: film.name, src: film.image, link: film.link}}).slice(0,4)}/>
          </BlurFade>
        </motion.div>
        </>
    );
}