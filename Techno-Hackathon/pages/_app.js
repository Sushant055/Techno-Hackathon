/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
     
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Digital Asset Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <span className="mr-6 text-pink-500">Home</span>
          </Link>
          <Link href="/create-item">
          <span className="mr-6 text-pink-500">Sell Digital Asset</span>
          </Link>
          <Link href="/my-assets">
          <span className="mr-6 text-pink-500">My Digital Assets</span>
          </Link>
          <Link href="/creator-dashboard">
          <span className="mr-6 text-pink-500">Creator Dashboard</span>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
   
  )
}


export default MyApp