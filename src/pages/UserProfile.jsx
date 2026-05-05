import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterUser from "../components/layout/FooterUser";
import NavbarAuth from "../components/layout/NavbarAuth";
import Sidebar from "../components/layout/Sidebar";
import { Button } from "../components/common/button";
import { getUserProfile, updateUserProfile } from "../lib/api";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      setError("");
      setLoading(true);

      try {
        const data = await getUserProfile();
        console.log("Profile data:", data);
        setName(data?.user?.name || data?.name || "");
        setEmail(data?.user?.email || data?.email || "");
      } catch (err) {
        setError(err.message || "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  async function handleSave() {
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      await updateUserProfile({ email, name});
      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError(err.message || "Unable to save profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarAuth />

      <div className="grow flex">
        <Sidebar />

        <div className="min-h-screen w-full flex items-start justify-center py-25 px-6">
          <div className="w-full max-w-2xl bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-4xl font-semibold mb-6">View & Edit profile</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-pink-400 via-purple-400 to-blue-400"></div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => navigate("/user")}
              >
                Change profile photo
              </button>
            </div>

            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
            {success && <p className="mb-4 text-sm text-green-600">{success}</p>}

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                disabled={!isEditing}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                disabled={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                value={bio}
                disabled={!isEditing}
                maxLength={250}
                onChange={() => setBio("Default bio value")}
                className="w-full border rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
              />
              <div className="text-xs text-gray-500 text-right mt-1">{bio.length}/250</div>
            </div>

            <div className="flex gap-5">
              <Button
                type="button"
                onClick={async () => {
                  if (!isEditing) {
                    setIsEditing(true);
                    return;
                  }

                  await handleSave();
                  setIsEditing(false);
                }}
                size="large"
                rounded="large"
                loading={saving}
                label={isEditing ? "Save Changes" : "Update"}
                variant="blue"
              />
              <Button
                type="button"
                onClick={() => navigate("/explore")}
                size="large"
                rounded="large"
                label="Back to explore"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterUser />
    </div>
  )
}

export default UserProfile
