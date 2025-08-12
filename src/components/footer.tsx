import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Logo size={40} />
              <span className="text-2xl font-bold text-white">Zak Kann</span>
            </Link>
            <p className="text-gray-200 text-base">
              AI automation that pays for itself. Cut costs, remove bottlenecks, and accelerate SMBs—without hiring more people.
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
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/#process" data-event="nav_click" data-location="footer" data-title="How it works" className="text-base text-gray-200 hover:text-white transition-colors">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link href="/#use-cases" data-event="nav_click" data-location="footer" data-title="Use cases" className="text-base text-gray-200 hover:text-white transition-colors">
                      Use cases
                    </Link>
                  </li>
                  <li>
                    <Link href="/#pricing" data-event="nav_click" data-location="footer" data-title="Pricing" className="text-base text-gray-200 hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faq" data-event="nav_click" data-location="footer" data-title="FAQ" className="text-base text-gray-200 hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" data-event="nav_click" data-location="footer" data-title="About" className="text-base text-gray-200 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" data-event="nav_click" data-location="footer" data-title="Blog" className="text-base text-gray-200 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/feed.xml" data-event="nav_click" data-location="footer" data-title="RSS" className="text-base text-gray-200 hover:text-white transition-colors">
                      RSS
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" data-event="nav_click" data-location="footer" data-title="Privacy" className="text-base text-gray-200 hover:text-white transition-colors">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" data-event="nav_click" data-location="footer" data-title="Terms" className="text-base text-gray-200 hover:text-white transition-colors">
                      Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider">
                  Contact
                </h3>
                 <ul className="mt-4 space-y-4">
                   <li>
                     <a href="mailto:zak@zakkann.com?subject=New%20inquiry%20via%20zakkann.com" className="text-base text-gray-200 hover:text-white transition-colors">
                       zak@zakkann.com
                     </a>
                   </li>
                   <li>
                      <Link href="/book?utm_source=footer&utm_medium=cta&utm_campaign=footer-nav" data-event="cta_click" data-location="footer" className="text-base text-gray-200 hover:text-white transition-colors">
                       Book my free 30-min call
                     </Link>
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-secondary/40 pt-8">
          <p className="text-base text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Zak Kann, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 