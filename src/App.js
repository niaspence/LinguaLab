import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function LinguaHub() {
  // STATE - All the data that can change
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // DATA - All the content stored as arrays/objects
  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'resources', label: 'Resources & Tips', icon: '📚' },
    { id: 'methods', label: 'Learning Methods', icon: '🎯' },
    { id: 'languages', label: 'World Languages', icon: '🌍' },
  ];

  const resourcesData = [
    {
      lang: 'Spanish',
      tips: [
        'Practice daily with native speakers',
        'Watch Spanish films with subtitles',
        'Keep a daily journal of new words',
        'Listen to Spanish podcasts'
      ]
    },
    {
      lang: 'French',
      tips: [
        'Master pronunciation with music',
        'Read children\'s books',
        'Use spaced repetition apps',
        'Join conversation groups'
      ]
    },
    {
      lang: 'Japanese',
      tips: [
        'Study hiragana and katakana first',
        'Immerse in anime and manga',
        'Focus on kanji stroke order',
        'Practice with language partners'
      ]
    },
    {
      lang: 'Mandarin',
      tips: [
        'Practice the four tones',
        'Use character learning apps',
        'Watch Chinese dramas',
        'Build sentences piece by piece'
      ]
    }
  ];

  const methodsData = [
    { icon: '🎯', title: 'Immersion', desc: 'Surround yourself with the language through media and conversations' },
    { icon: '📝', title: 'Consistency', desc: 'Study daily, even if just 15 minutes' },
    { icon: '🗣️', title: 'Speaking', desc: 'Speak from day one, mistakes and all' },
    { icon: '🧠', title: 'Active Recall', desc: 'Test yourself regularly' },
    { icon: '🌍', title: 'Connection', desc: 'Learn languages connected to people you love' },
    { icon: '🎨', title: 'Creativity', desc: 'Make language learning personal' }
  ];

  const languagesData = {
    major: [
      { name: 'Mandarin Chinese', speakers: '918 million', regions: 'China, Taiwan', status: '🟢 Secure' },
      { name: 'Spanish', speakers: '474 million', regions: 'Spain, Latin America', status: '🟢 Secure' },
      { name: 'English', speakers: '369 million', regions: 'UK, USA, Australia', status: '🟢 Secure' },
      { name: 'Hindi', speakers: '345 million', regions: 'India', status: '🟢 Secure' }
    ],
    endangered: [
      { name: 'Northern Haida', speakers: '20 speakers (elderly)', regions: 'Alaska & Canada', status: '🔴 Critical' },
      { name: 'Ainu', speakers: 'Fewer than 20 fluent', regions: 'Japan (Hokkaido)', status: '🔴 Critical' },
      { name: 'Hawaiian', speakers: '24,000', regions: 'Hawaii', status: '🟠 Endangered' },
      { name: 'Welsh', speakers: '910,000', regions: 'Wales, UK', status: '🟡 Vulnerable' }
    ]
  };

  const [selectedLanguageType, setSelectedLanguageType] = useState('major');

  // FUNCTIONS - Logic that does stuff
  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6 py-12">
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Your complete hub for everything language learning. Discover resources, methods, and explore the world's languages.
              </p>
              <button
                onClick={() => setActiveSection('resources')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Start Learning →
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🌍', stat: '7,164', label: 'Languages in World' },
                { icon: '📚', stat: '50+', label: 'Learning Resources' },
                { icon: '🧠', stat: 'Science-Based', label: 'Methods' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all hover:shadow-xl">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-3xl font-bold mb-2">{item.stat}</div>
                  <p className="text-purple-200">{item.label}</p>
                </div>
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
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-pink-400 transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">{resource.lang}</h3>
                  <ul className="space-y-3">
                    {resource.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex gap-3">
                        <span className="text-purple-400 font-bold flex-shrink-0">→</span>
                        <span className="text-purple-100">{tip}</span>
                      </li>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodsData.map((method, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400 transition-all hover:shadow-xl text-center">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-blue-300 mb-2">{method.title}</h3>
                  <p className="text-purple-200 text-sm">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        return (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Languages of the World</h2>
            
            <div className="flex gap-4 mb-8">
              {[
                { id: 'major', label: 'Major Languages' },
                { id: 'endangered', label: 'Endangered Languages' }
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedLanguageType(filter.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedLanguageType === filter.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {languagesData[selectedLanguageType].map((lang, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-pink-400 transition-all hover:shadow-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-pink-400">{lang.name}</h3>
                    </div>
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

      default:
        return <div className="text-center py-12"><p className="text-2xl text-purple-300">Coming soon</p></div>;
    }
  };

  // RENDER - The HTML that displays
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white flex">
      {/* Background animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-80 bg-black/40 backdrop-blur-md border-r border-white/10 overflow-y-auto transition-all duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10 sticky top-0 bg-black/20">
          <button
            onClick={() => setActiveSection('home')}
            className="w-full text-left hover:opacity-80 transition-opacity mb-4"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-pink-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                LinguaLab
              </h1>
            </div>
          </button>
          <p className="text-sm text-purple-300">Everything about languages</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all font-semibold ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'text-purple-200 hover:bg-white/10'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between md:justify-end">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {renderContent()}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 text-center text-purple-300 text-sm">
          <p>Made with ❤️ for language learners everywhere</p>
        </footer>
      </div>
    </div>
  );
}