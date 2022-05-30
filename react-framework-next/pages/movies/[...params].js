import { useRouter } from 'next/router';

function Detail({ params }) {
  const router = useRouter();
  //const [title, movieId] = router.query.params || [];
  const [title] = params;
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export default Detail;

export async function getServerSideProps({ query: { params } }) {
  return {
    props: {
      params,
    },
  };
}
