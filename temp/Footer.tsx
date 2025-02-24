export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Hammad Farooq. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Data Scientist | Python Developer | Machine Learning Enthusiast</p>
      </div>
    </footer>
  )
}

