import Seo from '../components/Seo';
import { useRouter } from 'next/dist/client/router';

function Home({ results }) {
  const router = useRouter();
  /*   const onClick = (moveId, title) => {
    router.push(
      {
        pathname: `movies/${moveId}`,
        query: {
          title,
        },
      },
      `movies/${moveId}`
    );
  }; */

  const onClick = (movieId, title) => {
    router.push(`movies/${title}/${movieId}`);
  };

  return (
    <div className='container'>
      <Seo title='Home' />
      {results?.map((movie) => (
        <div
          className='movie'
          key={movie.id}
          onClick={() => onClick(movie.id, movie.title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();

  return {
    props: {
      results,
    },
  };
}
