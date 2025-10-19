import { AnimatedButtonWithIcon } from "./ui/animated-button";

export function FinalCTA() {
    const handleExploreFeatures = (): void => {
        const element = document.getElementById('features');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div
                    className="rounded-2xl lg:rounded-3xl p-6 md:p-12 lg:p-16 text-center relative overflow-hidden"
                    style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-white rounded-full blur-2xl lg:blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-white rounded-full blur-2xl lg:blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 lg:mb-6 font-bold">
                            Ready to Transform Your Library Management?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto">
                            Join hundreds of study halls and coaching centers already using Libly.Space.
                            Start your free trial today—no credit card required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
                            <AnimatedButtonWithIcon
                                href="https://app.libly.space"
                                className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium text-sm lg:text-base w-full sm:w-auto"
                            >
                                Get Started Free
                            </AnimatedButtonWithIcon>
                        </div>

                        <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 lg:gap-6 text-white/80 text-xs sm:text-sm">
                            <div className="flex items-center gap-1">
                                <span>✓</span>
                                <span>Free up to 50 students</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>✓</span>
                                <span>No credit card needed</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>✓</span>
                                <span>24/7 support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
