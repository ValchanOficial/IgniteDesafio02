import { Button } from "./Button";
import { GenreResponseProps } from "./Content";

interface SideBarProps {
  genres: Array<GenreResponseProps>,
  selectedGenreId: number,
  handleClickButton: Function,
}

export function SideBar({genres, selectedGenreId, handleClickButton}:SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}