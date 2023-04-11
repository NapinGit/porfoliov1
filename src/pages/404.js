import Link from 'next/link'

export default function FourOhFour() {
    return <>
        <div className='error-container'>
            <h1>404 - Page Not Found</h1>
            <Link href="/">
                Go back home
            </Link>
        </div>
    </>
}