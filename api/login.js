export default function handler(req, res) {
    // Build the `users` array from separate environment variables
    const users = [
      { username: process.env.USER_ADMIN_USERNAME, password: process.env.USER_ADMIN_PASSWORD, role: "admin" },
    ];
  
    const { username, password } = req.body;
  
    // Find the matching user
    const user = users.find((u) => u.username === username && u.password === password);
  
    if (user) {
      // Successful login
      return res.status(200).json({
        username: user.username,
        role: user.role,
      });
    } else {
      // Invalid credentials
      return res.status(401).json({ error: "Invalid credentials" });
    }
  }
  