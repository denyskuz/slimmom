import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useTranslation } from 'react-i18next';

export default function DiaryPage() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('DiaryPage')}</h1>
      <DiaryProductsListItem />
    </main>
  );
}
