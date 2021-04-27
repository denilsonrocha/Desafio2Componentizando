import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface Genres{
  selectedId : number;
  genres: GenreResponseProps[];
  onRequestSelect: (id: number) => void;
}

export function SideBar({selectedId ,genres, onRequestSelect }: Genres) {
  return(
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onRequestSelect(genre.id)}
              selected={selectedId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  );
}