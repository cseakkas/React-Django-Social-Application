function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Cover Section */}
      <div className="relative">

        {/* Cover Image */}
        <div className="h-[380px] w-full overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="cover"
            className="w-full h-full object-cover"
          />

        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Profile Content */}
        <div className="absolute bottom-0 left-0 w-full">

          <div className="max-w-6xl mx-auto px-6 pb-6">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

              {/* Left */}
              <div className="flex flex-col md:flex-row md:items-end gap-5">

                {/* Profile Image */}
                <div className="relative">

                  <div className="w-44 h-44 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white">

                    <img
                      src="https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/669013670_3143270789192710_7484495445971941533_n.jpg?stp=c0.0.631.631a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEowRNDC_gN5Ssm1k1s_yRsJg0si-Q77lEmDSyL5DvuUbJglhehRIV8gUx7hUA06PcT4Z3dD_jUFyNhhLmL0ihZ&_nc_ohc=wZEZq0u9Gg4Q7kNvwHAlkQ8&_nc_oc=Adquagx4BQ6n68OmYHsaSmMmqCP7FWjTA_oYei8InHcUZ1hvmv4l5lcTYUYyv-AbV5I&_nc_zt=24&_nc_ht=scontent.fdac23-1.fna&_nc_gid=tx06PtT0J9i7zMqG857RwA&_nc_ss=7b2a8&oh=00_Af5OGxYRSDVE9tvQAzu-4G_0NFicPHrE5npNmYLnfRqxvg&oe=6A1794E6"
                      alt="profile"
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* Online Status */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>

                </div>

                {/* Info */}
                <div className="text-white">

                  <h1 className="text-4xl font-bold">
                    Md Akkas Mia
                  </h1>

                  <p className="text-gray-200 mt-2">
                    Full Stack Developer • Django • React.js
                  </p>

                  {/* Followers */}
                  <div className="flex gap-6 mt-4 text-sm">

                    <div>
                      <span className="font-bold text-white">
                        12K
                      </span>{" "}
                      Followers
                    </div>

                    <div>
                      <span className="font-bold text-white">
                        1.2K
                      </span>{" "}
                      Following
                    </div>

                    <div>
                      <span className="font-bold text-white">
                        350
                      </span>{" "}
                      Posts
                    </div>

                  </div>

                </div>

              </div>

              {/* Right Buttons */}
              <div className="flex gap-3">

                <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">

                  + Add Story

                </button>

                <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">

                  Edit Profile

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Sidebar */}
          <div className="space-y-6">

            {/* Intro Card */}
            <div className="bg-white rounded-2xl shadow p-5">

              <h2 className="text-xl font-bold mb-4">
                Intro
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Passionate Full Stack Developer focused on scalable web applications and modern UI/UX design.
              </p>

              <div className="mt-5 space-y-3 text-sm text-gray-700">

                <div>
                  💼 Works at <span className="font-semibold">Somadhan IT</span>
                </div>

                <div>
                  🌍 Lives in Dhaka, Bangladesh
                </div>

                <div>
                  ❤️ Loves React & Django
                </div>

              </div>

            </div>

            {/* Photos */}
            <div className="bg-white rounded-2xl shadow p-5">

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-xl font-bold">
                  Photos
                </h2>

                <button className="text-blue-600 text-sm">
                  See All
                </button>

              </div>

              <div className="grid grid-cols-3 gap-2">

                {[1,2,3,4,5,6].map((item) => (

                  <img
                    key={item}
                    src={`https://picsum.photos/200?random=${item}`}
                    alt=""
                    className="rounded-xl h-24 w-full object-cover"
                  />

                ))}

              </div>

            </div>

          </div>

          {/* Right Feed */}
          <div className="lg:col-span-2 space-y-6">

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow px-6 py-4 flex gap-8 text-sm font-medium">

              <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
                Posts
              </button>

              <button className="text-gray-500 hover:text-black">
                About
              </button>

              <button className="text-gray-500 hover:text-black">
                Friends
              </button>

              <button className="text-gray-500 hover:text-black">
                Photos
              </button>

              <button className="text-gray-500 hover:text-black">
                Videos
              </button>

            </div>

            {/* Create Post */}
            <div className="bg-white rounded-2xl shadow p-5">

              <div className="flex items-center gap-3">

                <img
                  src="https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/669013670_3143270789192710_7484495445971941533_n.jpg?stp=c0.0.631.631a_cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEowRNDC_gN5Ssm1k1s_yRsJg0si-Q77lEmDSyL5DvuUbJglhehRIV8gUx7hUA06PcT4Z3dD_jUFyNhhLmL0ihZ&_nc_ohc=wZEZq0u9Gg4Q7kNvwHAlkQ8&_nc_oc=Adquagx4BQ6n68OmYHsaSmMmqCP7FWjTA_oYei8InHcUZ1hvmv4l5lcTYUYyv-AbV5I&_nc_zt=24&_nc_ht=scontent.fdac23-1.fna&_nc_gid=EcmQCc2_JkqTnFcqJQEH9g&_nc_ss=7b2a8&oh=00_Af6GV9-EmvjMv_hz_Sm5UQbLRnxx0nNrpzOZeWHeT7jj7w&oe=6A1794E6"

                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <input
                  className="flex-1 bg-gray-100 px-5 py-3 rounded-full outline-none"
                  placeholder="What's on your mind?"
                  readOnly
                />

              </div>

            </div>

            {/* Posts */}
            {[1,2,3].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >

                {/* Post Header */}
                <div className="flex items-center justify-between p-5">

                  <div className="flex items-center gap-3">

                    <img
                      src="https://scontent.fdac23-1.fna.fbcdn.net/v/t39.30808-1/669013670_3143270789192710_7484495445971941533_n.jpg?stp=c0.0.631.631a_cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeEowRNDC_gN5Ssm1k1s_yRsJg0si-Q77lEmDSyL5DvuUbJglhehRIV8gUx7hUA06PcT4Z3dD_jUFyNhhLmL0ihZ&_nc_ohc=wZEZq0u9Gg4Q7kNvwHAlkQ8&_nc_oc=Adquagx4BQ6n68OmYHsaSmMmqCP7FWjTA_oYei8InHcUZ1hvmv4l5lcTYUYyv-AbV5I&_nc_zt=24&_nc_ht=scontent.fdac23-1.fna&_nc_gid=EcmQCc2_JkqTnFcqJQEH9g&_nc_ss=7b2a8&oh=00_Af6GV9-EmvjMv_hz_Sm5UQbLRnxx0nNrpzOZeWHeT7jj7w&oe=6A1794E6"

                      alt=""
                      className="w-12 h-12 rounded-full"
                    />

                    <div>

                      <h4 className="font-semibold">
                        Md Akkas Mia
                      </h4>

                      <p className="text-sm text-gray-500">
                        2h ago • Public
                      </p>

                    </div>

                  </div>

                  <button className="text-gray-500 text-xl">
                    ⋯
                  </button>

                </div>

                {/* Post Content */}
                <div className="px-5 pb-4">

                  <p className="text-gray-700">
                    Building a modern social media platform using React.js and Django 🚀
                  </p>

                </div>

                {/* Image */}
                <img
                  src={`https://picsum.photos/800/500?random=${item}`}
                  alt=""
                  className="w-full max-h-[500px] object-cover"
                />

                {/* Actions */}
                <div className="flex justify-between px-6 py-4 text-gray-600 text-sm border-t">

                  <button className="hover:text-blue-600 transition">
                    👍 Like
                  </button>

                  <button className="hover:text-blue-600 transition">
                    💬 Comment
                  </button>

                  <button className="hover:text-blue-600 transition">
                    ↗ Share
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;