import { getDiary } from "@/data/get";
import MovieGrid from "./movie-grid";

export default async function MovieCalendar(){
    const films = await getDiary();
    return <MovieGrid films={films} />
};