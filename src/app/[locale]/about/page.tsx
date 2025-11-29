'use client';

import { useLocale } from 'next-intl';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import PageHero from '../../../components/PageHero';
import AboutSection from '../../../components/AboutSection';

export default function AboutPage() {
    const locale = useLocale();

    // English content
    if (locale === 'en') {
        return (
            <div className="min-h-screen bg-gray-50">
                <AppHeader />

                <PageHero
                    icon="👥"
                    title="About Us"
                    subtitle="An independent Syrian initiative working at the intersection of research, rights, and technology"
                />

                <main className="container mx-auto px-4 py-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About Us
                        </h1>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Introduction */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
                            <p className="text-lg text-gray-800 leading-relaxed">
                                We are an <strong>independent Syrian initiative</strong> working at the intersection of social research, human rights, and digital technologies to counter hate speech and violence in both digital and community spaces.
                            </p>
                            <p className="text-lg text-gray-800 leading-relaxed mt-4">
                                Our work emerged from a clear gap: the absence of an independent body capable of systematically tracking hate speech in Syria and providing reliable data that supports protection efforts, policy design, and community resilience.
                            </p>
                            <p className="text-xl text-gray-900 leading-relaxed mt-6 font-medium italic">
                                We believe that words are not just opinions—they shape safety, trust, and the future of our society.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="text-4xl">🔭</span>
                                Our Vision
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                A Syria where people can express themselves freely and responsibly, protected from incitement, stigma, and exclusion, within a society that upholds social peace and shared belonging.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="text-4xl">🎯</span>
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-900 mb-4 font-medium">We strengthen digital and community safety by:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Monitoring and analyzing hate speech through rigorous, evidence-based methods</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Building linguistic models capable of understanding Syrian contexts and dialects</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Supporting civil society actors in addressing harmful discourse</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Advancing legal pathways to hold instigators accountable</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700">Promoting alternative narratives grounded in dignity, empathy, and human rights</span>
                                </li>
                            </ul>
                        </div>

                        {/* Values */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-4xl">💎</span>
                                Our Values
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-1">Independence</h4>
                                    <p className="text-sm text-gray-700">Working free from political or religious polarization</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-1">Objectivity</h4>
                                    <p className="text-sm text-gray-700">Grounding our work in verifiable, transparent data</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-1">Context Sensitivity</h4>
                                    <p className="text-sm text-gray-700">Respecting the diversity and complexity of Syrian society</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-1">Confidentiality & Data Protection</h4>
                                    <p className="text-sm text-gray-700">Upholding strict digital safety standards</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-1">Partnership</h4>
                                    <p className="text-sm text-gray-700">Collaborating with organizations, researchers, and communities</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-gray-900 mb-1">Integrity</h4>
                                    <p className="text-sm text-gray-700">Ensuring ethical, accurate, and responsible practices</p>
                                </div>
                            </div>
                        </div>

                        {/* How We Work */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="text-4xl">⚙️</span>
                                How We Work
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Our approach is built on three interconnected pillars that together provide a comprehensive response to hate speech:
                            </p>

                            <div className="space-y-6">
                                {/* Pillar 1 */}
                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-6 rounded-l-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Monitoring & Analysis</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We receive and review reports from Syrians inside the country and across the diaspora, classify harmful content, and identify narratives and risk levels through a hybrid human-technical model.
                                    </p>
                                </div>

                                {/* Pillar 2 */}
                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-6 rounded-l-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Technical Development</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We develop a Syrian-dialect language model trained on thousands of real-world examples to detect hate speech more accurately and efficiently, supported at every stage by human verification.
                                    </p>
                                </div>

                                {/* Pillar 3 */}
                                <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 p-6 rounded-l-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Awareness & Advocacy</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We transform insights and data into public awareness campaigns, training materials, and policy recommendations, enabling civil society and humanitarian actors to design evidence-based interventions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border-2 border-green-200 text-center">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
                            <p className="text-lg text-gray-700 mb-6">For inquiries, partnerships, or reporting harmful content:</p>
                            <a href="mailto:info@balagh.org" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                                📧 info@balagh.org
                            </a>
                        </div>
                    </div>
                </main>

                <AppFooter />
            </div>
        );
    }

    // Arabic content (default)
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <PageHero
                icon="👥"
                title="من نحن"
            />


            <AboutSection />

            <AppFooter />
        </div>
    );
}
