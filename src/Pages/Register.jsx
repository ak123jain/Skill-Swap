import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

// Step progress bar
const StepIndicator = ({ step, total }) => {
  const width = `${(step / total) * 100}%`;
  return (
    <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
      <div className="h-full bg-pink-500 rounded-full" style={{ width }} />
    </div>
  );
};

// Avatar uploader with preview
const AvatarUploader = ({ avatar, setAvatar }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles[0]) {
        setAvatar(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer rounded-full border-4 border-pink-400 p-1 w-32 h-32 mx-auto flex items-center justify-center transition-all duration-300 hover:shadow-pink"
    >
      <input {...getInputProps()} />
      {avatar ? (
        <img
          key={avatar.preview}
          src={avatar.preview}
          alt="Avatar Preview"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <p className="text-sm text-pink-500 text-center">Drag & Drop or Click</p>
      )}
    </div>
  );
};

// Input field
const InputField = ({ label, type = "text", value, onChange, valid, error }) => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className={`peer w-full border px-4 pt-6 pb-2 rounded-xl text-sm bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 ${
          valid ? "border-green-400" : error ? "border-red-400" : "border-gray-300"
        } text-black`}
        placeholder={label}
      />
      <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs transition-all">
        {label}
      </label>
      {valid && <span className="absolute right-3 top-4 text-green-400">✔️</span>}
      {error && <span className="absolute right-3 top-4 text-red-400">❌</span>}
    </div>
  );
};

export default function SkillSwapRegister() {
  const [step, setStep] = useState(1);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [canTeach, setCanTeach] = useState("");
  const [wantToLearn, setWantToLearn] = useState("");
  const [availability, setAvailability] = useState([{ day: "Monday", startTime: "", endTime: "" }]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const totalSteps = 6;

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("bio", bio);
      formData.append("canTeach", canTeach);
      formData.append("wantToLearn", wantToLearn);

      // Add availability data to formData
      formData.append("availability", JSON.stringify(availability));

      if (avatar) formData.append("avatar", avatar);

      const res = await axios.post("http://localhost:8000/user/register", formData);
      console.log("✅ Submitted successfully:", res.data);
      setRegistrationSuccess(true);
      alert("Registered successfully!");
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Error submitting form");
      setRegistrationSuccess(false);
    }
  };

  const handleAvailabilityChange = (index, field, value) => {
    const newAvailability = [...availability];
    newAvailability[index] = { ...newAvailability[index], [field]: value };
    setAvailability(newAvailability);
  };

  const addAvailability = () => {
    setAvailability([...availability, { day: "", startTime: "", endTime: "" }]);
  };

  const removeAvailability = (index) => {
    const newAvailability = [...availability];
    newAvailability.splice(index, 1);
    setAvailability(newAvailability);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text backdrop-blur-md">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Join SkillSwap</h1>
        <p className="text-sm text-center text-gray-500 mb-6">
          Peer-to-peer learning for the curious & generous.
        </p>
        <StepIndicator step={step} total={totalSteps} />

        <div className="mt-8 bg-white shadow-xl rounded-2xl px-8 py-10 space-y-6">
          {step === 1 && (
            <>
              <InputField
                label="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                valid={fullname.length > 3}
                error={fullname.length > 0 && fullname.length <= 3}
              />
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                valid={email.includes("@") && email.includes(".")}
                error={email.length > 0 && (!email.includes("@") || !email.includes("."))}
              />
              <InputField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                valid={username.length > 2}
                error={username.length > 0 && username.length <= 2}
              />
              <div className="mt-6">
                <AvatarUploader avatar={avatar} setAvatar={setAvatar} />
              </div>
            </>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Step 2: Password</h2>
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                valid={password.length > 5}
                error={password.length > 0 && password.length <= 5}
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Step 3: Bio</h2>
              <InputField
                label="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                valid={bio.length > 5}
                error={bio.length > 0 && bio.length <= 5}
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Step 4: Availability</h2>
              {availability.map((avail, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-gray-600">Day</label>
                    <select
                      value={avail.day}
                      onChange={(e) => handleAvailabilityChange(index, "day", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-pink-400 focus:outline-none text-black"
                    >
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Start Time</label>
                    <input
                      type="time"
                      value={avail.startTime}
                      onChange={(e) => handleAvailabilityChange(index, "startTime", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-pink-400 focus:outline-none text-black"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">End Time</label>
                    <input
                      type="time"
                      value={avail.endTime}
                      onChange={(e) => handleAvailabilityChange(index, "endTime", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-pink-400 focus:outline-none text-black"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAvailability(index)}
                    className="text-red-500 text-xs mt-2"
                  >
                    Remove Availability
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addAvailability}
                className="bg-pink-500 text-white py-2 px-4 rounded-full mt-4"
              >
                Add Availability
              </button>
            </div>
          )}

          {step === 5 && (
            <>
              <div className="mb-4">
                <InputField
                  label="Can Teach"
                  value={canTeach}
                  onChange={(e) => setCanTeach(e.target.value)}
                  valid={canTeach.length > 2}
                  error={canTeach.length > 0 && canTeach.length <= 2}
                />
              </div>
              <div className="mb-4">
                <InputField
                  label="Want to Learn"
                  value={wantToLearn}
                  onChange={(e) => setWantToLearn(e.target.value)}
                  valid={wantToLearn.length > 2}
                  error={wantToLearn.length > 0 && wantToLearn.length <= 2}
                />
              </div>
            </>
          )}

          <div className="mt-8 flex justify-between items-center">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="bg-gray-500 text-white py-2 px-4 rounded-full"
              >
                Back
              </button>
            )}

            {step < totalSteps ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-pink-500 text-white py-2 px-4 rounded-full"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-pink-500 text-white py-2 px-4 rounded-full"
              >
                Submit
                {registrationSuccess && <span className="ml-2 text-pink-500">✔️</span>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}