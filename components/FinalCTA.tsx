import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div
                    className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
                    style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2
                            className="text-4xl md:text-5xl text-white mb-6"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Ready to Transform Your Library Management?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join hundreds of study halls and coaching centers already using Libly.Space.
                            Start your free trial today—no credit card required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://app.libly.space"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="bg-white hover:bg-gray-100 w-full sm:w-auto group"
                                    style={{ color: 'hsl(217 91% 60%)' }}
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                                onClick={() => {
                                    const element = document.getElementById('features');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Explore Features
                            </Button>
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                            <div>✓ Free up to 50 students</div>
                            <div>✓ No credit card needed</div>
                            <div>✓ 24/7 support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
