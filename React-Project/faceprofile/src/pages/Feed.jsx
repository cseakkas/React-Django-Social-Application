import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axios";
import CreatePostModal from "../components/CreatePostModal";

export default function Feed() {
  const navigate = useNavigate();
  
  // States
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user")) || null;

  const baseUrl = axiosInstance.defaults.baseURL || "http://localhost:8000";

  // Logout Handler
  const handleLogout = () => { 
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Fetch Feed Posts from Django/Backend API
  const fetchPosts = async () => {
    try {
      setLoading(true); 
      setError(null);
      const response = await axiosInstance.get("api/feeds/"); 
      setPosts(response.data.results || response.data); 
    } catch (err) {
      console.error(err);
      setError("পোস্টগুলো লোড করা যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Hardcoded Notifications Data
  const notifications = [
    { id: 1, title: "New follower", detail: "Sara Khan started following you.", time: "2m ago" },
    { id: 2, title: "Post liked", detail: "A post was liked by Ayesha.", time: "10m ago" },
    { id: 3, title: "New comment", detail: "Rafi commented on your post.", time: "21m ago" },
    { id: 4, title: "Profile update", detail: "Your profile picture was viewed 120 times.", time: "1h ago" },
    { id: 5, title: "Friend suggestion", detail: "You may know Tanvir Ahmed.", time: "2h ago" },
    { id: 6, title: "Story reaction", detail: "Jasmine reacted to your story.", time: "3h ago" },
    { id: 7, title: "Settings alert", detail: "Password change recommended.", time: "5h ago" },
    { id: 8, title: "Event invite", detail: "You’re invited to a networking event.", time: "8h ago" },
    { id: 9, title: "Message", detail: "You have a new message from Rahim.", time: "10h ago" },
    { id: 10, title: "Weekly summary", detail: "Your activity summary is ready.", time: "Yesterday" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="w-full flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-md shadow-blue-200/50">
              <span className="text-lg font-black">F</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">FaceProfile</p>
              <h1 className="text-[15px] font-semibold text-slate-900">Social Made Simple</h1>
            </div>
          </div>

          {/* Main Menu */}
          <nav className="hidden md:flex items-center gap-2">
            <button className="rounded-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 transition">
              🏠 Home
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
              👥 Friends
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
              🛒 Marketplace
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
              🎥 Watch
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition">
              👥 Groups
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNotificationsOpen((current) => !current)}
              className="bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
            >
              🔔
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileMenuOpen((current) => !current)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Profile ▾
              </button>
              {profileMenuOpen && (
                <div className="absolute left-1/2 top-full z-10 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-2xl bg-white text-left shadow-lg ring-1 ring-black ring-opacity-5">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    <span>✏️</span>
                    <span>Update Profile</span>
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    <span>⚙️</span>
                    <span>Settings</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition"
                  >
                    <span>🚪</span>
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Notifications Drawer */}
      {notificationsOpen && (
        <div className="fixed right-0 top-16 z-40 h-[calc(100vh-4rem)] w-96 overflow-hidden bg-white shadow-2xl border-l border-gray-200">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div>
              <p className="text-lg font-semibold">Notifications</p>
              <p className="text-sm text-gray-500">Last 10 updates</p>
            </div>
            <button
              type="button"
              onClick={() => setNotificationsOpen(false)}
              className="text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 overflow-y-auto h-[calc(100%-5rem)] px-4 py-3">
            {notifications.map((item) => (
              <div key={item.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Page Layout */}
      <div className="w-full pt-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 space-y-5 sticky top-24 self-start">
          <div className="rounded-2xl bg-white p-5 text-gray-900 shadow ring-1 ring-black/5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 p-3 flex items-center justify-center text-2xl font-bold text-white">
                F
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">FaceProfile</p>
                <h2 className="mt-2 text-xl font-semibold">Welcome back!</h2>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Explore your network, share moments, and discover the latest updates in one beautiful feed.</p>
            <div className="mt-5 grid gap-3 rounded-3xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Connections</span>
                <span className="font-semibold text-gray-900">1.2k</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Followers</span>
                <span className="font-semibold text-gray-900">9.8k</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Messages</span>
                <span className="font-semibold text-gray-900">24</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow ring-1 ring-black/5">
            <p className="font-semibold mb-4">Smart Menu</p>
            <div className="space-y-3">
              <button className="flex w-full items-center gap-3 rounded-3xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-blue-300 hover:bg-blue-50">
                <span className="rounded-2xl bg-blue-100 p-2 text-blue-600">🏠</span>
                <div>
                  <p className="font-medium">Home</p>
                  <p className="text-xs text-gray-500">Your daily feed</p>
                </div>
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-blue-300 hover:bg-blue-50">
                <span className="rounded-2xl bg-emerald-100 p-2 text-emerald-600">👥</span>
                <div>
                  <p className="font-medium">Friends</p>
                  <p className="text-xs text-gray-500">See new connections</p>
                </div>
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-blue-300 hover:bg-blue-50">
                <span className="rounded-2xl bg-purple-100 p-2 text-purple-600">💬</span>
                <div>
                  <p className="font-medium">Messages</p>
                  <p className="text-xs text-gray-500">Catch up quickly</p>
                </div>
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-blue-300 hover:bg-blue-50">
                <span className="rounded-2xl bg-yellow-100 p-2 text-yellow-600">⚙️</span>
                <div>
                  <p className="font-medium">Settings</p>
                  <p className="text-xs text-gray-500">Customize your profile</p>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl shadow ring-1 ring-black/5">
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold">Trending</p>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Live</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['#ReactJS', '#TailwindCSS', '#Django', '#Startup', '#Design'].map((tag) => (
                <span key={tag} className="rounded-3xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition hover:border-blue-300 hover:text-blue-600 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Feed Center */}
        <main className="lg:col-span-6 space-y-5 mt-4">


          {/* Create Post Input */}
          {/* Create Post Input */}
          <div className="bg-white p-4 rounded-2xl shadow ring-1 ring-black/5">
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <img
                  src={
                    loggedInUser?.profile_image
                      ? (loggedInUser.profile_image.startsWith('http') 
                          ? loggedInUser.profile_image 
                          : `${baseUrl}/${loggedInUser.profile_image}`)
                      : "https://placehold.co/150" 
                  }
                  alt={loggedInUser?.username || "Profile"}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer"
                />
              </Link>
              <input
                onClick={() => setOpenModal(true)}
                className="flex-1 bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer text-sm"
                placeholder={loggedInUser?.username ? `What's on your mind, ${loggedInUser.username}?` : "What's on your mind?"}
                readOnly
              />
            </div>
          </div>

        
          {loading && (
            <div className="text-center py-8 text-gray-500 font-medium">পোস্ট লোড হচ্ছে...</div>
          )}

          {error && (
            <div className="text-center py-8 text-red-500 font-medium bg-red-50 rounded-2xl p-4 border border-red-100">
              {error}
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow text-gray-400">
              কোনো পোস্ট পাওয়া যায়নি। নতুন একটি পোস্ট তৈরি করুন!
            </div>
          )}

          {/* Dynamic Feed Posts Mapping */}
          {!loading && !error && posts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      post.user?.profile_image 
                        ? (post.user.profile_image.startsWith('http') 
                            ? post.user.profile_image 
                            : `${baseUrl}/${post.user.profile_image}`)
                        : "https://placehold.co/150"
                    }
                    alt={post.user?.username || "User"}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {post.user?.first_name ? `${post.user.first_name} ${post.user.last_name || ""}` : post.user?.username}
                    </p>
                    <p className="text-xs text-gray-400">
                      {post.created_at || post.time 
                        ? new Date(post.created_at || post.time).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })
                        : "Just now"}
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 cursor-pointer hover:text-slate-600 transition">•••</span>
              </div>



              {/* Post Content */}
              <div className="border-t border-gray-100 px-5 py-4"> 
                <p className={`text-gray-700 leading-7 text-sm whitespace-pre-wrap ${!isExpanded ? "line-clamp-4" : ""}`}>
                  {post.content}
                </p>
                 
                {post.content && post.content.length > 250 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-1 block text-sm font-semibold text-blue-600 hover:underline focus:outline-none"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>

 
              {post.images && post.images.length > 0 && (
                <div className="px-5 pb-4">
                  <div
                    className={`grid gap-1 overflow-hidden rounded-xl ${
                      post.images.length === 1
                        ? "grid-cols-1"
                        : post.images.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2"  
                    }`}
                  >
                    {post.images.slice(0, 4).map((src, index) => { 
                      const imageUrl = src?.image
                        ? src.image.startsWith("http") ? src.image : `${baseUrl}${src.image}`
                        : typeof src === "string" && src.startsWith("http") ? src : `${baseUrl}${src}`;
 
                      let gridClasses = "relative overflow-hidden bg-slate-100";
                      if (post.images.length === 3 && index === 0) { 
                        gridClasses += " row-span-2 h-[412px]";
                      } else if (post.images.length === 3) { 
                        gridClasses += " h-[204px]";
                      } else if (post.images.length >= 4) { 
                        gridClasses += " h-[204px]";
                      } else { 
                        gridClasses += post.images.length === 1 ? "max-h-[500px] w-full" : "h-[300px]";
                      }

                      return (
                        <div key={index} className={gridClasses}>
                          <img
                            src={imageUrl}
                            alt={`${post.user?.username || "post"}-${index}`}
                            className="h-full w-full object-cover hover:scale-[1.02] transition-transform duration-200 cursor-pointer"
                          />
 
                          {index === 3 && post.images.length > 4 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer">
                              <span className="text-xl font-bold text-white tracking-wider">
                                +{post.images.length - 4}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Footer Counter & Action Buttons */}
              <div className="border-t border-gray-100 px-5 py-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    {post.likes_count || post.likes || 0} Likes
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    {post.comments_count || post.comments || 0} Comments
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    {post.shares_count || post.shares || 0} Shares
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500 sm:mt-0">
                  <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition select-none">
                    👍 Like
                  </span>
                  <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition select-none">
                    💬 Comment
                  </span>
                  <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition select-none">
                    🔁 Share
                  </span>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 space-y-4 sticky top-24 self-start">
          <div className="bg-white p-5 rounded-2xl shadow ring-1 ring-black/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-lg">Friends</p>
                <p className="text-sm text-gray-500">Active now</p>
              </div>
              <button className="text-sm text-blue-600 font-semibold">See all</button>
            </div>

            <div className="space-y-4">
              {[
                { name: "Ayesha Rahman", status: "Online", avatar: "AR" },
                { name: "Rafi Ahmed", status: "2m ago", avatar: "RA" },
                { name: "Sara Khan", status: "Online", avatar: "SK" },
                { name: "Tanvir Ali", status: "5m ago", avatar: "TA" },
                { name: "Mina Chowdhury", status: "Online", avatar: "MC" },
              ].map((friend) => (
                <div key={friend.name} className="flex items-center gap-3 rounded-3xl border border-gray-100 bg-gray-50 p-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-600 text-white font-semibold">
                    {friend.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{friend.name}</p>
                    <p className="text-sm text-gray-500">{friend.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-sm text-gray-500">
            © 2026 FaceProfile
          </div>
        </aside>

      </div>

      {/* Post Modal */}
      <CreatePostModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        refreshPosts={fetchPosts} // পোস্ট সাকসেসফুলি ক্রিয়েট হলে ফিড রিফ্রেশ করার জন্য মেথড পাস করা হয়েছে
      />
    </div>
  );
}