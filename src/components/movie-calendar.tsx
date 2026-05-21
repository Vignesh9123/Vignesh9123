import { getDiary } from "@/data/get";
import MovieGrid from "./movie-grid";

export default async function MovieCalendar(){
    const films = await getDiary();
    return (
        <>
            <h1 className="text-3xl font-bold">Recently Watched</h1>
            <MovieGrid films={films} />
        </>
    )
};