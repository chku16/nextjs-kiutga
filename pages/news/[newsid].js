import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsid;

  return <h1>The Detail of News</h1>;
}
export default DetailPage;
