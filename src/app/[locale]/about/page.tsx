'use client';

import { useLocale } from 'next-intl';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import PageHero from '../../../components/PageHero';
import AboutSection from '../../../components/AboutSection';

// Icons
const IconVision = () => (
    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const IconMission = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);

const IconValues = () => (
    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);
// Correcting IconValues to be a Diamond/Gem shape
const IconGem = () => (
    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);
// Actually let's use a proper diamond shape
const IconDiamond = () => (
    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

const IconHow = () => (
    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconMonitor = () => (
    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
);

const IconTech = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
);

const IconAdvocacy = () => (
    <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
);

export default function AboutPage() {
    const locale = useLocale();

    // Kurdish content
    if (locale === 'ku') {
        return (
            <div className="min-h-screen bg-[#F9FAFB]">
                <AppHeader />

                <PageHero
                    icon="👥"
                    title="Kî Ne Em?"
                    subtitle="Em destpêşxeriyeke Sûriyeyî ya serbixwe ne, ku li xalên hevbeş ên lêkolînên civakî, xebata mafan û teknolojiyên dîjîtal kar dike"
                />

                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Introduction */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border border-green-100 shadow-sm">
                            <p className="text-xl text-gray-800 leading-relaxed">
                                Em destpêşxeriyeke Sûriyeyî ya serbixwe ne, ku li xalên hevbeş ên lêkolînên civakî, xebata mafan û teknolojiyên dîjîtal kar dike. Armanca me rûbirûbûna gotara nefretê û tundiyê ye di qadên dîjîtal û civakî de, li Sûriyeyê û li deverên penaberiyê.
                            </p>
                            <div className="bg-white/60 border-l-4 border-green-600 p-8 rounded-xl mt-8 shadow-sm">
                                <p className="text-2xl text-gray-900 leading-relaxed font-medium italic">
                                    "Em bawer dikin ku peyv ne tenê nêrînek e, lê hêzek e ku dikare di avakirina civakeke hevgirtî de, an jî di gurkirina tundiyeke nû de rol bilîze."
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6 mt-4">
                                <IconVision />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Dîtina Me
                                </h2>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Civakeke Sûriyeyî ku ferdên wê dikarin bi azadî û berpirsyarî xwe îfade bikin, bêyî tirsa ji tehrîkê (sorillîkirin), leke-lêdanê an dûrxistinê, û ku tê de mekanîzmayên dadperwer hebin ji bo parastina aştiya navxweyî û jiyana hevbeş.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6 mt-4">
                                <IconMission />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Peyama Me
                                </h2>
                            </div>
                            <p className="text-xl text-gray-900 mb-6 font-medium">Xurtkirina jîngeheke dîjîtal û civakî ya ewle bi rêya:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Şopandin û analîzkirina gotara nefretê bi awayekî zanistî û hûr.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Avakirina modelên zimanî yên ku karibin çarçoveyên Sûriyeyî fêm bikin.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Bihêzkirina civaka sivîl ji bo serederiya bi gotara ziyanbexş re.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Piştgiriya riya yasayî ji bo hesabpirsîna ji kesên tehrîkkar.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Hilberîna vegotinên (sardiyên) alternatîf ku rûmet û mirovahiyê xurt dikin.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Values */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 mt-4">
                                <IconDiamond />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Nirxên Me
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">🎯 Serbixweyî</h4>
                                    <p className="text-gray-600">Xebata dûrî qutbûnên (îstîqtab) siyasî û olî.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">📊 Bêalîbûn (Objektîvî)</h4>
                                    <p className="text-gray-600">Piştrastkirina li ser belge û daneyên ku têne selmandin.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">🌍 Hestiyariya Çarçoveyê</h4>
                                    <p className="text-gray-600">Rêzgirtina li tevlîhevî û pirrengiya civaka Sûriyeyî.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">🔒 Nepenî û Parastina Daneyan</h4>
                                    <p className="text-gray-600">Pêbendbûna hişk bi standardên parastina dîjîtal.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">🤝 Hevkarî</h4>
                                    <p className="text-gray-600">Xebata hevbeş bi rêxistinên xwecihî, navdewletî û lêkolîneran re.</p>
                                </div>
                            </div>
                        </div>

                        {/* How We Work */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 mt-4">
                                <IconHow />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Em Çawa Kar Dikin?
                                </h2>
                            </div>
                            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                                Xebata me li ser sê stûnên bi hev ve girêdayî ye da ku têgihiştineke giştgir û rûbirûbûna gotara nefretê pêşkêş bike:
                            </p>

                            <div className="flex flex-col md:flex-row gap-8 relative">
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                                {/* Pillar 1 */}
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                        <IconMonitor />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Şopandin û Analîz</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Em ji Sûriyan, çi li nav welat û çi li diyasporayê (derveyî welat) bin, raporan li ser naveroka nefretê an tehrîkkar distînin. Ev rapor bi rêya modela dabeşkirina mirovî û teknîkî têne analîzkirin da ku cure, vegotin û asta metirsiyê were diyarkirin.
                                    </p>
                                </div>

                                {/* Pillar 2 */}
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                        <IconTech />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Pêşxistina Teknîkî</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Em modeleke zimanî ya taybet bi zaravayên Sûriyeyî ava dikin, ku li ser hezaran mînakên rastîn fêr dibe, bi armanca ku hûrbînî û leza şopandina gotara nefretê zêde bike, ligel parastina kontrola mirovî.
                                    </p>
                                </div>

                                {/* Pillar 3 */}
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                        <IconAdvocacy />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hişyarkirin û Parêzvanî</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Em daneyên analîzkirî vediguherînin kampanyayên hişyarkirinê, materyalên perwerdehiyê û pêşniyarên sîyasetê ku alîkariyê didin çalakvanên civaka sivîl û rêxistinên mirovî da ku destwerdanên xwe li ser bingeha belgeyan ava bikin.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Volunteer Section */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-2xl border border-purple-100 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">Beşdarî Guherînê Bibe</h3>
                            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                                Em bawer dikin ku rûbirûbûna gotara nefretê berpirsyariyeke giştî ye. Heke tu lêkolîner, pêşdebirê teknolojiyê, hiqûqnas an jî çalakvanekî medenî yî, û dixwazî şiyanên xwe ji bo avakirina qadeke dîjîtal a ewle û berfireh ji bo civaka Sûriyeyî bikar bînî, destpêşxeriya <strong>Balagh</strong> deriyên dilxwaziyê ji te re vedike da ku bibî parçeyek ji çareseriyê.
                            </p>
                            <a href="mailto:info@balagh.org?subject=Volunteer Request" className="inline-block bg-[#0099CC] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#007da6] hover:shadow-lg transition-all transform hover:scale-105">
                                Bi Me re Bibe Dilxwaz
                            </a>
                        </div>

                    </div>
                </main>

                <AppFooter />
            </div>
        );
    }

    // English content
    if (locale === 'en') {
        return (
            <div className="min-h-screen bg-[#F9FAFB]">
                <AppHeader />

                <PageHero
                    icon="👥"
                    title="About Us"
                    subtitle="An independent Syrian initiative working at the intersection of research, rights, and technology"
                />

                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Introduction */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border border-green-100 shadow-sm">
                            <p className="text-xl text-gray-800 leading-relaxed">
                                We are an <strong>independent Syrian initiative</strong> working at the intersection of social research, human rights, and digital technologies to counter hate speech and violence in both digital and community spaces.
                            </p>
                            <p className="text-xl text-gray-800 leading-relaxed mt-6">
                                Our work emerged from a clear gap: the absence of an independent body capable of systematically tracking hate speech in Syria and providing reliable data that supports protection efforts, policy design, and community resilience.
                            </p>
                            <div className="bg-white/60 border-l-4 border-green-600 p-8 rounded-xl mt-8 shadow-sm">
                                <p className="text-2xl text-gray-900 leading-relaxed font-medium italic">
                                    "We believe that words are not just opinions—they shape safety, trust, and the future of our society."
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6 mt-4">
                                <IconVision />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Our Vision
                                </h2>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                A Syria where people can express themselves freely and responsibly, protected from incitement, stigma, and exclusion, within a society that upholds social peace and shared belonging.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6 mt-4">
                                <IconMission />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Our Mission
                                </h2>
                            </div>
                            <p className="text-xl text-gray-900 mb-6 font-medium">We strengthen digital and community safety by:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Monitoring and analyzing hate speech through rigorous, evidence-based methods</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Building linguistic models capable of understanding Syrian contexts and dialects</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Supporting civil society actors in addressing harmful discourse</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Advancing legal pathways to hold instigators accountable</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl mt-1">✓</span>
                                    <span className="text-gray-700 text-lg">Promoting alternative narratives grounded in dignity, empathy, and human rights</span>
                                </li>
                            </ul>
                        </div>

                        {/* Values */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 mt-4">
                                <IconDiamond />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Our Values
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Independence</h4>
                                    <p className="text-gray-600">Working free from political or religious polarization</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Objectivity</h4>
                                    <p className="text-gray-600">Grounding our work in verifiable, transparent data</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Context Sensitivity</h4>
                                    <p className="text-gray-600">Respecting the diversity and complexity of Syrian society</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Confidentiality & Data Protection</h4>
                                    <p className="text-gray-600">Upholding strict digital safety standards</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Partnership</h4>
                                    <p className="text-gray-600">Collaborating with organizations, researchers, and communities</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Integrity</h4>
                                    <p className="text-gray-600">Ensuring ethical, accurate, and responsible practices</p>
                                </div>
                            </div>
                        </div>

                        {/* How We Work */}
                        <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 mt-4">
                                <IconHow />
                                <h2 className="text-4xl font-bold text-gray-900">
                                    How We Work
                                </h2>
                            </div>
                            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                                Our approach is built on three interconnected pillars that together provide a comprehensive response to hate speech:
                            </p>

                            <div className="flex flex-col md:flex-row gap-8 relative">
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                                {/* Pillar 1 */}
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                        <IconMonitor />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Monitoring & Analysis</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We receive and review reports from Syrians inside the country and across the diaspora, classify harmful content, and identify narratives and risk levels through a hybrid human-technical model.
                                    </p>
                                </div>

                                {/* Pillar 2 */}
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                        <IconTech />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Technical Development</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We develop a Syrian-dialect language model trained on thousands of real-world examples to detect hate speech more accurately and efficiently, supported at every stage by human verification.
                                    </p>
                                </div>

                                {/* Pillar 3 */}
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                        <IconAdvocacy />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Awareness & Advocacy</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        We transform insights and data into public awareness campaigns, training materials, and policy recommendations, enabling civil society and humanitarian actors to design evidence-based interventions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Volunteer Section */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-2xl border border-purple-100 text-center shadow-sm">
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">Be a Partner in Change</h3>
                            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                                We believe that countering hate speech is a collective responsibility. If you are a researcher, tech developer, legal expert, or civil activist, and wish to invest your skills to build a safe and inclusive Syrian digital space, <strong>Baligh</strong> initiative opens its doors for you to volunteer and be part of the solution.
                            </p>
                            <a href="mailto:info@balagh.org?subject=Volunteer Request" className="inline-block bg-[#0099CC] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#007da6] hover:shadow-lg transition-all transform hover:scale-105">
                                Volunteer With Us
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
        <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
            <AppHeader />

            <PageHero
                icon="👥"
                title="من نحن"
                subtitle="مبادرة سورية مستقلة تعمل عند تقاطع البحث الاجتماعي، العمل الحقوقي، والتقنيات الرقمية"
            />

            <main className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-16">
                    {/* Introduction */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border border-green-100 shadow-sm">
                        <p className="text-xl text-gray-800 leading-relaxed">
                            نحن <strong>مبادرة سورية مستقلة</strong> تعمل عند تقاطع البحث الاجتماعي، العمل الحقوقي، والتقنيات الرقمية لمواجهة خطاب الكراهية والعنف في الفضاءين الرقمي والمجتمعي.
                        </p>
                        <p className="text-xl text-gray-800 leading-relaxed mt-6">
                            انطلق عملنا من فجوة واضحة: غياب جهة مستقلة قادرة على رصد خطاب الكراهية في سوريا بشكل منهجي، وتوفير بيانات موثوقة تدعم جهود الحماية، تصميم السياسات، وتعزيز المناعة المجتمعية.
                        </p>
                        <div className="bg-white/60 border-r-4 border-green-600 p-8 rounded-xl mt-8 shadow-sm">
                            <p className="text-2xl text-gray-900 leading-relaxed font-medium italic">
                                "نؤمن أن الكلمة ليست مجرد رأي، بل هي قوة تشكّل الأمان، الثقة، ومستقبل مجتمعنا."
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-6 mt-4">
                            <IconVision />
                            <h2 className="text-4xl font-bold text-gray-900">
                                رؤيتنا
                            </h2>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            مجتمع سوري يستطيع أفراده التعبير عن أنفسهم بحرية ومسؤولية، محميّين من التحريض والوصم والإقصاء، في ظل بيئة تصون السلم الأهلي والعيش المشترك.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-6 mt-4">
                            <IconMission />
                            <h2 className="text-4xl font-bold text-gray-900">
                                رسالتنا
                            </h2>
                        </div>
                        <p className="text-xl text-gray-900 mb-6 font-medium">تعزيز بيئة رقمية ومجتمعية آمنة من خلال:</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700 text-lg">رصد وتحليل خطاب الكراهية بمنهجية علمية دقيقة.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700 text-lg">بناء نماذج لغوية تفهم السياقات واللهجات السورية.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700 text-lg">تمكين المجتمع المدني من التعامل مع الخطاب الضار.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700 text-lg">دعم المسار القانوني لمحاسبة المحرضين.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700 text-lg">إنتاج سرديات بديلة تعزز الكرامة والإنسانية.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Values */}
                    <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-8 mt-4">
                            <IconDiamond />
                            <h2 className="text-4xl font-bold text-gray-900">
                                قيمنا
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">🎯 الاستقلالية</h4>
                                <p className="text-gray-600">العمل بعيداً عن التجاذبات السياسية والدينية.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">📊 الموضوعية</h4>
                                <p className="text-gray-600">الاستناد إلى بيانات موثقة وقابلة للتحقق.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">🌍 حساسية السياق</h4>
                                <p className="text-gray-600">احترام تعقيدات وتنوع المجتمع السوري.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">🔒 الخصوصية وحماية البيانات</h4>
                                <p className="text-gray-600">الالتزام الصارم بمعايير الأمان الرقمي.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">🤝 التشاركية</h4>
                                <p className="text-gray-600">العمل مع المنظمات المحلية والدولية والباحثين.</p>
                            </div>
                        </div>
                    </div>

                    {/* How We Work */}
                    <div className="bg-[#F5F7FA] p-10 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-8 mt-4">
                            <IconHow />
                            <h2 className="text-4xl font-bold text-gray-900">
                                كيف نعمل؟
                            </h2>
                        </div>
                        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                            يرتكز عملنا على ثلاث ركائز مترابطة لتقديم استجابة شاملة لخطاب الكراهية:
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                            {/* Pillar 1 */}
                            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                    <IconMonitor />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1. الرصد والتحليل</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    نستقبل البلاغات من السوريين في الداخل والمهجر، ونقوم بتصنيف المحتوى الضار وتحديد السرديات ومستويات الخطورة عبر نموذج هجين (بشري-تقني).
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                    <IconTech />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">2. التطوير التقني</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    نبني نموذجاً لغوياً خاصاً باللهجات السورية، مدرباً على آلاف الأمثلة الواقعية لرفع دقة وسرعة اكتشاف الكراهية، مع الحفاظ على الإشراف البشري.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm relative">
                                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                                    <IconAdvocacy />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">3. التوعية والمناصرة</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    نحول البيانات إلى حملات توعية، مواد تدريبية، وتوصيات سياسات تساعد الفاعلين في المجتمع المدني والعمل الإنساني على تصميم تدخلات مبنية على أدلة.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Section */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-2xl border border-purple-100 text-center shadow-sm">
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">كن شريكاً في التغيير</h3>
                        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                            نؤمن أن مواجهة الكراهية مسؤولية جماعية. إذا كنت باحثاً، مطوراً تقنياً، قانونياً، أو ناشطاً مدنياً، وترغب في استثمار مهاراتك لبناء فضاء رقمي سوري آمن وجامع، فإن مبادرة <strong>بَلِّغ</strong> تفتح أبواب التطوع لتكون جزءاً من الحل.
                        </p>
                        <a href="mailto:info@balagh.org?subject=Volunteer Request" className="inline-block bg-[#0099CC] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#007da6] hover:shadow-lg transition-all transform hover:scale-105">
                            تطوع معنا
                        </a>
                    </div>

                </div>
            </main>

            <AppFooter />
        </div>
    );
}
