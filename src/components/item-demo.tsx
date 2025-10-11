import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

interface Item {
  title: string
  year: string
  genre: string
  imageLink: string
  link: string
}

export function NowWatchingItem({items}:{items: readonly Item[]}) {
  return (
    <div className="flex w-full  flex-col gap-6">
      <ItemGroup className="gap-4">
        {items.map((item) => (
          <Item key={item.title} variant="outline" role="listitem">
              <ItemMedia variant="image">
                <Image
                  src={item.imageLink}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {item.title} -{" "}
                  <span className="text-muted-foreground">{item.year}</span>
                </ItemTitle>
                <ItemDescription>{item.genre}</ItemDescription>
              </ItemContent>
              <a href={item.link} target="_blank">
              <ItemContent className="flex-none text-center">
                <ItemDescription>Watch</ItemDescription>
              </ItemContent>
              </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
