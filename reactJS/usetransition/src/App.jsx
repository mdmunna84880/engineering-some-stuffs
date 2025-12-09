import { useState, useTransition} from 'react';
import { Search, UserX } from 'lucide-react';

const App = ({users}) => {
  const [filtered, setFiltered] = useState(users);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleSearch(e){
    setSearchQuery(e.target.value);
    startTransition(()=>setFiltered(users.filter((user)=>user.name.includes(searchQuery))));
  }

  // 2. Filter Logic (Runs on every render based on searchQuery)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* --- Header & Search Section --- */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Logo / Title */}
            <div>
              <h1 className="text-2xl font-bold text-indigo-600">UserFinder</h1>
              <p className="text-sm text-gray-500">Search through our database</p>
            </div>

            {/* Search Bar Input */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
                placeholder="Search users by name..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content Grid --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         {
          isPending?"Loading ...":
           <>
            {/* Results Count */}
            <div className="mb-6 text-sm text-gray-500">
              Showing {filteredUsers.length} results
            </div>

            {/* User Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredUsers.map((user) => (
                  <div 
                    key={user.id} 
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group"
                  >
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-indigo-50 group-hover:border-indigo-100 transition-colors"
                        />
                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {user.name}
                      </h3>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                       <button className="w-full text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wide">
                         View Profile
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <UserX className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg font-medium">No users found</p>
                <p className="text-sm">Try adjusting your search terms</p>
              </div>
            )}
          </>
         }
      </main>
    </div>
  );
};

export default App;