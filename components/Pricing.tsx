import { Check } from "lucide-react";
import { AnimatedButton } from "./ui/animated-button";

export function Pricing() {
    const freeFeatures: string[] = [
        "Up to 50 students",
        "Real-time seat tracking",
        "Payment management",
        "Basic reporting",
        "Email support",
        "Training videos"
    ];

    const proFeatures: string[] = [
        "Unlimited students",
        "Real-time seat tracking",
        "Advanced payment management",
        "Comprehensive reports & analytics",
        "Priority 24/7 support",
        "Training videos",
        "Custom shift configurations",
        "Data export & backup",
        "ID proof storage"
    ];

    return (
        <section id="pricing" className="w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'hsl(240 5% 96%)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 font-bold">
                        Simple, Transparent{" "}
                        <span style={{ color: 'hsl(217 91% 60%)' }}>Pricing</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Start free, upgrade when you grow
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Free Tier */}
                    <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-200">
                        <div className="mb-6 lg:mb-8">
                            <h3 className="text-xl lg:text-2xl mb-2 lg:mb-3 font-bold">
                                Free
                            </h3>
                            <div className="flex items-baseline gap-2 mb-3 lg:mb-4">
                                <span className="text-4xl lg:text-5xl font-extrabold">
                                    ₹0
                                </span>
                                <span className="text-gray-600 text-sm lg:text-base">/month</span>
                            </div>
                            <p className="text-gray-600 text-sm lg:text-base">
                                Perfect for small study halls getting started
                            </p>
                        </div>

                        <div className="mb-6 lg:mb-8">
                            <AnimatedButton
                                href="https://app.libly.space"
                                className="w-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium text-sm lg:text-base transition-colors"
                            >
                                Get Started Free
                            </AnimatedButton>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                            {freeFeatures.map((feature: string, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: 'hsl(217 91% 60%)' }}
                                    />
                                    <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Tier */}
                    <div
                        className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 relative"
                        style={{
                            backgroundColor: 'white',
                            borderColor: 'hsl(217 91% 60%)'
                        }}
                    >
                        <div
                            className="absolute -top-3 lg:-top-4 left-1/2 -translate-x-1/2 px-3 lg:px-4 py-1 rounded-full text-xs lg:text-sm text-white"
                            style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                        >
                            Most Popular
                        </div>

                        <div className="mb-6 lg:mb-8">
                            <h3 className="text-xl lg:text-2xl mb-2 lg:mb-3 font-bold">
                                Pro
                            </h3>
                            <div className="flex items-baseline gap-2 mb-3 lg:mb-4">
                                <span className="text-4xl lg:text-5xl font-extrabold" style={{ color: 'hsl(217 91% 60%)' }}>
                                    ₹299
                                </span>
                                <span className="text-gray-600 text-sm lg:text-base">/month</span>
                            </div>
                            <p className="text-gray-600 text-sm lg:text-base">
                                For growing institutions managing more students
                            </p>
                        </div>

                        <div className="mb-6 lg:mb-8">
                            <AnimatedButton
                                href="https://app.libly.space"
                                className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 px-6 rounded-lg font-medium text-sm lg:text-base transition-colors"
                                style={{ backgroundColor: 'hsl(217 91% 60%)' }}
                            >
                                Start Pro Trial
                            </AnimatedButton>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                            {proFeatures.map((feature: string, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: 'hsl(217 91% 60%)' }}
                                    />
                                    <span className="text-gray-900 text-sm lg:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-600 text-sm lg:text-base mt-8 lg:mt-12 px-4">
                    All plans include secure cloud hosting and regular updates. No hidden fees.
                </p>
            </div>
        </section>
    );
}
