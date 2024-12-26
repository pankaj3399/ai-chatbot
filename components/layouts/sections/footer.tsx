import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-screen md:h-[70vh] mt-10 md:mt-20 h-full flex flex-col justify-center px-6 py-12 sm:px-10">
      <footer className="bg-[#fff]/40 shadow-md p-2 dark:bg-[#29262592] text-gray-400 py-8 rounded-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-16">
          {/* Logo Section */}
          <div className="mb-8 text-center md:text-left">
            <Link
              href="/"
              className="font-bold text-xl flex justify-center md:justify-start items-center gap-3 ml-2"
            >
              <div className="text-white bg-orange-600 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" className="w-8 h-8 fill-current">
                  <path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20712 11.5429L5.79291 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20712 5.89301L5.79291 7.30722L12 13.5143Z"></path>
                </svg>
              </div>
              <h2 className="text-black dark:text-white">ValorAI</h2>
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 px-10 sm:grid-cols-4 gap-8 sm:gap-16 mb-12">
            <div>
              <h3 className="text-black dark:text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <Link href="https://github.com" className="block  dark:text-white transition-colors">
                  Github
                </Link>
                <Link href="https://twitter.com" className="block  dark:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="https://instagram.com" className="block  dark:text-white transition-colors">
                  Instagram
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-black dark:text-white font-semibold mb-4">Platforms</h3>
              <div className="space-y-3">
                <Link href="/ios" className="block  dark:text-white transition-colors">
                  iOS
                </Link>
                <Link href="/android" className="block  dark:text-white transition-colors">
                  Android
                </Link>
                <Link href="/web" className="block  dark:text-white transition-colors">
                  Web
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-black dark:text-white font-semibold mb-4">Help</h3>
              <div className="space-y-3">
                <Link href="/contact" className="block  dark:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="/faq" className="block  dark:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="/feedback" className="block  dark:text-white transition-colors">
                  Feedback
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-black dark:text-white font-semibold mb-4">Socials</h3>
              <div className="space-y-3">
                <Link href="https://twitch.tv" className="block  dark:text-white transition-colors">
                  Twitch
                </Link>
                <Link href="https://discord.com" className="block  dark:text-white transition-colors">
                  Discord
                </Link>
                <Link href="https://dribbble.com" className="block  dark:text-white transition-colors">
                  Dribbble
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-sm border-t border-gray-200 dark:border-gray-800 pt-8 text-start px-4 sm:px-10">
          <p>© 2024 Designed and developed by <Link href="https://joedefendre.com" className="text-[#E97451] hover:text-[#ff8561] transition-colors">Joe Defendre</Link></p>
        </div>
      </footer>
    </div>
  )
}