export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <span className="text-2xl text-white mb-4 block font-bold">
                            <span style={{ color: 'hsl(217 91% 60%)' }}>Libly</span>.Space
                        </span>
                        <p className="text-gray-400 max-w-md">
                            Modern library and study hall management system designed for administrators
                            who want to move beyond paper registers and spreadsheets.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white mb-4 font-semibold">
                            Product
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('features');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hover:text-white transition-colors"
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
                                    className="hover:text-white transition-colors"
                                >
                                    Pricing
                                </button>
                            </li>
                            <li>
                                <a
                                    href="https://app.libly.space"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white mb-4 font-semibol">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2025 Libly.Space. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
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
