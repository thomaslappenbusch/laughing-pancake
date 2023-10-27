import Image from 'next/image'
// hello world
// hello git hub
export default function Home() {
  return (
    <main className="bg-gray-900 flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="bg-gray-700 select-none bg-grey lg:flex lg:items-stretch w-full">
  <div className="flex flex-no-shrink items-stretch h-12">
    <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-200 no-underline flex items-center hover:bg-grey-dark">Tailwind</a>
    <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-200 no-underline flex items-center hover:bg-grey-dark">Css</a>
    <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div>
  <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <a href="schedule" className="border-separate border-spacing-2 border flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-200 no-underline flex items-center hover:bg-grey-dark">Financial Services</a> 
      <a href="contact" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-gray-200 no-underline flex items-center hover:bg-grey-dark">Contact Us</a>
    </div>
  </div>
</nav>
    </main>
  )
}
