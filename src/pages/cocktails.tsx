import Navbar from '@/components/Navbar'
import useSWR from 'swr'
import { AutoSizer, Grid } from 'react-virtualized'
import 'react-virtualized/styles.css' // Import CSS
import Image from 'next/image'

interface Cocktail {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
}

interface CocktailsApiResponse {
  drinks: Cocktail[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function CocktailsPage() {
  const { data, error } = useSWR<CocktailsApiResponse>(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
    fetcher
  )

  if (error) return <div className="text-xl text-red-500">Failed to load.</div>
  if (!data) return <div>Loading...</div>

  // Adjust column count based on the container width
  const getColumnCount = (width: number) => {
    if (width < 600) return 1 // Phones
    if (width < 900) return 2 // Tablets
    if (width < 1200) return 3 // Small screens, laptops
    return 4 // Larger screens, desktops
  }

  // Calculate column width dynamically
  const getColumnWidth = (width: number, columnCount: number) => {
    return width / columnCount - 10 // Subtracting padding/margin as necessary
  }

  // Cell renderer for react-virtualized Grid
  const cellRenderer = ({ columnIndex, key, rowIndex, style, parent }: any) => {
    const columnCount = getColumnCount(parent.props.width)
    const index = rowIndex * columnCount + columnIndex
    const drink = data.drinks[index]
    if (!drink) return <div key={key} style={style} />

    return (
      <div key={key} style={{ ...style, padding: 10 }}>
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          width={300} // These are for the aspect ratio, might need to be adjusted
          height={300} // Next.js will still optimize the image based on the container
          style={{ borderRadius: '8px' }}
          layout="responsive"
        />
        <h4 style={{ marginTop: '10px' }}>{drink.strDrink}</h4>
        <p>
          {drink.strCategory} | {drink.strAlcoholic}
        </p>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <main style={{ height: '100vh', width: '100vw' }}>
        <header className="w-full h-40 flex justify-center items-center">
          <h1 className="text-black text-4xl">Our Cocktails</h1>
        </header>

        <section style={{ flex: '1 1 auto' }} className="min-h-full">
          <AutoSizer>
            {({ width, height }) => {
              const columnCount = getColumnCount(width)
              return (
                <Grid
                  cellRenderer={cellRenderer}
                  columnCount={columnCount}
                  columnWidth={getColumnWidth(width, columnCount)}
                  height={height}
                  rowCount={Math.ceil(data.drinks.length / columnCount)}
                  rowHeight={400} // Adjust based on your content
                  width={width}
                />
              )
            }}
          </AutoSizer>
        </section>
      </main>
    </>
  )
}
