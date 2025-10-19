export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 w-full py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <span className="text-xl lg:text-2xl text-white mb-3 lg:mb-4 block font-bold">
                            <span style={{ color: 'hsl(217 91% 60%)' }}>Libly</span>.Space
                        </span>
                        <p className="text-gray-400 text-sm lg:text-base max-w-md">
                            Modern library and study hall management system designed for administrators
                            who want to move beyond paper registers and spreadsheets.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white mb-3 lg:mb-4 font-semibold text-base lg:text-lg">
                            Product
                        </h4>
                        <ul className="space-y-2 lg:space-y-3">
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('features');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hover:text-white transition-colors text-sm lg:text-base"
                                >
                                    Features
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('pricing');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hover:text-white transition-colors text-sm lg:text-base"
                                >
                                    Pricing
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://app.libly.space"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors text-sm lg:text-base"
                                >
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white mb-3 lg:mb-4 font-semibold text-base lg:text-lg">
                            Company
                        </h4>
                        <ul className="space-y-2 lg:space-y-3">
                            <li>
                                <a href="#" className="hover:text-white transition-colors text-sm lg:text-base">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors text-sm lg:text-base">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors text-sm lg:text-base">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-4">
                    <p className="text-gray-400 text-xs lg:text-sm text-center md:text-left">
                        © 2025 Libly.Space. All rights reserved.
                    </p>
                    <div className="flex gap-4 lg:gap-6 text-xs lg:text-sm">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
