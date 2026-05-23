"use client";
import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { motion } from "framer-motion";
export interface Item {
  title: string
  year: string
  genre: string
  imageLink: string
  link: string
  ott: string
  description: string
}

import { useEffect, useState } from "react";
import BlurFade from "./magicui/blur-fade";
import { X } from "lucide-react";
import { BLUR_FADE_DELAY } from "@/data/constants";

export function NowWatchingItem({items}:{items: readonly Item[]}) {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState<Item | null>(null);
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
    {isActive && activeItem && (
      <>
        <div className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm" onClick={() => {setIsActive(false); setActiveItem(null);}}></div>
        <motion.div layout layoutId="nowWatching" className="fixed flex flex-col self-center inset-0 h-96 xl:h-[70vh] w-max max-w-[80vw] xl:max-w-2xl z-10 mx-auto bg-muted rounded-md">
        <div>
          <X onClick={() => {setIsActive(false); setActiveItem(null);}} className="absolute top-2 right-2 cursor-pointer" />
        </div>
        <Item key={activeItem.title} variant="outline" role="listitem">
                <motion.div layoutId="nowWatchingImage">

                <ItemMedia variant="image" className="size-28 [&_img]:object-contain">
                  <Image
                    src={activeItem.imageLink}
                    alt={activeItem.title}
                    width={100}
                    height={100}
                    className=""
                    />
                </ItemMedia>
                    </motion.div>
                <ItemContent>
                  <motion.div layoutId="nowWatchingTitle">
                  <ItemTitle>
                    {activeItem.title}
                  </ItemTitle>
                  </motion.div>
                  <ItemDescription>{activeItem.year}</ItemDescription>
                  <ItemDescription>{activeItem.genre}</ItemDescription>
                  <ItemDescription>{activeItem.ott}</ItemDescription>
                </ItemContent>
                <motion.a layoutId="nowWatchingLink" href={activeItem.link} target="_blank">
                <ItemContent className="flex-none text-center">
                  <ItemDescription>Watch</ItemDescription>
                </ItemContent>
                </motion.a>
        </Item>
        <p className="p-4 overflow-auto text-justify">{activeItem.description}</p>
        </motion.div>
      </>
      )}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Now Watching</h2>
          </BlurFade>
    <div className="flex w-full flex-col gap-6">
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <ItemGroup className="gap-4 ">
          {items.map((item) => (
            <motion.div key={item.title}  onClick={() => {setIsActive(true); setActiveItem(item)}} className="hover:bg-muted/40 cursor-pointer duration-300" layoutId="nowWatching">
            <Item variant="outline" role="listitem">
              <motion.div layoutId="nowWatchingImage">
                <ItemMedia variant="image" className="[&_img]:object-contain">
                  <Image
                    src={item.imageLink}
                    alt={item.title}
                    width={100}
                    height={100}
                    />
                </ItemMedia>
                </motion.div>
                <ItemContent>
                  <motion.div layoutId="nowWatchingTitle">
                  <ItemTitle className="line-clamp-1">
                    {item.title} -{" "}
                    <span className="text-muted-foreground">{item.year}</span>
                  </ItemTitle>
                  </motion.div>
                  <ItemDescription>{item.genre}</ItemDescription>
                </ItemContent>
                <motion.a layoutId="nowWatchingLink" onClick={(e)=> e.stopPropagation()} href={item.link} target="_blank">
                <ItemContent className="flex-none text-center">
                  <ItemDescription>Watch</ItemDescription>
                </ItemContent>
                </motion.a>
            </Item>
            </motion.div>
          ))}
     
      </ItemGroup>
    </BlurFade>
    </div>
    </>

  )
}
