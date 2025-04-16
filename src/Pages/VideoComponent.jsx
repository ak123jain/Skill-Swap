 

// import React, { useRef, useState } from 'react';
// import Video from 'twilio-video';

// export const VideoComponent = () => {
//   const [roomJoined, setRoomJoined] = useState(false);
//   const [room, setRoom] = useState(null);
//   const [identity, setIdentity] = useState('');
//   const videoRef = useRef();        // Local video
//   const remoteRef = useRef();       // Remote video

//   const joinRoom = async () => {
//     if (!identity.trim()) {
//       alert('Please enter your identity (email or name)');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8000/twillo/sendotp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           identity,
//           room: 'skill-session',
//         }),
//       });

//       const { token } = await response.json();

//       const room = await Video.connect(token, {
//         name: 'skill-session',
//         audio: true,
//         video: { width: 640 },
//       });

//       setRoom(room);
//       setRoomJoined(true);

//       // Attach local video track
//       const localTrack = Array.from(room.localParticipant.videoTracks.values())[0].track;
//       localTrack.attach(videoRef.current);

//       // Handle existing remote participants
//       room.participants.forEach(participant => {
//         participant.tracks.forEach(publication => {
//           if (publication.track && publication.track.kind === 'video') {
//             publication.track.attach(remoteRef.current);
//           }
//         });

//         participant.on('trackSubscribed', track => {
//           if (track.kind === 'video') {
//             track.attach(remoteRef.current);
//           }
//         });

//         participant.on('trackPublished', publication => {
//           if (publication.track && publication.track.kind === 'video') {
//             publication.track.attach(remoteRef.current);
//           }
//         });
//       });

//       // Handle new remote participants
//       room.on('participantConnected', participant => {
//         console.log(`Remote participant ${participant.identity} connected`);

//         participant.on('trackSubscribed', track => {
//           if (track.kind === 'video') {
//             track.attach(remoteRef.current);
//           }
//         });

//         participant.on('trackPublished', publication => {
//           if (publication.track && publication.track.kind === 'video') {
//             publication.track.attach(remoteRef.current);
//           }
//         });
//       });

//       room.on('participantDisconnected', participant => {
//         console.log(`Participant ${participant.identity} left`);
//       });

//       console.log(`Connected to Room: ${room.name}`);
//     } catch (err) {
//       console.error('Error connecting to video room akash 😒😒😒😒:', err);
//     }
//   };

//   const leaveRoom = () => {
//     if (room) {
//       room.disconnect();
//       setRoom(null);
//       setRoomJoined(false);
//       console.log('Left the room');
//     }
//   };

//   return (
//     <div className="p-6 flex flex-col items-center">
//       {!roomJoined && (
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Enter your name or email"
//             value={identity}
//             onChange={(e) => setIdentity(e.target.value)}
//             className="border border-gray-300 px-4 py-2 rounded-md shadow-sm w-72"
//           />
//         </div>
//       )}

//       <div className="flex flex-wrap justify-center gap-4">
//         <div>
//           <p className="text-center text-sm font-medium mb-1">You</p>
//           <video ref={videoRef} autoPlay playsInline className="rounded-lg shadow-lg w-full max-w-md" />
//         </div>
//         <div>
//           <p className="text-center text-sm font-medium mb-1">Remote</p>
//           <video ref={remoteRef} autoPlay playsInline className="rounded-lg shadow-lg w-full max-w-md" />
//         </div>
//       </div>

//       {!roomJoined ? (
//         <button
//           onClick={joinRoom}
//           className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
//         >
//           Join Room
//         </button>
//       ) : (
//         <button
//           onClick={leaveRoom}
//           className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
//         >
//           Leave Room
//         </button>
//       )}
//     </div>
//   );
// };

// export default VideoComponent;


import React, { useRef, useState } from 'react';
import Video from 'twilio-video';

export const VideoComponent = () => {
  const [roomJoined, setRoomJoined] = useState(false);
  const [room, setRoom] = useState(null);
  const [identity, setIdentity] = useState('');
  const videoRef = useRef();        // Local video
  const remoteRef = useRef();       // Remote video

  const joinRoom = async () => {
    if (!identity.trim()) {
      alert('Please enter your identity (email or name)');
      return;
    }

    try {
      // Try getting user media manually to detect any permission/device errors early
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      stream.getTracks().forEach(track => track.stop()); // Stop after confirming access

      const response = await fetch('http://localhost:8000/twillo/sendotp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identity,
          room: 'skill-session',
        }),
      });

      const { token } = await response.json();

      // Create local tracks
      const localTracks = await Video.createLocalTracks({
        audio: true,
        video: { width: 640 },
      });

      const room = await Video.connect(token, {
        name: 'skill-session',
        tracks: localTracks,
      });

      setRoom(room);
      setRoomJoined(true);

      // Attach local video track
      localTracks.forEach(track => {
        if (track.kind === 'video') {
          track.attach(videoRef.current);
        }
      });

      // Handle existing participants
      room.participants.forEach(participant => {
        participant.tracks.forEach(publication => {
          if (publication.track && publication.track.kind === 'video') {
            publication.track.attach(remoteRef.current);
          }
        });

        participant.on('trackSubscribed', track => {
          if (track.kind === 'video') {
            track.attach(remoteRef.current);
          }
        });

        participant.on('trackPublished', publication => {
          if (publication.track && publication.track.kind === 'video') {
            publication.track.attach(remoteRef.current);
          }
        });
      });

      // Handle new participants
      room.on('participantConnected', participant => {
        console.log(`Remote participant ${participant.identity} connected`);

        participant.on('trackSubscribed', track => {
          if (track.kind === 'video') {
            track.attach(remoteRef.current);
          }
        });

        participant.on('trackPublished', publication => {
          if (publication.track && publication.track.kind === 'video') {
            publication.track.attach(remoteRef.current);
          }
        });
      });

      // Participant disconnect
      room.on('participantDisconnected', participant => {
        console.log(`Participant ${participant.identity} left`);
      });

      console.log(`Connected to Room: ${room.name}`);
    } catch (err) {
      console.error('Error connecting to video room:', err);
      if (err.name === 'NotReadableError') {
        alert('Camera or microphone is already in use by another application or tab.');
      } else if (err.name === 'NotAllowedError') {
        alert('Permission to access camera/microphone was denied.');
      } else {
        alert(`Failed to connect: ${err.message}`);
      }
    }
  };

  const leaveRoom = () => {
    if (room) {
      room.disconnect();
      setRoom(null);
      setRoomJoined(false);
      console.log('Left the room');
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {!roomJoined && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name or email"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md shadow-sm w-72"
          />
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4">
        <div>
          <p className="text-center text-sm font-medium mb-1">You</p>
          <video ref={videoRef} autoPlay playsInline className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
        <div>
          <p className="text-center text-sm font-medium mb-1">Remote</p>
          <video ref={remoteRef} autoPlay playsInline className="rounded-lg shadow-lg w-full max-w-md" />
        </div>
      </div>

      {!roomJoined ? (
        <button
          onClick={joinRoom}
          className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Join Room
        </button>
      ) : (
        <button
          onClick={leaveRoom}
          className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Leave Room
        </button>
      )}
    </div>
  );
};

export default VideoComponent;