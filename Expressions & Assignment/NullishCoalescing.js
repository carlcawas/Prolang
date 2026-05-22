let username = null;
let displayName = username ?? "Guest";   // "Guest" — ?? checks null/undefined only

let user = { profile: { bio: "Hello!" } };
let bio = user?.profile?.bio;            // "Hello!"
let missing = user?.address?.city;       // undefined — no error thrown

console.log(displayName); // "Guest"
console.log(bio);         // "Hello!"
console.log(missing);     // undefined