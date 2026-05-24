import { Link, useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
import CreatePostModal from "../components/CreatePostModal"; 
import axiosInstance from "../api/axios"; 

export default function Feed() {
  const navigate = useNavigate();
  
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access");

    if (!storedToken) {
      navigate("/login");
    }
  }, [navigate]);


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

  const posts = [
    {
      id: 1,
      name: "Md. Akkas Mia",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      time: "Just now",
      content: "Building a professional social media UI using React + Tailwind 🚀",
      likes: 124,
      comments: 18,
      shares: 9,
      images: [
        "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      ],
    },
    {
      id: 2,
      name: "Somadhan IT",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      time: "2h ago",
      content: "We are working on SaaS products and scalable systems 🔥",
      likes: 64,
      comments: 7,
      shares: 3,
    },
    {
      id: 3,
      name: "Priya Sarkar",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      time: "5h ago",
      content: "Weekend vibes: sharing a cozy moment from today's meetup.",
      likes: 98,
      comments: 12,
      shares: 5,
      image:
        "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Rafi Ahmed",
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      time: "6h ago",
      content: "Launched a new dashboard concept for our team today.",
      likes: 54,
      comments: 4,
      shares: 2,
    },
    {
      id: 5,
      name: "Mina Chowdhury",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      time: "8h ago",
      content: "Anyone interested in a weekend coding session? Let's build something neat.",
      likes: 76,
      comments: 9,
      shares: 4,
    },
    {
      id: 6,
      name: "Tanvir Ali",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      time: "10h ago",
      content: "Sharing some productivity tips that helped me stay focused this week.",
      likes: 48,
      comments: 5,
      shares: 1,
    },
    {
      id: 7,
      name: "Sara Khan",
      profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
      time: "11h ago",
      content: "This is the book I'm currently reading. Highly recommend it for designers.",
      likes: 88,
      comments: 14,
      shares: 6,
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      ],
    },
    {
      id: 8,
      name: "Ayesha Rahman",
      profileImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      time: "12h ago",
      content: "I just completed a new feature update for our mobile app.",
      likes: 42,
      comments: 6,
      shares: 2,
    },
    {
      id: 9,
      name: "Naveed Hossain",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      time: "14h ago",
      content: "Celebrating small wins makes every day better.",
      likes: 39,
      comments: 3,
      shares: 1,
    },
    {
      id: 10,
      name: "Rakib Hasan",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      time: "16h ago",
      content: "Simple UI changes can bring a big difference in user engagement.",
      likes: 67,
      comments: 10,
      shares: 4,
      images: [
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      ],
    },
    {
      id: 11,
      name: "Farhana Shirin",
      profileImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
      time: "18h ago",
      content: "Feeling grateful for the team momentum this week.",
      likes: 53,
      comments: 7,
      shares: 2,
    },
    {
      id: 12,
      name: "Jannatul Ferdous",
      profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
      time: "Yesterday",
      content: "From brainstorming to shipping — here is our latest case study.",
      likes: 81,
      comments: 12,
      shares: 8,
    },
    {
      id: 13,
      name: "Imran Nafi",
      profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      time: "Yesterday",
      content: "A quiet coffee break before the next big sprint.",
      likes: 34,
      comments: 4,
      shares: 1,
    },
    {
      id: 14,
      name: "Shamima Akter",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      time: "Yesterday",
      content: "Design review insights: keep things clean and readable.",
      likes: 69,
      comments: 9,
      shares: 5,
    },
    {
      id: 15,
      name: "Rumana Khan",
      profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
      time: "Yesterday",
      content: "Sharing the latest launch recap with the community.",
      likes: 58,
      comments: 8,
      shares: 3,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 16,
      name: "Iqbal Hossain",
      profileImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      time: "2 days ago",
      content: "Ready for the next challenge — let's do this.",
      likes: 71,
      comments: 11,
      shares: 4,
    },
    {
      id: 17,
      name: "Nazia Islam",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      time: "2 days ago",
      content: "Designing with accessibility in mind is always worth it.",
      likes: 82,
      comments: 13,
      shares: 6,
    },
    {
      id: 18,
      name: "Tareq Ahmed",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      time: "2 days ago",
      content: "Planning a fun community workshop next month.",
      likes: 45,
      comments: 5,
      shares: 2,
    },
    {
      id: 19,
      name: "Mim Noor",
      profileImage: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=200&q=80",
      time: "3 days ago",
      content: "A simple update on how we improved onboarding flows.",
      likes: 66,
      comments: 10,
      shares: 5,
    },
    {
      id: 20,
      name: "Arafat Khan",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      time: "3 days ago",
      content: "Great project meeting today — teamwork makes it happen.",
      likes: 74,
      comments: 11,
      shares: 7,
    },
    {
      id: 21,
      name: "Sadia Rani",
      profileImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
      time: "3 days ago",
      content: "Sharing a quote that keeps me motivated every morning.",
      likes: 39,
      comments: 4,
      shares: 1,
    },
    {
      id: 22,
      name: "Omar Faruk",
      profileImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      time: "4 days ago",
      content: "New feature ready for review — excited to hear your thoughts.",
      likes: 59,
      comments: 8,
      shares: 3,
    },
    {
      id: 23,
      name: "Nabila Hassan",
      profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
      time: "4 days ago",
      content: "Looking back at last month’s best content ideas.",
      likes: 48,
      comments: 6,
      shares: 2,
      image:
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 24,
      name: "Sumaiya Azad",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      time: "5 days ago",
      content: "Wrapping up another week of progress and growth.",
      likes: 68,
      comments: 9,
      shares: 5,
    },
    {
      id: 25,
      name: "Khaled Hasan",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      time: "5 days ago",
      content: "A quick tip for improving your homepage experience.",
      likes: 52,
      comments: 7,
      shares: 3,
    },
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
              className="bg-gray-100 px-3 py-2 rounded-full"
            >
              🔔
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileMenuOpen((current) => !current)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full"
              >
                Profile ▾
              </button>
              {profileMenuOpen && (
                <div className="absolute left-1/2 top-full z-10 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-2xl bg-white text-left shadow-lg ring-1 ring-black ring-opacity-5">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>✏️</span>
                    <span>Update Profile</span>
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>⚙️</span>
                    <span>Settings</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
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
          <div className="space-y-1 overflow-y-auto px-4 py-3">
            {notifications.map((item) => (
              <div key={item.id} className="rounded-3xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.detail}</p>
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
                <span key={tag} className="rounded-3xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 transition hover:border-blue-300 hover:text-blue-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </aside>



        {/* Feed Center */}
        <main className="lg:col-span-6 space-y-5 mt-4">

          {/* Create Post */}
          <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center gap-3">
              {/* Profile Avatar */}
              <Link to="/profile">
                <img
                  src="https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/669013670_3143270789192710_7484495445971941533_n.jpg?stp=c0.0.631.631a_cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEowRNDC_gN5Ssm1k1s_yRsJg0si-Q77lEmDSyL5DvuUbJglhehRIV8gUx7hUA06PcT4Z3dD_jUFyNhhLmL0ihZ&_nc_ohc=wZEZq0u9Gg4Q7kNvwHAlkQ8&_nc_oc=Adquagx4BQ6n68OmYHsaSmMmqCP7FWjTA_oYei8InHcUZ1hvmv4l5lcTYUYyv-AbV5I&_nc_zt=24&_nc_ht=scontent.fdac23-1.fna&_nc_gid=EcmQCc2_JkqTnFcqJQEH9g&_nc_ss=7b2a8&oh=00_Af6GV9-EmvjMv_hz_Sm5UQbLRnxx0nNrpzOZeWHeT7jj7w&oe=6A1794E6"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 cursor-pointer"
                />
              </Link>

              <input
                onClick={() => setOpenModal(true)}
                className="flex-1 bg-gray-100 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                placeholder="What's on your mind?"
                readOnly
              />
            </div>

            
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.profileImage}
                    alt={post.name}
                    className="h-12 w-12 rounded-3xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{post.name}</p>
                    <p className="text-xs text-gray-400">{post.time}</p>
                  </div>
                </div>
                <span className="text-gray-400">•••</span>
              </div>

              <div className="border-t border-gray-100 px-5 py-4">
                <p className="text-gray-700 leading-7 text-sm">{post.content}</p>
              </div>

              {post.images ? (
                <div className="grid gap-2 px-5 pb-4 sm:grid-cols-2">
                  {post.images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-3xl bg-slate-100">
                      <img
                        src={src}
                        alt={`${post.name}-${index}`}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : post.image ? (
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.name}
                    className="h-[320px] w-full object-cover"
                  />
                </div>
              ) : null}

              <div className="border-t border-gray-100 px-5 py-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{post.likes} Likes</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{post.comments} Comments</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{post.shares} Shares</span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500 sm:mt-0">
                  <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">👍 Like</span>
                  <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">💬 Comment</span>
                  <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">🔁 Share</span>
                </div>
              </div>
            </div>
          ))}
        </main>



        <CreatePostModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />

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
    </div>
  );
}
