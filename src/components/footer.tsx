import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1B263B]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              Zak Kann
            </Link>
            <p className="text-gray-200 text-base">
              AI Automation for SMBs that want to win.
              Cut costs, crush bottlenecks and ship faster—without hiring a full-time tech exec.
            </p>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/zkann" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/zrkann" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="https://github.com/zkann" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.178 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.606-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.95 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844c.851.004 1.706.115 2.506.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.846-2.338 4.695-4.566 4.944.36.311.68.923.68 1.86 0 1.342-.012 2.425-.012 2.755 0 .268.18.58.688.481C19.138 20.196 22 16.444 22 12.02 22 6.486 17.523 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#services" className="text-base text-gray-200 hover:text-white transition-colors">
                      Cut Cost & Chaos
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-base text-gray-200 hover:text-white transition-colors">
                      Scale Smarter
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-base text-gray-200 hover:text-white transition-colors">
                      Automation Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-base text-gray-200 hover:text-white transition-colors">
                      Project Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/about" className="text-base text-gray-200 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-200 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                   <li>
                     <a href="/book" className="text-base text-gray-200 hover:text-white transition-colors">
                       Book My Free 30-Min Call
                     </a>
                   </li>
                  <li>
                    <Link href="/privacy" className="text-base text-gray-200 hover:text-white transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-200 hover:text-white transition-colors">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="mailto:zak@zakkann.com?subject=New%20inquiry%20via%20zakkann.com" className="text-base text-gray-200 hover:text-white transition-colors">
                      zak@zakkann.com
                    </a>
                  </li>
                   <li>
                     <a href="/book" className="text-base text-gray-200 hover:text-white transition-colors">
                       Book My Free 30-Min Call
                     </a>
                   </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-[#415A77]/40 pt-8">
          <p className="text-base text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Zak Kann. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 