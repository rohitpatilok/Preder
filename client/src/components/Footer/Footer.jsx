import { FaLinkedin, FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";


export default function Footer() {

  return (
    <footer className="bg-gray-100 from-gray-100 to-white text-[#2e2e2e] py-10 px-6 md:px-20 text-sm">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-yellow-500 tracking-wide">Preder</h1>
            </div>
            <p className="text-xs text-gray-500">© 2025 Preder Limited</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 flex-1">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-base text-gray-700">
                <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Preder Corporate</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Team</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Preder One</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Preder Instamart</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Preder Dineout</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Preder Genie</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Minis</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Pyng</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Contact us</h3>
              <ul className="space-y-1 text-base text-gray-700">
                <li><a href="#" className="hover:text-yellow-500 transition">Help & Support</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Partner With Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Ride With Us</a></li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Legal</h3>
              <ul className="space-y-1 text-base text-gray-700">
                <li><a href="#" className="hover:text-yellow-500 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Available in:</h3>
              <ul className="space-y-1 text-base text-gray-700">
                <li><a href="#" className="hover:text-yellow-500 transition">Bangalore</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Gurgaon</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Hyderabad</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Delhi</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Mumbai</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Pune</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Life at Swiggy</h3>
              <ul className="space-y-1 text-base text-gray-700">
                <li><a href="#" className="hover:text-yellow-500 transition">Explore With Preder</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Preder News</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition">Snackables</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Social Links</h3>
              <div className="flex gap-3 mt-2 text-xl">
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition"><FaLinkedin /></a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram /></a>
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                <a href="#" aria-label="Pinterest" className="hover:text-red-500 transition"><FaPinterestP /></a>
                <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>


        <hr className="my-8 border-gray-300" />


        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-base text-center md:text-left">
            For better experience, download the Preder app now
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 rounded-lg overflow-hidden">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                    alt="Google Play"
                    className="h-12"
                />
            </a>
            <a href="#" className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 rounded-lg overflow-hidden">
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                    alt="App Store"
                    className="h-12"
                />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
