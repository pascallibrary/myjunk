import { JSX } from "react/jsx-runtime"

const Header = (): JSX.Element => {
  return (
    <header className="bg-black text-white text-center py-6 px-4">
      <h1 className="text-2xl md:text-3xl font-bold">Okereke Pascal Chinedu</h1>
      <p className="text-sm md:text-lg mt-2 mb-4">Software Engineer</p>
    </header>
  )
}

export default Header;