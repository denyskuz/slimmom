import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { data } from 'components/DiaryProductsListItem/DiaryProductsListItem';
export default function LoginPage() {
  return (
    <main>
      <h1>test</h1>
      <table>
        <tbody>
          <DiaryProductsListItem data={data} />
        </tbody>
      </table>
    </main>
  );
}
