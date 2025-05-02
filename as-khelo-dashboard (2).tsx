import { useState } from 'react';
import { Bell, MessageSquare, Calendar, User, LogOut, Settings, Trophy, Award, Search, ChevronDown, Users, Clock, Activity, Star, BarChart, Home } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const userProfile = {
    name: "Rajesh Kumar",
    username: "rajesh_kumar",
    avatar: "/api/placeholder/50/50",
    level: 42,
    rating: 1850,
    wins: 156,
    losses: 82,
    tournaments: 24
  };

  const notifications = [
    { id: 1, message: "Tournament registration closing soon", time: "10 mins ago", unread: true },
    { id: 2, message: "New achievement unlocked: 'Hat-trick hero'", time: "1 hour ago", unread: true },
    { id: 3, message: "Friend request accepted by Amit Shah", time: "3 hours ago", unread: false },
    { id: 4, message: "Upcoming match reminder: Regional Finals", time: "Yesterday", unread: false },
  ];

  const upcomingTournaments = [
    { id: 1, name: "Delhi Premier League", date: "May 5 - May 12", location: "Delhi", registrationOpen: true, prize: "₹100,000", participants: 32, image: "/api/placeholder/50/50" },
    { id: 2, name: "North India Championship", date: "May 15 - May 22", location: "Chandigarh", registrationOpen: true, prize: "₹250,000", participants: 64, image: "/api/placeholder/50/50" },
    { id: 3, name: "All-Stars Tournament", date: "May 30 - June 10", location: "Mumbai", registrationOpen: false, prize: "₹500,000", participants: 128, image: "/api/placeholder/50/50" },
  ];

  const ongoingTournaments = [
    { id: 4, name: "College Cricket Cup", date: "Apr 25 - May 10", location: "Bangalore", nextMatch: "Semi-Finals", position: "Quarter-finalist", image: "/api/placeholder/50/50" },
    { id: 5, name: "Inter-City Challenge", date: "Apr 28 - May 8", location: "Chennai", nextMatch: "Finals", position: "Finalist", image: "/api/placeholder/50/50" },
  ];

  const leaderboardData = [
    { rank: 1, name: "Amit Shah", rating: 2150, tournaments: 45, winRate: "78%" },
    { rank: 2, name: "Priya Patel", rating: 2120, tournaments: 38, winRate: "76%" },
    { rank: 3, name: "Vikram Singh", rating: 2100, tournaments: 42, winRate: "73%" },
    { rank: 4, name: "Meera Desai", rating: 2080, tournaments: 36, winRate: "72%" },
    { rank: 5, name: "Rahul Kapoor", rating: 2040, tournaments: 40, winRate: "70%" },
  ];

  const matchHistory = [
    { id: 1, opponent: "Amit Shah", result: "Won", score: "3-2", date: "Apr 28, 2025", rating: "+15" },
    { id: 2, opponent: "Priya Patel", result: "Lost", score: "1-3", date: "Apr 25, 2025", rating: "-10" },
    { id: 3, opponent: "Rahul Kapoor", result: "Won", score: "3-1", date: "Apr 22, 2025", rating: "+12" },
    { id: 4, opponent: "Meera Desai", result: "Won", score: "3-0", date: "Apr 18, 2025", rating: "+18" },
  ];

  const achievements = [
    { id: 1, title: "Tournament Champion", description: "Won a major tournament", date: "Apr 15, 2025", icon: <Trophy size={16} /> },
    { id: 2, title: "Hat-trick Hero", description: "Won three matches in a row", date: "Apr 10, 2025", icon: <Award size={16} /> },
    { id: 3, title: "Consistent Player", description: "Played 100+ matches", date: "Mar 22, 2025", icon: <Activity size={16} /> },
    { id: 4, title: "Rising Star", description: "Improved rating by 500+ points", date: "Feb 15, 2025", icon: <Star size={16} /> },
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Welcome back, {userProfile.name}!</h2>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-gray-500 text-sm font-medium">Current Rating</h3>
                <p className="text-2xl font-bold">{userProfile.rating}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-gray-500 text-sm font-medium">Win/Loss</h3>
                <p className="text-2xl font-bold">{userProfile.wins}/{userProfile.losses}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-gray-500 text-sm font-medium">Tournaments</h3>
                <p className="text-2xl font-bold">{userProfile.tournaments}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-gray-500 text-sm font-medium">Level</h3>
                <p className="text-2xl font-bold">{userProfile.level}</p>
              </div>
            </div>
            
            {/* Active Tournaments */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Your Active Tournaments</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              {ongoingTournaments.length > 0 ? (
                <div className="space-y-4">
                  {ongoingTournaments.map(tournament => (
                    <div key={tournament.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <img 
                          src={tournament.image} 
                          alt={tournament.name} 
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{tournament.name}</h3>
                          <p className="text-sm text-gray-500">{tournament.location} • Next: {tournament.nextMatch}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-gray-700">{tournament.position}</span>
                        <span className="text-xs text-gray-500">{tournament.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">You are not currently participating in any tournaments.</p>
              )}
            </div>
            
            {/* Upcoming Tournaments */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Upcoming Tournaments</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="space-y-4">
                {upcomingTournaments.slice(0, 2).map(tournament => (
                  <div key={tournament.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <img 
                        src={tournament.image} 
                        alt={tournament.name} 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{tournament.name}</h3>
                        <p className="text-sm text-gray-500">{tournament.location} • {tournament.participants} participants</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium">{tournament.date}</span>
                      {tournament.registrationOpen ? (
                        <button className="text-xs bg-blue-600 text-white py-1 px-2 rounded mt-1 hover:bg-blue-700">Register</button>
                      ) : (
                        <span className="text-xs text-gray-500">Registration Closed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Matches */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Matches</h2>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="space-y-3">
                {matchHistory.slice(0, 3).map(match => (
                  <div key={match.id} className="flex items-center justify-between border-b pb-3 last:border-b-0 last:pb-0">
                    <div>
                      <h3 className="font-medium">vs {match.opponent}</h3>
                      <p className="text-sm text-gray-500">{match.date} • {match.score}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${match.result === 'Won' ? 'text-green-600' : 'text-red-600'}`}>
                        {match.result}
                      </span>
                      <span className={`text-xs ${match.rating.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {match.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'tournaments':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Tournaments</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search tournaments..."
                    className="border rounded-lg px-3 py-2 pl-9 w-64"
                  />
                  <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <button className="border rounded-lg px-3 py-2 flex items-center gap-1 bg-white">
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Tournaments */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Your Active Tournaments</h3>
              {ongoingTournaments.length > 0 ? (
                <div className="space-y-4">
                  {ongoingTournaments.map(tournament => (
                    <div key={tournament.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={tournament.image} 
                          alt={tournament.name} 
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-lg">{tournament.name}</h3>
                          <p className="text-sm text-gray-500">{tournament.location}</p>
                          <p className="text-sm text-gray-500">{tournament.date}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end">
                        <span className="text-sm font-medium text-gray-700">Status: {tournament.position}</span>
                        <span className="text-sm text-gray-500">Next: {tournament.nextMatch}</span>
                        <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">You are not currently participating in any tournaments.</p>
              )}
            </div>

            {/* Upcoming Tournaments */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Tournaments</h3>
              <div className="space-y-4">
                {upcomingTournaments.map(tournament => (
                  <div key={tournament.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={tournament.image} 
                        alt={tournament.name} 
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-lg">{tournament.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{tournament.location}</span>
                          <span>•</span>
                          <span>{tournament.participants} participants</span>
                        </div>
                        <p className="text-sm text-gray-500">{tournament.date}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-sm font-medium text-green-600">Prize: {tournament.prize}</span>
                      {tournament.registrationOpen ? (
                        <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700">
                          Register Now
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500 mt-2">Registration Closed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Tournaments */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Past Tournaments</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/api/placeholder/50/50" 
                      alt="South Zone Championship" 
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-lg">South Zone Championship</h3>
                      <p className="text-sm text-gray-500">Hyderabad • 64 participants</p>
                      <p className="text-sm text-gray-500">Apr 10 - Apr 18, 2025</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-sm font-medium text-blue-600">Your Result: Quarter-finalist</span>
                    <button className="mt-2 border border-gray-300 text-gray-700 py-1 px-4 rounded hover:bg-gray-50">
                      View Results
                    </button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/api/placeholder/50/50" 
                      alt="City Cup 2025" 
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-lg">City Cup 2025</h3>
                      <p className="text-sm text-gray-500">Delhi • 32 participants</p>
                      <p className="text-sm text-gray-500">Mar 20 - Mar 28, 2025</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-sm font-medium text-green-600">Your Result: Champion</span>
                    <button className="mt-2 border border-gray-300 text-gray-700 py-1 px-4 rounded hover:bg-gray-50">
                      View Results
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="text-blue-600 hover:text-blue-800">
                  Show More Tournaments
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'leaderboard':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Leaderboard</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search players..."
                    className="border rounded-lg px-3 py-2 pl-9 w-64"
                  />
                  <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <button className="border rounded-lg px-3 py-2 flex items-center gap-1 bg-white">
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Leaderboard Table */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tournaments</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leaderboardData.map((player, index) => (
                    <tr key={index} className={index === 0 ? "bg-yellow-50" : ""}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{player.rank}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{player.rating}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{player.tournaments}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{player.winRate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">View Profile</button>
                      </td>
                    </tr>
                  ))}
                  {/* Highlight the current user in the leaderboard */}
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">24</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full"></div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{userProfile.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{userProfile.rating}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{userProfile.tournaments}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{Math.round((userProfile.wins / (userProfile.wins + userProfile.losses)) * 100)}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">View Profile</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-4 border-t">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">256</span> players
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border rounded bg-white text-gray-700">Previous</button>
                    <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
                    <button className="px-3 py-1 border rounded bg-white text-gray-700">2</button>
                    <button className="px-3 py-1 border rounded bg-white text-gray-700">3</button>
                    <button className="px-3 py-1 border rounded bg-white text-gray-700">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
            
            {/* Profile Info */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative">
                  <img 
                    src="/api/placeholder/100/100"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full">
                    <Settings size={16} />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{userProfile.name}</h3>
                  <p className="text-gray-500">@{userProfile.username}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div>
                      <span className="text-sm text-gray-500">Level</span>
                      <p className="font-medium">{userProfile.level}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Rating</span>
                      <p className="font-medium">{userProfile.rating}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Win/Loss</span>
                      <p className="font-medium">{userProfile.wins}/{userProfile.losses}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Tournaments</span>
                      <p className="font-medium">{userProfile.tournaments}</p>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>
            
            {/* Stats & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stats */}
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-600">Total Games Played</span>
                    <span className="font-medium">{userProfile.wins + userProfile.losses}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-600">Win Rate</span>
                    <span className="font-medium">{Math.round((userProfile.wins / (userProfile.wins + userProfile.losses)) * 100)}%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-600">Tournaments Participated</span>
                    <span className="font-medium">{userProfile.tournaments}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-600">Tournament Wins</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-600">Best Ranking</span>
                    <span className="font-medium">12th</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Streak</span>
                    <span className="font-medium text-green-600">3 Wins</span>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Achievements</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
                <div className="space-y-4">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="flex items-center gap-3 pb-2 border-b last:border-b-0 last:pb-0">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-xs text-gray-500">{achievement.description} • {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Match History */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Match History</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opponent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating Change</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {matchHistory.map(match => (
                      <tr key={match.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{match.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{match.opponent}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${match.result === 'Won' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {match.result}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{match.score}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={match.rating.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                            {match.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Trophy className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AS-KHELO</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 relative"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell size={20} />
                  {notifications.filter(n => n.unread).length > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {notifications.filter(n => n.unread).length}
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-10 border">
                    <div className="px-4 py-2 border-b">
                      <h3 className="font-medium">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}
                        >
                          <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Messages */}
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100">
                <MessageSquare size={20} />
              </button>
              
              {/* User Menu */}
              <div className="relative">
                <button 
                  className="flex items-center gap-2"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <img 
                    src="/api/placeholder/36/36" 
                    alt="User"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="hidden md:block font-medium text-gray-700">{userProfile.name}</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border">
                    <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <User size={16} />
                      <span>Your Profile</span>
                    </a>
                    <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <Settings size={16} />
                      <span>Settings</span>
                    </a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <LogOut size={16} />
                      <span>Sign out</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white shadow rounded-lg p-4 h-fit">
            <nav className="space-y-1">
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('home')}
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'tournaments' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('tournaments')}
              >
                <Trophy size={20} />
                <span>Tournaments</span>
              </button>
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'leaderboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('leaderboard')}
              >
                <BarChart size={20} />
                <span>Leaderboard</span>
              </button>
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'matches' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('matches')}
              >
                <Activity size={20} />
                <span>Matches</span>
              </button>
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'teams' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('teams')}
              >
                <Users size={20} />
                <span>Teams</span>
              </button>
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'calendar' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('calendar')}
              >
                <Calendar size={20} />
                <span>Calendar</span>
              </button>
              <button 
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={20} />
                <span>Profile</span>
              </button>
            </nav>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            {renderTabContent()}
          </main>
        </div>
      </div>
    </div>
  );
}