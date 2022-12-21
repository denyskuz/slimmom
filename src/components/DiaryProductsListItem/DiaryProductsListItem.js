export const data = [
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff555c',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Гречневая крупа (ядрица) зелёная',
      ua: 'Гречана крупа (ядриця) зелена',
    },
    calories: 296,
    groupBloodNotAllowed: [null, true, false, true, true],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553a',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное всмятку)',
      ua: 'Яйце куряче (варене всмятку)',
    },
    calories: 159,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5530',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Омлет с сыром',
      ua: 'Омлет із сиром',
    },
    calories: 342,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff5539',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (вареное вкрутую)',
      ua: 'Яйце куряче (варене круто)',
    },
    calories: 160,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff552c',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Меланж яичный',
      ua: 'Меланж яєчний',
    },
    calories: 157,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

export default function DiaryProductsListItem({ data }) {
  const handleDelete = ({ $oid }) => {
    console.log($oid);
  };
  return (
    <table>
      <tbody>
        {data.map((e, i, ar) => {
          return (
            <tr key={e._id.$oid}>
              <td>{e.title.ua}</td>
              <td>{e.weight} g</td>
              <td>{e.calories}kcal</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(e._id);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
