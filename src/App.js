import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function LinguaLab() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedLanguageType, setSelectedLanguageType] = useState('major');
  const [countrySearch, setCountrySearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loadingCountry, setLoadingCountry] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'resources', label: 'Resources & Tips', icon: '📚' },
    { id: 'methods', label: 'Learning Methods', icon: '🎯' },
    { id: 'why', label: 'Why They Work', icon: '💡' },
    { id: 'linguistics', label: 'Language Science', icon: '🧠' },
    { id: 'kids', label: 'Teaching Kids', icon: '👶' },
    { id: 'tools', label: 'Tools & Apps', icon: '🛠️' },
    { id: 'myths', label: 'Myth Busting', icon: '✨' },
    { id: 'quiz', label: 'Assessment Quiz', icon: '📝' },
    { id: 'languageofmonth', label: 'Language of Month', icon: '🌟' },
    { id: 'languages', label: 'World Languages', icon: '🌍' },
    { id: 'countrysearch', label: 'Languages by Country', icon: '🔍' },
  ];

  const resourcesData = [
    { lang: 'Spanish', tips: ['Practice daily with native speakers', 'Watch Spanish films with subtitles', 'Keep a daily journal of new words', 'Listen to Spanish podcasts'] },
    { lang: 'French', tips: ['Master pronunciation with music', 'Read children\'s books', 'Use spaced repetition apps', 'Join conversation groups'] },
    { lang: 'Japanese', tips: ['Study hiragana and katakana first', 'Immerse in anime and manga', 'Focus on kanji stroke order', 'Practice with language partners'] },
    { lang: 'Mandarin', tips: ['Practice the four tones', 'Use character learning apps', 'Watch Chinese dramas', 'Build sentences piece by piece'] }
  ];

  const methodsData = [
    { icon: '🎯', title: 'Immersion', desc: 'Surround yourself with the language through media and conversations' },
    { icon: '📝', title: 'Consistency', desc: 'Study daily, even if just 15 minutes' },
    { icon: '🗣️', title: 'Speaking', desc: 'Speak from day one, mistakes and all' },
    { icon: '🧠', title: 'Active Recall', desc: 'Test yourself regularly' },
    { icon: '🌍', title: 'Connection', desc: 'Learn languages connected to people you love' },
    { icon: '🎨', title: 'Creativity', desc: 'Make language learning personal' }
  ];

  const whyTipsWork = [
    { title: 'Immersion & Comprehensible Input', explanation: 'Your brain learns languages through exposure to meaningful context. When you watch films or listen to podcasts, you\'re building neural pathways.' },
    { title: 'Spaced Repetition & Memory Science', explanation: 'Spacing out learning over time forces your brain to work harder at retrieval, strengthening long-term memory.' },
    { title: 'Active Recall Over Passive Review', explanation: 'Your brain strengthens pathways through retrieval effort. Testing yourself cements connections far better than re-reading.' },
    { title: 'Consistency & Neural Plasticity', explanation: 'Daily practice maintains activation in your language networks. Your brain responds to consistent stimulation.' },
    { title: 'Emotional Connection & Memory', explanation: 'When language learning connects to things you care about, your brain releases neurotransmitters that strengthen memories.' }
  ];

  const acquisitionStages = [
    { stage: 'Silent Period', duration: 'Weeks to months', description: 'Absorb the language without producing much. Your brain is processing phonetics and grammar.' },
    { stage: 'Early Production', duration: 'Months 2-6', description: 'Short phrases and memorized sentences. Errors are essential for learning.' },
    { stage: 'Speech Emergence', duration: 'Months 4-12', description: 'Longer utterances and increasing fluency. Grammar integrates subconsciously.' },
    { stage: 'Intermediate Fluency', duration: '1-2 years', description: 'Conversational fluency and ability to think in the language.' },
    { stage: 'Advanced Proficiency', duration: '2-7 years', description: 'Near-native fluency and nuanced understanding.' }
  ];

  const kidsAdvantages = [
    { advantage: 'Phonetic Sensitivity', explanation: 'Children maintain expanded phonetic sensitivity, which is why they rarely have accents.' },
    { advantage: 'Less Fossilization', explanation: 'Children\'s brains have greater neural plasticity, absorbing multiple language systems.' },
    { advantage: 'No Inhibition Filter', explanation: 'Children have minimal self-consciousness about mistakes, allowing them to learn freely.' },
    { advantage: 'Implicit Grammar', explanation: 'Children absorb grammar implicitly through exposure without formal instruction.' }
  ];

  const parentsTips = [
    { tip: 'Use OPOL Method', advice: 'One parent, one language creates clear boundaries and consistent exposure.' },
    { tip: 'Embrace Silent Period', advice: 'If your child understands but doesn\'t respond, that\'s normal. Forcing speech creates anxiety.' },
    { tip: 'Make it Play', advice: 'Embed language in games, songs, and routines. Children learn through context.' },
    { tip: 'Use Native Speakers', advice: 'Seek playgroups and communities. Social interaction is powerful for acquisition.' }
  ];

  const toolsData = [
    { category: 'Vocabulary & Spaced Repetition', apps: [
      { name: 'Anki', desc: 'Customizable spaced repetition flashcards' },
      { name: 'Quizlet', desc: 'User-friendly flashcards with games' },
      { name: 'Memrise', desc: 'Gamified spaced repetition' }
    ]},
    { category: 'Speaking & Conversation', apps: [
      { name: 'Tandem', desc: 'Connect with native speakers for chat' },
      { name: 'italki', desc: 'Book lessons with professional tutors' },
      { name: 'ConversationExchange', desc: 'Find language exchange partners' }
    ]},
    { category: 'Comprehensive Learning', apps: [
      { name: 'Duolingo', desc: 'Gamified lessons for beginners' },
      { name: 'Babbel', desc: 'Structured curriculum with interactive lessons' },
      { name: 'Pimsleur', desc: 'Audio-focused method emphasizing speaking' }
    ]}
  ];

  const myths = [
    { myth: 'You\'re too old', reality: 'Adults have advantages kids don\'t. You can absolutely reach fluency.', science: 'Language learning is possible throughout life due to neuroplasticity.' },
    { myth: 'Learn grammar first', reality: 'Immersion and input work faster than explicit grammar instruction.', science: 'Comprehensible input is the primary driver of acquisition.' },
    { myth: 'Mistakes are bad', reality: 'Mistakes are essential data. They force you to update your mental model.', science: 'Error correction strengthens memory consolidation.' },
    { myth: 'Need thousands of words', reality: 'You can have basic conversations with 1,000 words.', science: '20% of vocabulary covers 80% of daily communication.' }
  ];

  const languagesData = {
    major: [
      { name: 'Mandarin Chinese', speakers: '918 million', regions: 'China, Taiwan', status: '🟢 Secure' },
      { name: 'Spanish', speakers: '474 million', regions: 'Spain, Latin America', status: '🟢 Secure' },
      { name: 'English', speakers: '369 million', regions: 'UK, USA, Australia', status: '🟢 Secure' },
      { name: 'Hindi', speakers: '345 million', regions: 'India', status: '🟢 Secure' }
    ],
    endangered: [
      { name: 'Northern Haida', speakers: '20 speakers', regions: 'Alaska & Canada', status: '🔴 Critical' },
      { name: 'Ainu', speakers: 'Fewer than 20 fluent', regions: 'Japan', status: '🔴 Critical' },
      { name: 'Hawaiian', speakers: '24,000', regions: 'Hawaii', status: '🟠 Endangered' },
      { name: 'Welsh', speakers: '910,000', regions: 'Wales, UK', status: '🟡 Vulnerable' }
    ]
  };

  const handleCountrySearch = async (e) => {
    const search = e.target.value.trim();
    setCountrySearch(search);
    
    if (search.length > 1) {
      setLoadingCountry(true);
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
        if (response.ok) {
          const data = await response.json();
          const formattedResults = data.map(country => ({
            country: country.name.common,
            languages: country.languages ? Object.values(country.languages) : ['No language data'],
            flag: country.flag || '🌍',
            capital: country.capital ? country.capital[0] : 'N/A',
            region: country.region || 'N/A',
            population: country.population ? country.population.toLocaleString() : 'N/A'
          }));
          setSearchResults(formattedResults);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error:', error);
        setSearchResults([]);
      }
      setLoadingCountry(false);
    } else {
      setSearchResults([]);
    }
  };

  const handleQuizAnswer = (questionId, level) => {
    setQuizAnswers({ ...quizAnswers, [questionId]: level });
  };

  const getQuizResult = () => {
    const levels = Object.values(quizAnswers);
    const levelCount = { 'Beginner': 0, 'Beginner-Intermediate': 0, 'Intermediate': 0, 'Advanced': 0, 'Fluent': 0 };
    levels.forEach(level => { levelCount[level]++; });
    if (levelCount['Fluent'] >= 2) return 'Fluent';
    if (levelCount['Advanced'] >= 2) return 'Advanced';
    if (levelCount['Intermediate'] >= 2) return 'Intermediate';
    if (levelCount['Beginner-Intermediate'] >= 2) return 'Beginner-Intermediate';
    return 'Beginner';
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6 py-12">
              <h2 className="text-5xl md:text-6xl font-bold">Welcome to <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">LinguaLab</span></h2>
              <p className="text-xl text-purple-200">Your complete hub for everything language learning.</p>
              <button onClick={() => setActiveSection('resources')} className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold text-lg hover:shadow-2xl">Start Learning →</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{ icon: '🌍', stat: '7,164', label: 'Languages' }, { icon: '📚', stat: '50+', label: 'Resources' }, { icon: '🧠', stat: 'Science-Based', label: 'Methods' }].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"><div className="text-5xl mb-4">{item.icon}</div><div className="text-3xl font-bold mb-2">{item.stat}</div><p className="text-purple-200">{item.label}</p></div>
              ))}
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Learning Resources & Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {resourcesData.map((resource, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">{resource.lang}</h3>
                  <ul className="space-y-3">
                    {resource.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex gap-3"><span className="text-purple-400 font-bold">→</span><span className="text-purple-100">{tip}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'methods':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Proven Learning Methods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {methodsData.map((method, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-blue-300 mb-2">{method.title}</h3>
                  <p className="text-purple-200 text-sm">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'why':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Why These Tips Work</h2>
            <div className="space-y-6">
              {whyTipsWork.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">{item.title}</h3>
                  <p className="text-purple-100">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'linguistics':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Language Acquisition Stages</h2>
            <div className="space-y-6">
              {acquisitionStages.map((stage, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-blue-300">{stage.stage}</h3>
                    <span className="text-sm bg-purple-500/50 px-3 py-1 rounded-full">{stage.duration}</span>
                  </div>
                  <p className="text-purple-100">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'kids':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Teaching Kids Languages</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-6">Why Kids Are Super-Learners</h3>
                <div className="space-y-5">
                  {kidsAdvantages.map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h4 className="text-xl font-bold text-pink-300 mb-2">{item.advantage}</h4>
                      <p className="text-purple-100">{item.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-6">Parent Tips</h3>
                <div className="space-y-5">
                  {parentsTips.map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <h4 className="text-xl font-bold text-purple-300 mb-3">✨ {item.tip}</h4>
                      <p className="text-purple-100">{item.advice}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Tools & Apps</h2>
            {toolsData.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">{cat.category}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {cat.apps.map((app, appIdx) => (
                    <div key={appIdx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <h4 className="text-xl font-bold text-blue-300 mb-2">{app.name}</h4>
                      <p className="text-purple-200 text-sm">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'myths':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Myths Debunked</h2>
            <div className="space-y-6">
              {myths.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">❌ {item.myth}</h3>
                  <div className="space-y-3">
                    <div><p className="font-semibold text-green-300">✅ Reality:</p><p className="text-purple-100">{item.reality}</p></div>
                    <div><p className="font-semibold text-yellow-300">🧬 Science:</p><p className="text-purple-100">{item.science}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quiz':
        const quizQuestions = [
          { id: 1, question: 'How much do you understand when listening?', options: [
            { text: 'Nothing', level: 'Beginner' },
            { text: 'Some words', level: 'Beginner-Intermediate' },
            { text: 'Most of it', level: 'Intermediate' },
            { text: 'Nearly everything', level: 'Advanced' },
            { text: 'Everything including jokes', level: 'Fluent' }
          ]},
          { id: 2, question: 'Can you have a conversation?', options: [
            { text: 'No', level: 'Beginner' },
            { text: 'Simple phrases', level: 'Beginner-Intermediate' },
            { text: 'Yes, with mistakes', level: 'Intermediate' },
            { text: 'Yes, fluently', level: 'Advanced' },
            { text: 'Yes, complex topics', level: 'Fluent' }
          ]},
          { id: 3, question: 'How much can you read?', options: [
            { text: 'Almost nothing', level: 'Beginner' },
            { text: 'Simple texts', level: 'Beginner-Intermediate' },
            { text: 'News articles', level: 'Intermediate' },
            { text: 'Most books', level: 'Advanced' },
            { text: 'Everything', level: 'Fluent' }
          ]},
          { id: 4, question: 'Study time?', options: [
            { text: 'Less than 3 months', level: 'Beginner' },
            { text: '3-6 months', level: 'Beginner-Intermediate' },
            { text: '6 months - 2 years', level: 'Intermediate' },
            { text: '2-5 years', level: 'Advanced' },
            { text: '5+ years', level: 'Fluent' }
          ]}
        ];

        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Assessment Quiz</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20">
              {!quizSubmitted ? (
                <div className="space-y-8">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="pb-6 border-b border-white/20 last:border-b-0">
                      <h3 className="text-lg font-bold text-pink-300 mb-4">{idx + 1}. {q.question}</h3>
                      {q.options.map((opt, optIdx) => (
                        <label key={optIdx} className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded mb-2">
                          <input type="radio" name={`q${q.id}`} checked={quizAnswers[q.id] === opt.level} onChange={() => handleQuizAnswer(q.id, opt.level)} />
                          <span className="text-purple-100">{opt.text}</span>
                        </label>
                      ))}
                    </div>
                  ))}
                  <button onClick={() => setQuizSubmitted(true)} disabled={Object.keys(quizAnswers).length < 4} className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold disabled:opacity-50">Get Results</button>
                </div>
              ) : (
                <div className="space-y-6 text-center">
                  <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">Your Level: {getQuizResult()}</h3>
                  <button onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }} className="px-8 py-3 bg-white/20 rounded-full font-semibold">Retake Quiz</button>
                </div>
              )}
            </div>
          </div>
        );

      case 'languageofmonth':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-5xl font-bold">Language of the Month</h2>
              <div className="text-6xl">🇧🇷</div>
              <h3 className="text-3xl font-bold text-pink-400">Portuguese</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div><p className="text-purple-400 font-semibold text-sm">Native Speakers</p><p className="text-purple-100">252+ million</p></div>
                  <div><p className="text-purple-400 font-semibold text-sm">Regions</p><p className="text-purple-100">Brazil, Portugal, Angola, Mozambique</p></div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Why Learn?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span className="text-pink-400">✨</span><span className="text-purple-100">Gateway to Brazilian culture</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">✨</span><span className="text-purple-100">Access to amazing literature</span></li>
                  <li className="flex gap-3"><span className="text-pink-400">✨</span><span className="text-purple-100">Business opportunities</span></li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'languages':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Languages of the World</h2>
            <div className="flex gap-4 mb-8">
              {[{ id: 'major', label: 'Major' }, { id: 'endangered', label: 'Endangered' }].map(filter => (
                <button key={filter.id} onClick={() => setSelectedLanguageType(filter.id)} className={`px-6 py-2 rounded-full font-semibold ${selectedLanguageType === filter.id ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-white/10'}`}>{filter.label}</button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {languagesData[selectedLanguageType].map((lang, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-pink-400">{lang.name}</h3>
                    <span className="text-2xl">{lang.status}</span>
                  </div>
                  <div className="space-y-2 text-sm text-purple-200">
                    <p><strong>Speakers:</strong> {lang.speakers}</p>
                    <p><strong>Regions:</strong> {lang.regions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'countrysearch':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Languages by Country</h2>
            <p className="text-xl text-purple-200 mb-8">Search for any country</p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <input
                type="text"
                placeholder="Type a country name... (e.g., Spain, Japan, Brazil)"
                value={countrySearch}
                onChange={handleCountrySearch}
                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-purple-300 focus:outline-none focus:border-pink-400"
              />
            </div>

            {loadingCountry && <div className="text-center py-12"><p className="text-2xl text-purple-300">Searching...</p></div>}

            {searchResults.length > 0 && (
              <div className="space-y-6">
                {searchResults.map((result, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl">{result.flag}</span>
                      <div>
                        <h3 className="text-3xl font-bold text-pink-400">{result.country}</h3>
                        <p className="text-purple-300">{result.region}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div><p className="text-purple-400 font-semibold text-sm">Capital</p><p className="text-purple-100">{result.capital}</p></div>
                      <div><p className="text-purple-400 font-semibold text-sm">Population</p><p className="text-purple-100">{result.population}</p></div>
                    </div>

                    <div>
                      <p className="text-purple-400 font-semibold mb-3">Languages:</p>
                      <div className="flex flex-wrap gap-3">
                        {result.languages.map((lang, langIdx) => (
                          <span key={langIdx} className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full text-white font-semibold text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {countrySearch.length > 1 && searchResults.length === 0 && !loadingCountry && (
              <div className="text-center py-12"><p className="text-2xl text-purple-300">No countries found</p></div>
            )}
          </div>
        );

      default:
        return <div className="text-center py-12"><p className="text-2xl text-purple-300">Coming soon</p></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white flex">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className={`fixed inset-y-0 left-0 w-80 bg-black/40 backdrop-blur-md border-r border-white/10 overflow-y-auto transition-all z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>
        <div className="p-6 border-b border-white/10 sticky top-0 bg-black/20">
          <button onClick={() => setActiveSection('home')} className="w-full text-left hover:opacity-80 mb-4">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-pink-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">LinguaLab</h1>
            </div>
          </button>
          <p className="text-sm text-purple-300">Everything about languages</p>
        </div>

        <nav className="p-4 space-y-2">
          {navigationItems.map(item => (
            <button key={item.id} onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' : 'text-purple-200 hover:bg-white/10'}`}>
              <span className="mr-3">{item.icon}</span>{item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col relative z-10">
        <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
          <div className="px-6 py-4 flex justify-end">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 hover:bg-white/10 rounded">
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {renderContent()}
          </div>
        </main>

        <footer className="border-t border-white/10 py-6 text-center text-purple-300 text-sm">
          <p>Made with ❤️ for language learners everywhere</p>
        </footer>
      </div>
    </div>
  );
}