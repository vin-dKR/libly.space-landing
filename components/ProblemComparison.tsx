import { X, Check } from "lucide-react";

export function ProblemComparison() {
    const traditionalProblems = [
        "Manual paper registers prone to errors",
        "Time-consuming payment tracking",
        "No real-time seat availability",
        "Difficult to manage multiple shifts",
        "Lost or damaged records",
        "No automated due calculations"
    ];

    const liblyBenefits = [
        "Digital records with instant search",
        "Automated payment tracking & receipts",
        "Live seat occupancy dashboard",
        "Seamless multi-shift management",
        "Cloud-based secure storage",
        "Smart due date reminders"
    ];

    return (
        <section
            className="w-full flex items-center justify-center py-12 lg:py-0"
            style={{ backgroundColor: 'hsl(240 5% 96%)', minHeight: '100vh' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                        Why Choose <span style={{ color: 'hsl(217 91% 60%)' }}>Libly.Space</span>?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Stop wasting time on outdated methods. See how we compare to traditional systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Traditional Method */}
                    <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gray-200">
                        <div className="mb-6 lg:mb-8">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3 font-semibold">
                                Traditional Method
                            </h3>
                            <p className="text-gray-600 text-sm lg:text-base">
                                Paper registers & Excel sheets
                            </p>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                            {traditionalProblems.map((problem, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <X className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                                    <span className="text-gray-700 text-sm lg:text-base">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Libly.Space Solution */}
                    <div
                        className="rounded-xl lg:rounded-2xl p-6 lg:p-8 border-2"
                        style={{
                            backgroundColor: 'hsl(217 91% 95%)',
                            borderColor: 'hsl(217 91% 60%)'
                        }}
                    >
                        <div className="mb-6 lg:mb-8">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-2 lg:mb-3 font-semibold">
                                Libly.Space
                            </h3>
                            <p className="text-gray-700 text-sm lg:text-base">
                                Modern cloud-based system
                            </p>
                        </div>

                        <div className="space-y-3 lg:space-y-4">
                            {liblyBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check
                                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                                        style={{ color: 'hsl(217 91% 60%)' }}
                                    />
                                    <span className="text-gray-900 text-sm lg:text-base">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
